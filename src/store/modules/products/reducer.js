const defaultState = [
  { id: 0, name: "Echo Dot", price: 279.00, image: "https://m.media-amazon.com/images/I/61vJsMttQhS._AC_SL1000_.jpg" },
  { id: 1, name: "Kindle Paperwhite", price: 499.00, image: "https://m.media-amazon.com/images/I/51ij0YhqZTS._AC_SL1000_.jpg" },
  { id: 2, name: "Fire TV Stick", price: 379.00, image: "https://m.media-amazon.com/images/I/616dVcez+nL._AC_SL1000_.jpg" }
];

const productsReducer = (state = defaultState, action) => {

  return state
}

export default productsReducer;
