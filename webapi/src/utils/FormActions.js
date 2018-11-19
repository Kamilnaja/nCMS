export default class FormActions {
    static doPostSubmitActions(form, bar) {
        bar.toggleInfoBar();
        // hide infobar
        setTimeout(() => {
            bar.toggleInfoBar();
        }, 3000);
        //reset form
        document.getElementById(form).reset();
    }
}