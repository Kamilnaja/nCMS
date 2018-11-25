import thunk from 'redux-thunk';
import store from '../reducers/store';
import { articleEdited } from '../actions/articlesActions';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import ActionTypes from './../utils/ActionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('action', () => {

    it('should edit articles action work ok', () => {
        // fetchMock.restore();

        const store = mockStore({})
        const expectedActions = [
            { type: ActionTypes.EDIT_ARTICLE_SUCCESS }
        ]
        return store.dispatch(articleEdited()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})