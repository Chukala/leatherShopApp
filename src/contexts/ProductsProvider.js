import React, { createContext, useState, useEffect } from "react";
import { productsData, detailProduct } from "../data/productsData";

const ProductsContext = createContext();
export default ProductsContext;

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [details, setDetailsProduct] = useState(detailProduct);
  const [filteredProducts, updateFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [count, setCount] = useState(0);

  /** handleProducts run/called once and only once when the app starts
   * and update the products array with initial products data
   */
  useEffect(() => {
    handleProducts();
    filterItem();
  }, []); 
  //Only re-run the effect if products changes

  /** prductsData is JSON file and
   * imported from local file
   * planning to substitue by fetching from the Database/API in future*/
  const handleProducts = () => {
    let tempProducts = [];
    productsData.forEach((product) => {
      const singleProduct = { ...product };
      tempProducts = [...tempProducts, singleProduct];
    });
    setProducts(tempProducts);
    setCount(tempProducts.length);
  };
  /**Find and return product object by its Id from products array */
  const getProduct = (prdId) => {
    const product = products.find((prd) => prd.prdId === prdId);
    return product;
  };
  /** Find the product and update its product details obj by product value */
  const handleDetails = (prdId) => {
    const product = getProduct(prdId);
    setDetailsProduct(product);
  };
  /** Clone the products array in to tempProducts array,
   * Find the index of product in the tempProducts array by its Id and
   * store the product obj in to the product array and update its value,
   * inCart, count, price , total value */

  const addToCart = (prdId) => {
    let tempProducts = [...products];
    const i = tempProducts.indexOf(getProduct(prdId));
    const product = tempProducts[i];
    product.prdInCart = true;
    product.prdCount = 1;
    const price = product.prdPrice;
    product.prdTotal = price;

    let tempCart = [...cart, product];

    setProducts(tempProducts);
    setCart(tempCart);
    addTotals();
  };

  /**  Update Quantity  */
  const increment = (prdId) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.prdId === prdId);
    const i = tempCart.indexOf(selectedProduct);
    const product = tempCart[i];
    product.prdCount = product.prdCount + 1;
    product.prdTotal = product.prdCount * product.prdPrice;

    setCart([...tempCart]);
    addTotals();
  };

  const decrement = (prdId) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.prdId === prdId);
    const i = tempCart.indexOf(selectedProduct);
    const product = tempCart[i];
    product.prdCount = product.prdCount - 1;
    if (product.prdCount === 0) {
      removeItem(prdId);
    } else {
      product.prdTotal = product.prdCount * product.prdPrice;
      setCart([...tempCart]);
      addTotals();
    }
  };

  const removeItem = (prdId) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.prdId !== prdId);

    const i = tempProducts.indexOf(getProduct(prdId));
    let removedProduct = tempProducts[i];
    removedProduct.prdInCart = false;
    removedProduct.prdCount = 0;
    removedProduct.prdTotal = 0;

    setCart([...tempCart]);
    addTotals();
    setProducts([...tempProducts]), setCount([]);
  };

  const clearCart = () => {
    setCart([]);
    addTotals();
  };

  /*const getPopularProducts = (prdType) => {
    const popularProduct = products.find((prd) => prd.prdType === prdType);
    return popularProduct;
  };*/
  const filterItem = () => {
    let tempFiltered = [];
    tempFiltered = products.filter((item) => item.prdType == "popular");
    console.log(tempFiltered);
    updateFilteredProducts([...tempFiltered]);
  };

  const addTotals = () => {
    let subTotal = 0;
    console.log("cart length Inside: " + cart.length);
    //{cart.reduce((a,c) => a + c.prdTotal * c.prdCount, 0)}
    cart.map((item) => (subTotal += item.prdTotal));
    const tempTax = subTotal * 0.12;
    console.log("TempTax: " + tempTax);
    const tax = parseFloat(tempTax.toFixed(2));
    console.log("Tax: " + tax);
    const total = subTotal + tax;
    console.log("Total: " + total);

    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        details,
        count,
        cart,
        cartSubTotal,
        cartTax,
        cartTotal,
        filteredProducts,
        filterItem,
        handleDetails,
        addToCart,
        increment,
        decrement,
        removeItem,
        clearCart,
        addTotals
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
