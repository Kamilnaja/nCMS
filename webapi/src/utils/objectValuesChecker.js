/* @flow */
// funkcja sprawdza, czy obiekt posiada wypełnione wszystkie pola key. 
export function checkObjectHasAllValues(value) {
    Object.keys(value).some((i) => {
        if (!value[i]) {
            return false;
        } else {
            return true;
        }
    })
}