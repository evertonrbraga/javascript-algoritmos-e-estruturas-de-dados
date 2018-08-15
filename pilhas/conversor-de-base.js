function baseConverter(decNumber, base) {
    var restStack = [],
    rest,
    baseString = '',
    digits = '0123456789ABCDEF'

    while(decNumber > 0) {
        rest = Math.floor(decNumber % base)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / base)
    }

    while(restStack.length > 0) {
        baseString += digits[restStack.pop()]
    }

    return baseString
}