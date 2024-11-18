const buttons = document.querySelector('.buttons');
const arr = ['C', '+/-', '%', '÷', "7", '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
for (let i=0; i <= 19; i++) {
    const btn = document.createElement('div');
        btn.textContent = arr[i];
        btn.setAttribute('class', 'btn');
        buttons.appendChild(btn);
}
