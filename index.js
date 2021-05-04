function beautifulDays(i, j, k) {
    let counter = 0
    for (let num = i; num <= j; num++) {
        let initNum = num
        let initArray = initNum.toString().split('')
        let initArrayReverse = []
        for (let numDigit in initArray) {
            initArrayReverse.unshift(initArray[numDigit])
        }
        let diff = num - parseInt(initArrayReverse.join(""))
        diff = Math.abs(diff)
        if (diff % k == 0) {
            counter += 1
        }
    }
    return counter
}
