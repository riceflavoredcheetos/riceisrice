import axios from "axios";

/**
 * ACTION TYPES
 */

export const GET_PRODUCT = "GET_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const POST_CATEGORY = "POST_CATEGORY";
export const UPDATE_PRODUCT_CATEGORY = "UPDATE_PRODUCT_CATEGORY";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

/**
 * ACTION CREATORS
 */

export const getProduct = product => ({ type: GET_PRODUCT, product });
export const editProduct = product => ({ type: UPDATE_PRODUCT, product });
export const addCategory = category => ({ type: POST_CATEGORY, category });
export const editCategory = category => ({
  type: UPDATE_PRODUCT_CATEGORY,
  category
});
export const removeProduct = product => ({ type: DELETE_PRODUCT, product });

/**
 * THUNK CREATORS
 */

export const getSingleProduct = productId => dispatch =>
  axios
    .get(`/api/products/${productId}`)
    .then(res => {
      dispatch(getProduct(res.data));
    })
    .catch(err => console.log(err));

export const updateSingleProduct = updatedProduct => dispatch =>
  axios
    .put("/api/products/" + +updatedProduct.productId, updatedProduct)
    .then(res => {
      dispatch(getProduct(res.data));
    })
    .catch(err => console.log(err));

export const postCategory = category => dispatch =>
  axios
    .post("/api/categories/", category)
    .then(res => {
      dispatch(addCategory(res.data));
    })
    .catch(err => console.log(err));

export const updateSingleProductCategory = (
  productId,
  selectedCategoryId
) => dispatch => {
  axios
    .post("/api/producttypes/", {
      productId: productId,
      categoryId: selectedCategoryId
    })
    .then(res => {
      dispatch(editCategory(res.data));
    })
    .catch(err => console.log(err));
};

export const removeSingleProduct = productId => dispatch => {
  dispatch(removeProduct(productId));
  axios.delete(`/api/products/${productId}`).catch(err => console.log(err));
};


export const addToCart = (product) =>
    dispatch =>
      axios.post('/auth/me/cart', product)



/**
 * REDUCER
 */

export default function(state = [], action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product;
    case UPDATE_PRODUCT:
      return state.map(
        product => (action.product.id === product.id ? action.product : product)
      );
    case UPDATE_PRODUCT_CATEGORY:
      return action.category;
    default:
      return state;
  }
}
