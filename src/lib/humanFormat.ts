export const customFormatterForChart = (number: number, decimals = 0) => {
    return humanFormat(number, 2);
}

export function humanFormat(number: number, fractionDigits: number): string {
    if (number < 1000) {
        return number.toString();
    } else if (number < 1000000) {
        return `${cutOutLastZeros((number / 1000).toFixed(fractionDigits))}K`;
    } else if (number < 1000000000) {
        return `${cutOutLastZeros((number / 1000000).toFixed(fractionDigits))}M`;
    } else if (number < 1000000000000) {
        return `${cutOutLastZeros((number / 1000000000).toFixed(fractionDigits))}B`;
    } else {
        return `${cutOutLastZeros((number / 1000000000000).toFixed(fractionDigits))}T`;
    }
}

function cutOutLastZeros(n: string): string {
    let i = n.toString()
    for (let j = 0; j < n.length; j++) {
        if (i.endsWith('0')) {
            i = i.slice(0, -1)
        } else if (i.endsWith('.')) {
            i = i.slice(0, -1)
            return i
        }
    }
    return i
}