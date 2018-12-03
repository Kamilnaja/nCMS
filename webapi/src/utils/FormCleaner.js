export function cleanForm() {
    let inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type != 'submit') {
            inputs[i].value = '';
        }
    }
}