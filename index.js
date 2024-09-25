const reverseString = (name) => {
  console.log(name.split(/[ ,]+/));
  const arr = name.split(/[ ,]+/);
  let reversed = "";
  for (let j = 0; j < arr.length; j++) {
    let wordReverse = "";
    for (let i = arr[j].length - 1; i >= 0; i--) {
      wordReverse = wordReverse + arr[j][i];
      console.log(arr[j][i]);
    }
    reversed = reversed + wordReverse + " ";
  }
  return reversed;
};

console.log(reverseString("My name is"));
// my eman si
