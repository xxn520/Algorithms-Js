let max = Number.MIN_SAFE_INTEGER
let n = 0, m = 0, sum =0
let ve = [], we = []

function dfs(num,weight) {
    if (num > n) {
        if (sum > max) {
            max = sum
        }
    } else {
        for (let i = 0; i <= 1 ; i++) {
            if (i === 0) {
                dfs(num+1, weight)
            } else if (weight >= ve[num]) {
                sum += we[num]
                dfs(num+1, weight - ve[num])
                sum -= we[num]
            }
        }
    }
}

function Package01(num,weight,v,w) {
    max = Number.MIN_SAFE_INTEGER
    n = num
    m = weight
    sum = 0
    ve = v
    we = w
    ve.unshift(-1)
    we.unshift(-1)
    dfs(1,m)
    console.log(max)
}

Package01(5, 100, [77,22,29,50,99], [92,22,87,46,90])