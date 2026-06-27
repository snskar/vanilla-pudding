let incrementButton = document.getElementById('increment-button');
let decrementButton = document.getElementById('decrement-button');
let resetButton = document.getElementById('reset-button');

let makeCounter = function() {

    let count = 0;

    let updateCounter = function(){
        document.getElementById('counter-value').textContent = count;
    }

    let increment = function(){
        count++;
        updateCounter();
    }

    let decrement = function(){
        count--;
        updateCounter();
    }

    let reset = function(){
        count = 0;
        updateCounter();
    }

    return {
        increment, 
        decrement, 
        reset
    };
}

let counter = makeCounter();

incrementButton.addEventListener('click', counter.increment);
decrementButton.addEventListener('click', counter.decrement);
resetButton.addEventListener('click', counter.reset);