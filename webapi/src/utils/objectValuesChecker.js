// funkcja sprawdza, czy obiekt posiada wypełnione wszystkie pola key. 
export function checkObjectHasAllValues(value) {
    Object.keys(value).some((i) => {
        if (!value[i]) {
            console.log('nie wszystkie wypełnione');
            return false;
        } else {
            return true;
        }
    })
}