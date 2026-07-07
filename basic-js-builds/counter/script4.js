

class Counter {

    constructor(container = document, defaultCount = 0){

        this.incrementButton = container.querySelector('#increment-button');
        this.decrementButton = container.querySelector('#decrement-button');
        this.resetButton = container.querySelector('#reset-button');

        this.counterDisplay = container.querySelector('#counter-value');

        this.count = defaultCount;
        this.defaultCount = defaultCount;
        this.init();
    }

    init = () => {
        this.incrementButton.addEventListener('click', this.increment);
        this.decrementButton.addEventListener('click', this.decrement);
        this.resetButton.addEventListener('click', this.reset);
        this.render();
    }

    render = () => {
        this.counterDisplay.textContent = this.count;
    }   

    increment = () => {

        this.count++;
        this.render();
    }

    decrement = () => {
        this.count--;
        this.render();
    }

    reset = () => {

        this.count = this.defaultCount;
        this.render();
    }

    
}


let counterContainer = document.getElementById('counter-1');
let counter = new Counter(counterContainer);

