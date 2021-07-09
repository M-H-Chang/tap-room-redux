import * as actions from './../../actions'
import * as c from './../../actions/ActionTypes';

describe('tap room actions', () => {
  it('deleteDrink should create DELETE_DRINK action', () => {
    expect(actions.deleteDrink(1)).toEqual({
      type: c.DELETE_DRINK,
      id: 1
    })
  })
})