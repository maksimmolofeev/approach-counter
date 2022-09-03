const quantityNode = document.querySelector('.js-quantity');
const btnNode = document.querySelector('.js-btn')

// Переменная с кол-вом подходов
let quantity = 0;


// Вывод кол-ва подходов на экран
function render () {
    quantityNode.innerHTML = `
        <p>${quantity}</p>
    `
}

// По нажатию на кнопку, +1 к кол-ву повоторов
btnNode.addEventListener('click', function() {
    quantity += 1

    render()
})