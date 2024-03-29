async function productPage(element) {
    const productId = parseInt(element.getAttribute("data-product-id"));
    let data = await fetch("/products/" + productId);
    data = await data.json();
    dataArea.innerHTML = data["template"];
    let script = document.createElement("script");
    script.src = data["jsUrl"]
    dataArea.appendChild(script);
}


async function addToCart(button) {
    const productId = button.getAttribute("data-product-id");
    console.log("Add to Cart clicked for productList ID:", productId);
    console.log("/addCart/" + productId)
    let data = await fetch("/addCart/" + productId);
    data = await data.json();
    dataArea.innerHTML = data["template"];
    let script = document.createElement("script");
    script.src = data["jsUrl"]
    dataArea.appendChild(script);
}

async function buyNow(button) {
    var productId = button.getAttribute('data-product-id');
    console.log('Immediate purchase initiated for product: ' + productId);
    let data = await fetch("/buynow/" + productId);
    data = await data.json();
    dataArea.innerHTML = data["template"];
    let script = document.createElement("script");
    script.src = data["jsUrl"]
    dataArea.appendChild(script);
}

const showFiltersBtn = document.getElementById('showFiltersBtn');
const filtersAccordion = document.getElementById('filtersAccordion');
let isFiltersVisible = false;

function showHide() {
    if (!isFiltersVisible) {
        filtersAccordion.style.display = 'block';
        showFiltersBtn.textContent = 'Hide Filters';
    } else {
        filtersAccordion.style.display = 'none';
        showFiltersBtn.textContent = 'Show Filters';
    }
    isFiltersVisible = !isFiltersVisible;
}