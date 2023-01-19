const WishlistReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...state, action.payload.item];

    case "REMOVE_FROM_WISHLIST":
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });

    default:
      return state;
  }
};

export default WishlistReducer;
