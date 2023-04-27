//it just printed the 'current' result

function check() {
    let store = document.getElementById('result');
    const inputNumber = document.getElementById('number').value;
    
    let result = '';
    if (inputNumber%3===0 && inputNumber%5===0) {
        result = 'FizzBuzz!';
    } else if (inputNumber%3===0) {
        result = 'Fizz!';
    } else if (inputNumber%5===0) {
        result = 'Buzz!';
    } else {
        result = inputNumber;
    }
    store.innerHTML = hasil;
}
