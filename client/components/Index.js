/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export { default as Main } from "./Main";
export { default as UserHome } from "./UserHome";
export { default as TopNavBar } from "./TopNavBar";
export { default as SearchBar } from "./SearchBar";
export { default as LoginPage } from "./LoginPage";
export { default as SingleProduct } from "./SingleProductPage";
export { default as Cart } from "./CartPage";
export { default as Checkout } from "./CheckoutPage";
export { default as About } from "./About";

export { Login, Signup } from "./auth-form";
