for (let i = 1 ; i <= 10; i++) {
    console.log(`${i} *1 = ${i * 1}`);
}
//console.log(i, " * 1 = ", i * 1);
const longArr = ["Hi I am, Coo to see you in.","243098", "Hi I am"];
  console.log(longArr.length);


const names = ["omar", "nancy"];
  // names[0][0]
  let str = "";
  for (let i = 0; i < names.length; i++) {
    //             a.toUpperCase() => A
    str = "";
    str = names[i][0].toUpperCase() + names[i].substring(1);
    console.log(str);
  }
