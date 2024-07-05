function d(n) {
  let sum = n;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function findSelfNum(limit) {
  let generatedNum = new Set();

  for (let i = 1; i <= limit; i++) {
    let gen = d(i);

    if (gen <= limit) {
      generatedNum.add(gen);
    }
  }

  for (let j = 1; j <= limit; j++) {
    if (!generatedNum.has(j)) {
      console.log(j);
    }
  }
}
findSelfNum(10000);
