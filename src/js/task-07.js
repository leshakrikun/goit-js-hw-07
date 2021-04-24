const inputRange = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');
inputRange.addEventListener('input', (event) => {
    spanEl.style.fontSize = event.currentTarget.value + "px";
})