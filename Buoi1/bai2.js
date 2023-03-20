// let arr1 = [1, 4, 7, 2, 3]
// let arr2 = [5, 2, 6, 3, 1]

// const find = (arr1, arr2) => check = arr1.filter(value => arr2.includes(value))
// console.log(find(arr1, arr2));

let arrA = [1, 7, 4, 2, 3, 3];
let arrB = [5, 2, 6, 3, 1];
let arrRes = [] // [1, 2, 3]

for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
        if (arrA[i] === arrB[j]) {
            arrRes.push(arrA[i]);
            arrA.splice(i, 1);
            arrB.splice(j, 1);
            --i; --j;
            break;
        }
    }
}

console.log(arrRes);