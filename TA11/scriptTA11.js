function duplicates(nums) {
  let cont = {};
  let repetidos = 0;
  for (let elemento of nums) {
    cont[elemento] = (cont[elemento] || 0) + 1;
  }
  for (let key in cont) {
    if (cont[key] > 1) {
      repetidos++;
    }
  }
  console.log(repetidos);
} duplicates([1, 2, 2, 3, 4, 4, 4, 5, 5, 3]);

