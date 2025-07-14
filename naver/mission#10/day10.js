const fs = require("fs").promises;
const path = require("path");

async function loadModel() {
  const dataRaw = await fs.readFile(
    path.join(__dirname, "data.model"),
    "utf-8"
  );
  console.log("dataRaw ------", dataRaw);
  const entries = [];
  for (const line of dataRaw.split(/\r?\n/)) {
    const mPath = line.match(/path="([^"]+)"/);
    const mId = line.match(/objectid="([^"]+)"/); // /objectid="([^"]+)"/ 로 objectid="..." 부분을 찾아냄
    if (mPath && mId) {
      // "/Objects/a.model" → "objects/a.model"
      const rel = mPath[1].replace(/^\/[Oo]bjects\//, "objects/");
      entries.push({ objectid: mId[1], filepath: path.join(__dirname, rel) });
    }
  }

  console.log(entries);
  const objects = [];

  for (const { objectid, filepath } of entries) {
    const data = await fs.readFile(filepath, "utf-8");
    // 줄바꿈을 두번을 기준으로 나눠서 파일의 내용 빈줄 하나씩 지움
    const [vertices, triangles] = data.split(/\r?\n\r?\n/);

    const parsingVerices = vertices
      .split(/\r?\n/)
      .map((line, idx) => {
        if (idx === 0) return;
        const [, x, y, z] = line
          .match(/x="([^"]+)" y="([^"]+)" z="([^"]+)"/)
          .map(Number);
        return { x, y, z };
      })
      .filter(Boolean);

    const parsingTriangles = triangles
      .trim()
      .split(/\r?\n/)
      .map((line, idx) => {
        if (idx === 0) return;

        const [, v1, v2, v3] = line
          .trim()
          .match(/v1="([^"]+)" v2="([^"]+)" v3="([^"]+)"/)
          .map(Number);

        return { v1, v2, v3 };
      })
      .filter(Boolean);

    objects.push({
      objectid,
      vertices: parsingVerices,
      triangles: parsingTriangles,
    });
  }
  return objects;
}

function analyze() {}

async function main() {
  try {
    const object = await loadModel();
    const result = analyze(object);

    // 분석함수,, 및 ansi progress bar... 로직
    console.log("object", object);
  } catch (error) {
    console.error(error);
  }
}

main();
