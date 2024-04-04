async function productPage(element) {
    const productId = parseInt(element.getAttribute("data-product-id"));
    let data = await fetch("/products/" + productId);
    data = await data.json();
    dataArea.innerHTML = data["template"];
    let script = document.createElement("script");
    script.src = data["jsUrl"]
    dataArea.appendChild(script);
}

async function cancel(button) {
    const order = button.getAttribute("data-order-id");
    await fetch("/cancel/" + order);
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