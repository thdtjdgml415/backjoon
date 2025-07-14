// 데이터 입력/출력 부분
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 중복된 파일을 들과 갯수를 출력하는 함수
 * @param {string[]} files
 * @returns key = 파일명, value = 카운트 Hash Map
 */
function match(files) {
  const fileMap = new Map();

  files.forEach((path) => {
    // 1. 파일명만 추출
    const fileName = path.split("/").pop();
    console.log(fileName);
    // 2. 버전(_v1~_v9) 제거
    const normalized = fileName.replace(/_v[1-9](?=\.[a-z]{2}$)/, "");

    // 3. 카운트
    fileMap.set(normalized, (fileMap.get(normalized) || 0) + 1);
  });

  // 4. 2개 이상만 Map에 남기기
  for (const [key, value] of Array.from(fileMap)) {
    if (value <= 1) fileMap.delete(key);
  }

  return fileMap;
}

let inputs = [];
rl.on("line", (line) => {
  inputs.push(line);
  if (inputs.length === 1) {
    rl.close();
  }
});

rl.on("close", () => {
  const fileArray = inputs[0].split(",");
  const answer = match(fileArray);
  if (answer.size == 0) {
    console.log("!EMPTY");
    rl.close();
    return;
  }
  for (const [key, value] of answer) {
    console.log(key + "=" + value);
  }
  rl.close();
});
