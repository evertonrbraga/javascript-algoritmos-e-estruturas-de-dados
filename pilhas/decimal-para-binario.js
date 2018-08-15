function dec2Bin(decNumber) {
    var restStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0) {
        rest = Math.floor(decNumber % 2)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while(restStack.length > 0) {
        binaryString += restStack.pop().toString()
    }

    return binaryString
}