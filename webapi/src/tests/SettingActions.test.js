import * as settingsActions from './../actions/settingActions';
import ActionTypes from './../utils/ActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from "redux"
export const mockStore = configureMockStore([thunk]);

describe(('actions test'), () => {
    it('should return all settings', async () => {
        const store = mockStore();
        await store.dispatch(settingsActions.getSettings());
        const actions = store.getActions();
        console.log(store)
        expect(actions[0].toEqual({ type: ActionTypes.GET_SETTINGS_SUCCESS }))
    })
})

describe(('paginator test'), () => {
    it('paginator should works ok', () => {
        const actual = settingsActions.setCurrentPaginationPage(1);
        const expected = { 'type': ActionTypes.SET_CURRENT_PAGINATION_PAGE, payload: 1 };
        expect(actual).toEqual(expected);
    })
})