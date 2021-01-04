class View {
    constructor() {
        this.input = document.getElementById('inputTxt');
        this.button = document.getElementById('butClick');
    }

    bindButton(handler) {
        this.button.addEventListener('click', () => {
            handler(this.input.value);
        });
    }
}