let arr = ['Create', 'a', 'file', 'for', 'this', 'exercise', 'titled', 'exercise-one.js'];
console.log("1", arr);

arr.push('lesson03');
console.log("2", arr);

arr.splice(2, 1);
console.log("3", arr);

let str = arr.join( ', ');
console.log("4", str);
