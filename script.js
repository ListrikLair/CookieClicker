// model
let cookies = 0;
let cookiesPerClick = 1;
let upgradeTier;
let cost;
// view
updateView();
function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
    <h1>Try to get 10 000 cookies</h1>
    <div id="cookie" onclick="addPoints()"><img src="pics/cookie.jpg" alt=""></div>
    <div id="cookiePoints">${cookies} Cookies</div>
    <div id="cookiePoints">${cookiesPerClick} Cookie per click</div>
    <button class="disabledButton" id="upgradeButton1" onclick="buyUpgrade(10, 1)">Buy Upgrade (10)</button> <br/>
    <button class="disabledButton" id="upgradeButton2" onclick="buyUpgrade(100, 10)">Buy Upgrade (100)</button> <br/>
    <button class="disabledButton" id="upgradeButton3" onclick="buyUpgrade(1000, 100)">Buy Upgrade (1000)</button> <br/>
    <button id="cheatButton" onclick="cheatUpgrade()">Don't click me</button>
    `;
    if (cookies >= 10) {
        document.getElementById("upgradeButton1").classList.remove("disabledButton");
    }
    if (cookies >= 100) {
        document.getElementById("upgradeButton2").classList.remove("disabledButton");
    }
    if (cookies >= 1000) {
        document.getElementById("upgradeButton3").classList.remove("disabledButton");
    }
    if (cookies > 10000) {
        alert("Over 10,000 cookies!\nYou Win!");
    }
}

// control
function addPoints() {
    cookies += cookiesPerClick;
    updateView()
}

function buyUpgrade(cost, upgradeTier) {
    if (cookies < cost) {
        return;
    } else {
        cookies = cookies - cost;
        cookiesPerClick = cookiesPerClick + upgradeTier;
        updateView();
    }
}
function cheatUpgrade() {
    cookiesPerClick = cookiesPerClick + 1000;
    document.getElementById("body").classList.add("demon");
    updateView();
}