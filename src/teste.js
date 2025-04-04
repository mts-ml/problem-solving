//  IMPRIME PIRAMIDES

function staircase(n) {
    for (let i = 1; i <= 6; i++) {
        const spaces = " ".repeat(n - i)
        const hashes = "#".repeat(i)
        console.log(spaces + hashes)
    }
}
staircase(6)



// ARRAY .SORT() CRESCENTE E DECRESCENTE E
// PEGABDO DO 2º AO ÚLTIMO NÚMERO E DO 1º AÓ PENÚLTIMO.

// Decrescente - Array.sort((a,b) => b - a)

function miniMaxSum(arr) {
    const maxSum = arr.sort((a, b) => a - b).slice(1)
    const maxResult = maxSum.reduce((acc, num) => acc + num)

    const minSum = arr.sort((a, b) => b - a).slice(0, arr.length - 1)
    const minResult = minSum.reduce((acc, num) => acc + num)
    console.log(minResult, maxResult)
}
miniMaxSum([7, 69, 2, 221, 8974])



// MAIOR NÚMERO DE UM ARRAY E QUANTAS VEZES ELE APARECE NO ARRAY.
function birthdayCakeCandles(candles) {
    const biggerCandle = Math.max(...candles)
    const biggestCandles = candles.filter(number => number === biggerCandle)
    const numberOfBiggestCandles = biggestCandles.length

    console.log(numberOfBiggestCandles)
}
birthdayCakeCandles([3, 2, 1, 3])



// TIME CONVERTER --------------------
function timeConversion(s) {
    let [hour, minutes, secondsAmPm] = s.split(":")

    const seconds = secondsAmPm.slice(0, -2)
    const isPm = s.includes("PM")

    if (isPm && hour !== "12") {
        hour = String(Number(hour) + 12)
    } else if (!isPm && hour == 12) {
        hour = "00"
    }

    const convertedTime = `${hour}:${minutes}:${seconds}`
    console.log(convertedTime)
}
timeConversion("12:05:45AM")


// PROPORTIONAL RATIO

function plusMinus(array) {
    let positiveNumbers = 0
    let neutralNumbers = 0
    let negativeNumbers = 0

    for (let num of array) {
        if (num > 0) {
            positiveNumbers++
        } else if (num === 0) {
            neutralNumbers++
        } else {
            negativeNumbers++
        }
    }
    console.log((positiveNumbers / array.length).toFixed(6))
    console.log((negativeNumbers / array.length).toFixed(6))
    console.log((neutralNumbers / array.length).toFixed(6))
}
plusMinus([1, 2, 0, -1, -2])



// REMOVING DUPLICATE LETTERS (DUPLICADOS GLOBAIS(VERIFICA O ARRAY INTEIRO))

function superReducedString(s) {
    const filteredArray = []
    const lettersArray = s.split("")
    console.log(lettersArray)

    for (let letter of lettersArray) {
        if (filteredArray.includes(letter)) {
            const indexOfLetter = filteredArray.indexOf(letter)
            filteredArray.splice(indexOfLetter, 1)
        } else {
            filteredArray.push(letter)
        }
    }


    if (filteredArray.length > 0) {
        const finalString = filteredArray.join("")
        console.log(finalString)
    } else {
        console.log("Empty string")
    }
}

superReducedString("zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh")

// zztqooauhujtmxnsbzpykwlvpfyqijvdhuhiroodmuxiobyvwwxupqwydkpeebxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh
// tqauhujtmxnsbzpykwlvpfyqijvdhuhirdmuxiobyvxupqwydkpbxmfvxhgicuzdealkgxlfmjiucasokrdznmtlwh


// REMOVING DUPLICATE ITEMS (DUPLICADOS ADJACENTES, ESTILHO STACK(PILHA), VERIFICA O ÚLTIMO ADICIONADO.)

function superReducedStrings(s) {
    const filteredArray = []
    const splitStringArray = s.split("")

    for (let letter of splitStringArray) {
        if (filteredArray[filteredArray.length - 1] === letter) {
            filteredArray.pop()
        } else {
            filteredArray.push(letter)
        }
    }

    if (filteredArray.length > 0) {
        const finalString = filteredArray.join("")
        return finalString
    } else {
        return "Empty String"
    }
}


// Grading Students

function gradingStudents(grades) {
    const newGradesArray = []

    for (let grade of grades) {
        const roundedGrade = Math.ceil(grade / 5) * 5
        const difference = roundedGrade - grade
        const shouldRound = grade >= 38 && difference < 3

        if (shouldRound) {            
            newGradesArray.push(roundedGrade)
        } else {
            newGradesArray.push(grade)
        }
    }
    console.log(newGradesArray)
}
gradingStudents([73, 67, 38, 33])



// COUNTING WORDS IN STRING

function camelcase(s) {
    let wordCounter = 1

    for (let letter of s) {
        if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
            wordCounter++
        }
    }

    console.log(wordCounter)
}
camelcase("saveChangesInTheEditor")
