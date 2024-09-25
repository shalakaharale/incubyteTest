const reverseString = (name) => {
  console.log(name.split(/[ ,]+/));
  const arr = name.split(/[ ,]+/);
  let reversed = "";
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[j].length; i++) {
      console.log(arr[j][i]);
    }
  }
  return reversed;
};

console.log(reverseString("My name is"));
// my eman si
