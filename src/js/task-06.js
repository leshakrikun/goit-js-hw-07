const validationCss = document.getElementById('validation-input')
const dataLength = Number(validationCss.getAttribute('data-length'))
validationCss.addEventListener('blur', (event) => {
    const nameLength = event.currentTarget.value.length
    validationCss.classList.add('invalid')
    validationCss.classList.remove('valid')
    if (nameLength === dataLength) {
        validationCss.classList.add('valid')
        validationCss.classList.toggle('invalid')
    }
})