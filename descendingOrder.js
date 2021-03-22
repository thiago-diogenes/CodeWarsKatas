function descendingOrder(n) {
  const numArray = Array.from(String(n), Number);

  let descendingArray = [...numArray];

  for (let i = 0; i < numArray.length; i++) {
    for (let index in numArray) {
      let intIndex = parseInt(index);
      if (intIndex === numArray.length - 1) {
        break;
      }

      if (descendingArray[intIndex] < descendingArray[intIndex + 1]) {
        const firstNumber = descendingArray[intIndex];
        const secondNumber = descendingArray[intIndex + 1];
        descendingArray[intIndex] = secondNumber;
        descendingArray[intIndex + 1] = firstNumber;
      }
    }
  }

  return parseInt(descendingArray.join(''));
}
