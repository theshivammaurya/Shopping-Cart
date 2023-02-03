const products = document.querySelectorAll(".product");
const cart = document.querySelector(".cart");
const payBtn = document.querySelector("#pay-btn");

products.forEach(product => {
  const addToCartBtn = product.querySelector(".add-to-cart-btn");
  addToCartBtn.addEventListener("click", function() {
   
    // Add the product to the cart
   
    const productInfo = `
        <div class="cart-item" id="${product.id}">
         <img ${product.querySelector("img").src} alt="image"/> 
        <h3>${product.querySelector("h3").textContent}</h3>
        <p>${product.querySelector("p").textContent}</p>       
      </div>
    `;
    cart.insertAdjacentHTML("beforeend", productInfo);

    // Disable the "Add to Cart" button for this product
    addToCartBtn.disabled = true;

    // Enable the "Pay" button
    payBtn.disabled = false;
  });
});


payBtn.addEventListener("click", function() {
  // Remove all items from the cart
  const cartItems = document.querySelectorAll(".cart-item");
  cartItems.forEach(item => {
    const productId = item.id;
    item.remove();

    // Remove the corresponding product from the index page
    const product = document.querySelector(`#${productId}`);
    product.remove();

    // Disable the "Pay" button if there are no items left in the cart
    if (!cart.querySelector(".cart-item")) {
      payBtn.disabled = true;
    }
  });
});


