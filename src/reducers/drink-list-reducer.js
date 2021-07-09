import * as c from './../actions/ActionTypes';

export default (state = {}, action =>{
  const { names, brand, price, alcoholContent, id} = action;
  switch(action.type) {
    case c.ADD_DRINK:
    return Object.assign({}, state, {
      [id] : {
        names: names,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        id: id
      }
    });
    case c.DELETE_DRINK:
      let newState = { ...state };
      delete newState[id];
      return newState;
  }
})