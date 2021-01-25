function reverseMyName(str) {
    return str.split('').reverse().join('')
}

const Test = (fun, result) => console.log(reverseMyName(fun) === result)

Test("Makan","nakaM")





// let str='Hallo';
// console.log(str.split('').reverse().join(''));
// return str