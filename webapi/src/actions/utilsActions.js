import store from './../store';

export function cleanInfoStrip() {
    store.dispatch((dispatch) => {
        dispatch({
            type: "CLEAN_INFO_STRIP"
        })
    })
}