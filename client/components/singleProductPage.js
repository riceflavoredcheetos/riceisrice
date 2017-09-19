import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
  getSingleProduct,
  updateSingleProduct,
  postCategory,
  updateSingleProductCategory,
  removeSingleProduct
} from "../store/singleProduct";
import Review from "./reviews";

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategories: []
    };
    this.getCategories = this.getCategories.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleNewCategory = this.handleNewCategory.bind(this);
    this.handleRemoveCategory = this.handleRemoveCategory.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const productId = this.props.match.params.productId;
    this.props.loadProduct(productId);
    this.getCategories();
  }

  getCategories() {
    return axios
      .get("/api/categories")
      .then(res => res.data.forEach(el => this.state.categories.push(el)));
  }

  handleUpdate(event) {
    event.preventDefault();

    const productId = Number(this.props.match.params.productId);
    const title = event.target.title.value || this.props.singleProduct.title;
    const description =
      event.target.description.value || this.props.singleProduct.description;
    const image = event.target.image.value || this.props.singleProduct.image;
    const price = event.target.price.value || this.props.singleProduct.price;
    const inventory =
      event.target.inventory.value || this.props.singleProduct.inventory;

    const updatedProduct = {
      productId,
      title,
      description,
      image,
      price,
      inventory
    };

    const selectedCategoryIds = [];

    this.state.categories.forEach(category => {
      this.state.selectedCategories.forEach(selected => {
        if (category.type === selected) {
          selectedCategoryIds.push(category.id);
        }
      });
    });

    this.props.updateProduct(updatedProduct); // update product
    selectedCategoryIds.forEach(selectedCategoryId => this.props.updateCategory(productId, selectedCategoryId)); // update with selected categories
  }

  handleCategory(event) {
    this.state.selectedCategories.push(event.target.value);
    this.setState({
      selectedCategories: this.state.selectedCategories.filter(
        (el, index) => this.state.selectedCategories.indexOf(el) === index
      )
    });
  }

  handleNewCategory(event) {
    this.props.addCategory({ type: event.target.newCategory.value });
  }

  handleRemoveCategory(event) {
    this.state.selectedCategories.splice(
      this.state.selectedCategories.indexOf(event.target.value),
      1
    );
  }

  handleDelete() {
    const productId = this.props.match.params.productId;
    this.props.deleteProduct(productId);
    this.props.history.push("/product");
  }

  render() {
    const product = this.props.singleProduct;
    const categories = this.state.categories;
    const selectedCategories = this.state.selectedCategories;

    return (
      <div className="row">
        <div className="col-md-8">
          <div>
            <h1>{product.title}</h1>
          </div>
          <img src={product.image} />
          <p>{product.description}</p>
          <p>price: ${product.price}</p>
          <div>
            <Review />
          </div>
        </div>
        <div className="col-md-4">
          <form id="edit-product-form" onSubmit={this.handleUpdate}>
            <div className="media-body">
              <h3> Edit Product </h3>
              <h5 className="media-heading tucked">
                name: &nbsp;&nbsp;
                <input
                  name="title"
                  type="text"
                  placeholder="title"
                  className="form-like"
                />
              </h5>
              <h5 className="media-heading tucked">
                description: &nbsp;&nbsp;
                <input
                  name="description"
                  type="text"
                  placeholder="description"
                  className="form-like"
                />
              </h5>
              <h5 className="media-heading tucked">
                image URL: &nbsp;&nbsp;
                <input
                  name="image"
                  type="text"
                  placeholder="image URL"
                  className="form-like"
                />
              </h5>
              <h5 className="media-heading tucked">
                price: &nbsp;&nbsp;
                <input
                  name="price"
                  type="text"
                  placeholder="$"
                  className="form-like"
                />
              </h5>
              <h5 className="media-heading tucked">
                quantity: &nbsp;&nbsp;
                <input
                  name="inventory"
                  type="text"
                  placeholder="number of products"
                  className="form-like"
                />
              </h5>
              <h5>
                category: &nbsp;
                <select
                  value={this.state.selectedCategory}
                  multiple="true"
                  onChange={this.handleCategory}
                >
                  {categories.map(category => (
                    <option
                      key={category.id}
                      name={category.type}
                      value={category.type}
                    >
                      {category.type}
                    </option>
                  ))}
                </select>
              </h5>
              <h5>
                selected categories: &nbsp;
                {selectedCategories.map(selectedCategory => (
                  <li key={selectedCategory}>
                    {selectedCategory}
                    <button
                      onClick={this.handleRemoveCategory}
                      value={selectedCategory}
                    >
                      X
                    </button>
                  </li>
                ))}
              </h5>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
          <form id="add-category-form" onSubmit={this.handleNewCategory}>
            <h5 className="media-heading tucked">
              new category: &nbsp;&nbsp;
              <input
                name="newCategory"
                type="text"
                placeholder="new category"
                className="form-like"
              />
            </h5>
            <button className="btn btn-secondary" type="submit">
              Add New Category
            </button>
          </form>
          <br />
          <button className="btn btn-danger" onClick={this.handleDelete}>
            Remove Product
          </button>
        </div>
      </div>
    );
  }
}

/**
 * CONTAINER
 */

const mapState = state => {
  return {
    singleProduct: state.SingleProduct
  };
};

const mapDispatch = dispatch => {
  return {
    loadProduct: productId => {
      dispatch(getSingleProduct(productId));
    },
    updateProduct: updatedProduct => {
      dispatch(updateSingleProduct(updatedProduct));
    },
    addCategory: category => {
      dispatch(postCategory(category));
    },
    updateCategory: (productId, selectedCategoryId) => {
      dispatch(updateSingleProductCategory(productId, selectedCategoryId));
    },
    deleteProduct: productId => {
      dispatch(removeSingleProduct(productId));
    }
  };
};

export default withRouter(connect(mapState, mapDispatch)(SingleProduct));
