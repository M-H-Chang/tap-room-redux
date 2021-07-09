import * as c from './../actions/ActionTypes';

export const deleteDrink = id => ({
  type: c.DELETE_DRINK,
  id: 1
})

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addDrink = (drink) => {
  const {names, brand, price, alcoholContent, id} = drink;
  return {
    type: c.ADD_DRINK,
    names: names,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    id: id
  }
}