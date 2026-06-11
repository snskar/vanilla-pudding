class Counter {
    #count = 0;

    incrementCount(amount = 1) {
        this.#count += amount;
    }

    decrementCount(amount = 1) {
        this.#count -= amount;
    }

    getCount() {
        return this.#count;
    }

    setCount(value) {
        this.#count = value;
    }

    reset() {
        this.#count = 0;
    }
}

const refreshButton = document.getElementById('refresh-button');
const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const countDisplay = document.getElementById('count-span');

const counter = new Counter();

const updateDisplay = () => {
    countDisplay.textContent = counter.getCount();
};

updateDisplay();

refreshButton.addEventListener('click', () => {
    counter.reset();
    updateDisplay();
});

incrementButton.addEventListener('click', () => {
    counter.incrementCount();
    updateDisplay();
});

decrementButton.addEventListener('click', () => {
    counter.decrementCount();
    updateDisplay();
});
