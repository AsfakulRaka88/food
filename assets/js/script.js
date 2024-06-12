const imgitem = [
  {
    url: "assets/img/gyro-sandwich1-1650490757 1.png",
    productTitle: "gyro sandwich",
    ratingP: "4.9",
    priceP: "$15.00",
  },
  {
    url: "assets/img/gyro-sandwich1-1650490757 1.png",
    productTitle: "gyro sandwich",
    ratingP: "4.9",
    priceP: "$15.00",
  },
  {
    url: "assets/img/gyro-sandwich1-1650490757 1.png",
    productTitle: "gyro sandwich",
    ratingP: "4.9",
    priceP: "$15.00",
  },
  {
    url: "assets/img/gyro-sandwich1-1650490757 1.png",
    productTitle: "gyro sandwich",
    ratingP: "4.9",
    priceP: "$15.00",
  },
  {
    url: "assets/img/gyro-sandwich1-1650490757 1.png",
    productTitle: "gyro sandwich",
    ratingP: "4.9",
    priceP: "$15.00",
  },
  {
    url: "assets/img/gyro-sandwich1-1650490757 1.png",
    productTitle: "gyro sandwich",
    ratingP: "4.9",
    priceP: "$15.00",
  },
];

function createProductCard() {
  for (const item of imgitem) {
    // Create the product cart container
    const productCart = document.createElement("div");
    productCart.className = "product-cart";

    // Create the image container
    const productImg = document.createElement("div");
    productImg.className = "product-img";
    const img = document.createElement("img");
    img.src = item.url;
    img.alt = "";
    productImg.appendChild(img);

    // Create the product details container
    const productContainGroup = document.createElement("div");
    productContainGroup.className = "product-contain-group";

    // Create the product information container
    const productContain = document.createElement("div");
    productContain.className = "product-contain";

    // Create the product title
    const productTitle = document.createElement("div");
    productTitle.className = "product-title";
    const h4 = document.createElement("h4");
    h4.textContent = item.productTitle;
    productTitle.appendChild(h4);

    // Create the Add To Cart button
    const button = document.createElement("button");
    button.className = "btn btn-primary product-button p-2";
    button.textContent = "Add To Cart";

    // Append the title and button to the productContain
    productContain.appendChild(productTitle);
    productContain.appendChild(button);

    // Create the sub information container
    const productSubContain = document.createElement("div");
    productSubContain.className = "product-sub-contain";

    // Create the rating paragraph
    const ratingP = document.createElement("p");
    ratingP.className = "p-2";
    const ratingImg = document.createElement("img");
    ratingImg.style.marginRight = "3px";
    ratingImg.src = "assets/icon/vector-2.png";
    ratingImg.alt = "";
    ratingP.appendChild(ratingImg);
    ratingP.appendChild(document.createTextNode(item.ratingP));

    // Create the price paragraph
    const priceP = document.createElement("p");
    priceP.textContent = item.priceP;

    // Append the rating and price to the productSubContain
    productSubContain.appendChild(ratingP);
    productSubContain.appendChild(priceP);

    // Append the productContain and productSubContain to the productContainGroup
    productContainGroup.appendChild(productContain);
    productContainGroup.appendChild(productSubContain);

    // Append the productImg and productContainGroup to the productCart
    productCart.appendChild(productImg);
    productCart.appendChild(productContainGroup);

    // Get the product element by ID and append the productCart to it
    const product = document.getElementById("product");
    product.appendChild(productCart);
  }
}
function createSuccessMessage() {
  const emailInput = document.getElementById("emailInput");

  // Get the value of the input field
  const emailValue = emailInput.value;

  // Get the target element by ID
  const successContainer = document.getElementById("success");

  // Create the success message container
  const successMessage = document.createElement("div");
  successMessage.className = "success-message";

  // Create the message text
  const messageText = document.createElement("p");
  messageText.textContent =
    "You have successfully subscribed (" + emailValue + ")";

  // Append the message text to the success message container
  successMessage.appendChild(messageText);

  // Append the success message container to the target element
  successContainer.appendChild(successMessage);
}

// Call the function to create the success message
