// function myNum(num1=0, num2, num3) {
//     const total = num1 ;
//     console.log(num1,total);
//     return total;
    
// }
// const sum = myNum(3)


// const number = [1,2,3,4,]
// const students = {
//     name:"nazmul",
//     age:33
// }

// const math = `my name is ${students.name}
// my age is ${number[2] + students.age}}`
// console.log(math);

// const myname = () => console.log('jewel');
// let a = a=> a*a
// const f =a(3)
// console.log(f);
// const hh = myname()
// console.log(hh);


// const myArray =[3,5,6,7,8,9,11,10];
// const mum = Math.max(...myArray)
// console.log(mum);

// let arr1 = [1,2,3,4]
// function sum(num1,num2,num3,num4) {
//     return num1 + num2 + num3 + num4;
// }
// console.log(sum(...arr1));

// const myFunc = () => console.log('Nayok!');

// let a = 12, b = 3;
// [a, b] = [b, a];
// console.log([b, a]);

// write an arrow function that will take 3 parameters will multiply the parameters and will return the result.
const myFunc = (a,b,c) => {
    const multiple = (a*b*c);
    return multiple;
}
const result = myFunc(3,4,5);
console.log(result);

// write the following sentence in three lines and print the result :i am a web developer,i love to code,i love to eat biryani.

const line1 = "i am a web developer";
const line2 ="i love to code";
const line3 = "i love to eat biryani";

const sentence = `${line1}
${line2}
${line3}
`
console.log(sentence);

// write  an arrow function that will take 2 parameters one parameter will come from you and the other parameter wil be defult parameter.add these two parameters and return the result.
const myFunct = (a,b=0) => {
const result = a+b;
return result
}
const supply =myFunct(2);
console.log(supply);


const friendsArray = (friend) => {
    let sum =[]
for (const iterator of friend) {
    if (iterator.length % 2 === 0) {
    //    console.log("jor");
       
       sum.push(iterator)
    }
}
return sum;
}
const friends =["rahim","karim","jobbar","muztafiz","jewel","nazmul"]
const res = friendsArray(friends)
console.log(res);





const myFunctio = (nums) => {
    let sum =0
for (const num of nums) {
    const sqr = num*num;
sum = sum + sqr;
}
// return sum;
let avarage = sum / (nums.length);
const numFix =avarage.toFixed(2);
const FloatNum =parseFloat(numFix);
return FloatNum;

}

const myNum = [9,7,10,11,12,13,14];
const finalRes = myFunctio(myNum);
console.log(finalRes);

