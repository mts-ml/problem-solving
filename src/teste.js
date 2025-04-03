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
