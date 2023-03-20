let arr = [1, 7, 4, 2, 3, 1, 2, 2, 9, 3]
function sort(arr) {
    const array = [...new Set(arr)]
    array.sort((a, b) => b - a);
    return array
}

console.log(sort(arr))
