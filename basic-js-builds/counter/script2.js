

function makeCounter(){

    let count = 0;

    const updateDisplay = function(){
        let countText = document.getElementById('counter-text');
        countText.textContent = count;
    }

    updateDisplay();

    makeCounter.increment = () => {

        count++;
        updateDisplay();

    } 

    makeCounter.decrement = () => {

        count--;
        updateDisplay();
    }

    makeCounter.reset = () => {

        count = 0;
        updateDisplay();
    }

    return makeCounter;


}

let counter = makeCounter();

let incrementButton = document.getElementById('increment-button');
let decrementButton = document.getElementById('decrement-button');
let resetButton = document.getElementById('reset-button');

incrementButton.addEventListener( 'click', ()=> {
    counter.increment();
});

decrementButton.addEventListener( 'click', ()=> {
    counter.decrement();
});

resetButton.addEventListener( 'click', ()=> {
    counter.reset();
});

