import * as actions from './../../actions'
import * as c from './../../actions/ActionTypes';

describe('tap room actions', () => {
  it('deleteDrink should create DELETE_DRINK action', () => {
    expect(actions.deleteDrink(1)).toEqual({
      type: c.DELETE_DRINK,
      id: 1
    })
  })
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
  it('addDrink should create ADD_DRINK action', () => {
    expect(actions.addDrink({names: 'IPA', brand: 'Bud Light', price: '4.99', alcoholContent: '4%', id: 1})).toEqual({
      type: c.ADD_DRINK,
      names: 'IPA',
      brand: 'Bud Light', 
      price: '4.99', 
      alcoholContent: '4%',
      id: 1
    })
  })
  
})