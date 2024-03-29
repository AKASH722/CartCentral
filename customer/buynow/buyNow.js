const selectMM = document.getElementById("expiryMonth");
for (let i = 1; i <= 12; i++) {
    let mm = i.toString().padStart(2, "0");
    selectMM.innerHTML += `<option value="${mm}">${mm}</option>`;
}

const selectYY = document.getElementById("expiryYear");
let yy = new Date().getFullYear();
console.log(typeof yy);
for (let i = 0; i < 20; i++, yy++) {
    selectYY.innerHTML += `
		<option value="${yy}">${yy.toString().substring(2, 4)}</option>
	`;
}

function filterInput(cvv) {
    cvv.value = cvv.value.replace(/\D/g, "").substring(0, 3);
}

const upiForm = document.getElementById("upiForm");
const creditForm = document.getElementById("creditForm");

upiForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("upiID");
    const upiData = {};
    upiData[input.name] = input.value;
    console.log(upiData);
});

creditForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = creditForm.querySelectorAll("input");
    const selects = creditForm.querySelectorAll("select");
    const upiData = {};
    inputs.forEach((input) => {
        upiData[input.name] = input.value;
    });
    selects.forEach((select) => {
        upiData[select.name] = select.value;
    });
    console.log(upiData);
});
