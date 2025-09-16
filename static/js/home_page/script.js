let nav = document.creeateElement("nav");
    nav.id = "nav_bar";
    nav.style.cssText = `
        background-color: gray;
        display: flex;
        flex-direction: row;
        column-gap: 5px;
    `
    let item1 = document.createElement("div");
        item1.id = "item1";
        item1.textContent = "home"
        item1.classList.add = "nav_item";

    let item2 = document.createElement("div");
        item2.id = "item2";
        item2.textContent = "console"
        item2.classList.add = "nav_item";

    let item3 = document.createElement("div");
        item3.id = "item3";
        item3.textContent = "videos"
        item3.classList.add = "nav_item";

    let item4 = document.createElement("div");
        item4.id = "item4";
        item4.textContent = "friends"
        item4.classList.add = "nav_item";

    let item5 = document.createElement("div");
        item5.id = "item5";
        item5.textContent = "Notifications"
        item5.classList.add = "nav_item";

    let item6 = document.createElement("div");
        item6.id = "item6";
        item6.textContent = "Menu"
        item6.classList.add = "nav_item";

    nav.appendChild(item1)
    nav.appendChild(item2)
    nav.appendChild(item3)
    nav.appendChild(item4)
    nav.appendChild(item5)
    nav.appendChild(item6)

document.body.appendChild(nav)