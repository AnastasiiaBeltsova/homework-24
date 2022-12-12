class FormElement {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
    showName() {
        console.log(`Name: ${this.name}`);
    }
    getValue() {
        return this.value;
    }
}

class TextElement extends FormElement {
    constructor({placeholder, name, type, value}) {
        super(name, type, value);
        this.placeholder = placeholder;
        this.name = name;
        this.type = type;
    }
    createInput() {
        this.element = document.createElement('input');
        this.element.setAttribute('placeholder', this.placeholder);
        this.element.setAttribute('name', this.name);
        this.element.setAttribute('type', this.type);
        this.element.addEventListener('change', () => {
            this.value = this.element.value;
        });
    }
}

class CheckboxElement extends FormElement {
    constructor({checked, type}) {
        super(type);
        this.checked = checked;
        this.type = type;
    }
    createCheckbox() {
        this.element = document.createElement('input');
        this.element.setAttribute('type', this.type);
        this.element.setAttribute('class', "checkbox");
        this.element.checked = this.checked;
        this.elem = document.createElement('span')
        this.elem.innerText = "I agree all statements in Terms of service";
    }
}

class ButtonElement extends FormElement {
    constructor({text}) {
        super();
        this.text = text;
    }
    createButton() {
        this.element = document.createElement('button');
        this.element.innerText = `${this.text}`;
    }
}

const inputName = new TextElement({
    placeholder: "Your Name",
    type: "text",
    name: "name",
})

const inputEmail = new TextElement({
    placeholder: "Your Email",
    type: "email",
    name: "email",
})

const inputPassword = new TextElement({
    placeholder: "Your Password",
    type: "password",
    name: "password",
})

const inputPass = new TextElement({
    placeholder: "Repeat your password",
    type: "password",
    name: "password",
})

const checkbox = new CheckboxElement({
    type: "checkbox",
    checked: false,
})

const button = new ButtonElement({
    text: "Register",
})


inputName.createInput();
inputEmail.createInput();
inputPassword.createInput();
inputPass.createInput();
checkbox.createCheckbox();
button.createButton();

const form = document.querySelector('.js--form');
form.insertAdjacentElement('beforeend', inputName.element);
form.insertAdjacentElement('beforeend', inputEmail.element);
form.insertAdjacentElement('beforeend', inputPassword.element);
form.insertAdjacentElement('beforeend', inputPass.element);
form.insertAdjacentElement('beforeend', checkbox.element);
form.insertAdjacentElement('beforeend', checkbox.elem);
form.insertAdjacentElement('beforeend', button.element);



