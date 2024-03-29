let dataArea = document.getElementById("dataArea");

function setActive(button) {
    let buttons = document.getElementsByClassName("buttons");
    for (let button of buttons) {
        button.classList.remove("active");
    }
    button.classList.add("active");
}

function animate(data) {
    dataArea.classList.add("loader");
    setTimeout(async () => {
        dataArea.innerHTML = await data["template"];
        let script = document.createElement("script");
        script.src = data["jsUrl"];
        dataArea.appendChild(script);
    }, 1000);

    setTimeout(() => {
        dataArea.classList.remove("loader");
    }, 2000);
}

async function getOffersData(currentButton) {
    setActive(currentButton);
    let data = await fetch("/admin/offers");
    animate(await data.json());
}

async function getSalesData(currentButton) {
    setActive(currentButton);
    let data = await fetch("/admin/sales");
    animate(await data.json());
}

async function getProfileData(currentButton) {
    setActive(currentButton);
    let data = await fetch("/admin/profile");
    animate(await data.json());
}

async function getCatagoryData(currentButton) {
    setActive(currentButton);
    let data = await fetch("/admin/category");
    animate(await data.json());
}

function getHomeData(currentButton) {
    setActive(currentButton);
    dataArea.classList.add("loader");
    setTimeout(() => {
        dataArea.innerHTML = document.getElementById("homeData").innerHTML;
    }, 1000);

    setTimeout(() => {
        dataArea.classList.remove("loader");
    }, 2000);
}

getProfileData(document.getElementById("cat"));
