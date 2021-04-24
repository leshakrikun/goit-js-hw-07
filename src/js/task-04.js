const counter = document.querySelectorAll('button')

const counterMean = document.getElementById('value')
let counterValue = 0

counter[0].addEventListener('click', () => {
    counterValue = counterValue -= 1
    counterMean.textContent = counterValue
})

counter[1].addEventListener('click', () => {
    counterValue = counterValue += 1
    counterMean.textContent = counterValue
})