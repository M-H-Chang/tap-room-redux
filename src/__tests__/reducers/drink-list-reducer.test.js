import drinkListReducer from '../../reducers/drink-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('drinkListReducer', () => {
  const currentState = {
    1:{names: 'IPA',
    brand: 'Bud Light', 
    price: '4.99', 
    alcoholContent: '4%',
    id: 1},
    2:{names: 'Beer',
    brand: 'Red Rock', 
    price: '3.99', 
    alcoholContent: '3%',
    id: 2}
  }

  test('Should successfully delete a drink', () => {
    action = {
      type: c.DELETE_DRINK,
      id: 1
    };
    expect(drinkListReducer(currentState, action)).toEqual({
      2: {names: 'Beer',
      brand: 'Red Rock', 
      price: '3.99', 
      alcoholContent: '3%',
      id: 2}
    })
  })
  let action;

  const drinkData = {
    names: 'IPA',
    brand: 'Bud Light',
    price: '4.99',
    alcoholContent: '4%',
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(drinkListReducer({}, { type: null })).toEqual({});
  });
  

})