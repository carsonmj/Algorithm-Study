var reverse = function(x) {
    const maxLimit = Math.pow(2,31) - 1;
    const minLimit = Math.pow(-2,31);
    if (x < minLimit || x > maxLimit) {
    return 0;
    }
    const absOfX = Math.abs(x);
    const strAbsOfX = absOfX.toString();
    const lengthOfstrAbsOfX = strAbsOfX.length;
    const arr = [];
    for (let i = 1; i < lengthOfstrAbsOfX + 1; i++) {
    arr.push(strAbsOfX[lengthOfstrAbsOfX - i]);
    }
    const ABSofResult = arr.join().replaceAll(",","") * 1;
    if (minLimit < Math.pow(-2,31) || ABSofResult > maxLimit) {
        return 0;
    }
    const xIsNegotive = x < 0;
    if (xIsNegotive) {
        return ABSofResult*-1;
    } else {
        return ABSofResult*1;
    }
}
