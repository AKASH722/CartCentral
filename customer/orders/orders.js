async function productPage(element) {
    const productId = parseInt(element.getAttribute("data-product-id"));
    let data = await fetch("/products/" + productId);
    data = await data.json();
    dataArea.innerHTML = data["template"];
    let script = document.createElement("script");
    script.src = data["jsUrl"]
    dataArea.appendChild(script);
}

function cancel(button) {
    const productId = button.getAttribute("data-product-id");
    console.log("Cancel Order clicked for productList ID:", productId);
    const orderId = button.getAttribute("data-order-id");
    console.log("Cancel Order clicked for productList ID:", orderId);

}

async function buynow(button) {
    const productId = button.getAttribute("data-product-id");
    console.log("Buy Now clicked for productList ID:", productId);
    let data = await fetch("/buynow/" + productId);
    data = await data.json();
    dataArea.innerHTML = data["template"];
    let script = document.createElement("script");
    script.src = data["jsUrl"]
    dataArea.appendChild(script);
}