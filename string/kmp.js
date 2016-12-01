function buildNext(str) {
    let next = []
    const len = str.length
    next[0] = -1
    for (let i = 1; i < len; i++) {
        j = next[i-1]
        while (str[j+1] !== str[i] && j >= 0) {
            j = next[j]
        }
        if (str[j+1] === str[i]) {
            next[i] = j+1
        } else {
            next[i] = -1
        }
    }
    return next
}

function kmp(sstr, tstr) {
    const slen = sstr.length, tlen = tstr.length
    const next = buildNext(tstr)
    let i = 0, j = 0
    while (i < slen && j < tlen) {
        if (sstr[i] === tstr[j]) {
            i++
            j++
        } else {
            if (j === 0) {
                i++
            } else {
                j = next[j-1]+1
            }
        }
    }
    return j === tlen ? i - tlen : -1;
}

console.log(kmp('abcabcacab', 'aca'))