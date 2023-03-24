const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "We love Programming!!!"
let idx = 1
let speed = 300 / 4

writeText


function writeText(){
    textEl.innerText = text.slice(0,1)
    idx++

    if (idx > text.length){
        idx = 1
    }
    setTimeOut(writeText, speed)
}