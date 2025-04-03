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
