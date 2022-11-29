//SORT bez sort

const arr = [2, 99, 34, 67, 12];

function sortArrayPawel (arr) {
    let res = [...arr];

    for (let outer = 0 ; outer < res.length ; outer++) {
        let outerEl = res[outer];
        console.log(res[outer]+" outer")
        for (let inner = outer+1 ; inner < res.length ; inner++) {
            console.log(res[inner]+" inner")
            let innerEl = res[inner]
            console.log(innerEl)
            if (outerEl > innerEl) {
                res[outer] = innerEl;
                res[inner] = outerEl;
                outerEl = res[outer];
                innerEl = res[inner];
            }
        }
    }
    console.log(res)
    return res
}

sortArrayPawel(arr)


// NO VOWELS aeiou

function fuckVowels (str) {
    const vowels = ["a", "e", "i", "o", "u"];

    console.log(str.replace(/[aeiou]/gi, ""))
    console.log([...str].filter(el=>!vowels.includes(el)).join(""))
}

fuckVowels("dupa")