// fail khi chon sai ket qua
var math = document.querySelector('.math-display')
var btnTrue = document.querySelector('.button-true')
var btnFalse = document.querySelector('.button-false')
var modal = document.querySelector('.modal-bg')
var modal_fail = document.querySelector('.final-score')
var sc = document.querySelector('.score')
var btnRs = document.querySelector('.button-rs')
var bar = document.querySelector('.game')

var score = 0
var interval, runTime

mainRun();

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function resetFlow() {
    bar.style.setProperty('--ani', 'none')
    void bar.offsetWidth;
    bar.style.setProperty('--ani', 'bar 5s linear backwards')
}

function reset() {
    console.log('reset')
    score = 0
    sc.innerText = score
    clearInterval(interval)
    modal.style.display = 'none'
    resetFlow()
    mainRun();
}

function addScore() {
    console.log('addScore')
    score += 1
    sc.innerText = score
    clearInterval(runTime)
    resetFlow()
    mainRun();
}

function fail() {
    console.log('fail')
    clearInterval(runTime)
    modal_fail.innerText = score
    modal.style.display = 'block'
    btnRs.addEventListener('click', () => {
        reset();
    }, { once: true })
}

function Run() {
    console.log('run')
    clearInterval(interval)
    resetFlow()
    let timer = document.querySelector('.timer')
    timer.innerText = 5
    interval = setInterval(() => {
        timer.innerText = eval(timer.innerText - 1)
    }, 1000)

    var dau = ['+', '-']
    var A = randomNumberBetween(0, 99)
    var B = randomNumberBetween(0, 99)
    var dau1 = dau[randomNumberBetween(0, 1)]
    var ans = eval(`${A}${dau1}${B}`)
    var temp = randomNumberBetween(0, 1)
    console.log('temp:', temp)
    if (temp == 0) {
        math.innerText = `${A} ${dau1} ${B} = ${ans}`
        btntrue = addScore
        btnfalse = fail
    } else if (temp == 1) {
        var ans1 = eval(`${ans}${dau1}${randomNumberBetween(1,5)}`)
        math.innerText = `${A} ${dau1} ${B} = ${ans1} `
        btntrue = fail
        btnfalse = addScore
    }
}

function mainRun() {
    bar.style.setProperty('--state', 'running')
    Run();
    runTime = setInterval(Run, 5000)
}