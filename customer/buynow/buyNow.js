const selectMM = document.getElementById("expiryMonth");
for (let i = 1; i <= 12; i++) {
	let mm = i.toString().padStart(2, "0");
	selectMM.innerHTML += `<option value="${mm}">${mm}</option>`;
}

const selectYY = document.getElementById("expiryYear");
let yy = new Date().getFullYear();
for (let i = 0; i < 20; i++, yy++) {
	selectYY.innerHTML += `
		<option value="${yy}">${yy.toString().substring(2, 4)}</option>
	`;
}

function filterInput(cvv) {
	cvv.value = cvv.value.replace(/\D/g, "").substring(0, 3);
}

const cashForm = document.getElementById("cashForm");
const upiForm = document.getElementById("upiForm");
const creditForm = document.getElementById("creditForm");

async function sendOrderData(paymentMethod, productID, formData) {
	const amount = parseFloat(document.getElementById("totalAmount").innerHTML);
	const address = document.getElementById('address').innerHTML;
	// Construct the data object to send to the server
	const data = {
		paymentMethod: paymentMethod,
		productID: productID,
		formData: {
			...formData,
			price: amount,
			delivery_address: address
		}
	};
	console.log(data)

	try {
		await fetch('/payment/order', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

	} catch (error) {
		console.log(error);
	}
}

// Event listener for cash payment form
cashForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const product_id = cashForm.getAttribute("data-product-id");
	const formData = { paymentMethod: 'cash' };
	await sendOrderData('cash', product_id, formData);
});

// Event listener for UPI payment form
upiForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const product_id = upiForm.getAttribute("data-product-id");
	const input = document.getElementById("upiID");
	const formData = {
		paymentMethod: 'upi',
		upiID: input.value
	};
	await sendOrderData('upi', product_id, formData);
});

// Event listener for credit card payment form
creditForm.addEventListener("submit", async (e) => {
	e.preventDefault();
	const product_id = creditForm.getAttribute("data-product-id");
	const formData = { paymentMethod: 'credit_card' };
	const inputs = creditForm.querySelectorAll("input");
	const selects = creditForm.querySelectorAll("select");
	inputs.forEach((input) => {
		formData[input.name] = input.value;
	});
	selects.forEach((select) => {
		formData[select.name] = select.value;
	});
	await sendOrderData('credit_card', product_id, formData);
});
