const angle = document.getElementById("angle");
angle.addEventListener('input', function() {
    document.querySelector("span").textContent = "angle: " + angle.value + " degree" + ((angle.value > 1) ? "s" : "");
});

const circ = document.getElementsByClassName("circle")[0];
const p1 = document.getElementById("c1");
const p2 = document.getElementById("c2");
const vec = document.getElementById("vector");
function Position() {
    const deg = angle.value;
    const r = circ.offsetWidth / 2;
    const h = circ.offsetWidth / 2;
    const k = circ.offsetHeight / 2;
    const rad = deg * Math.PI / 180;
    function P(theta, scale) {
        this.x = h - r * Math.sin(theta) * scale;
        this.y = k + r * Math.cos(theta) * scale;
    }
    p1.style.left = `${new P(rad, 1).x - 25}px`;
    p1.style.top = `${new P(rad, 1).y - 25}px`;
    p2.style.left = `${new P(rad + Math.PI, 1).x - 25}px`;
    p2.style.top = `${new P(rad + Math.PI, 1).y - 25}px`;
    vec.setAttribute("x1", new P(rad, 0.7).x);
    vec.setAttribute("y1", new P(rad, 0.7).y);
    vec.setAttribute("x2", new P(rad + Math.PI, 0.7).x);
    vec.setAttribute("y2", new P(rad + Math.PI, 0.7).y);
} Position();
angle.addEventListener('input', Position);

const color1 = document.getElementById("start");
const color2 = document.getElementById("end");
const hex1 = document.getElementById("hex1");
const hex2 = document.getElementById("hex2");
color1.addEventListener("input", function() {
    hex1.value = color1.value;
    hex1.style.color = color1.value;
    p1.style.backgroundColor = color1.value;
});
color2.addEventListener("input", function() {
    hex2.value = color2.value;
    hex2.style.color = color2.value;
    p2.style.backgroundColor = color2.value;
});

function generate() {
    document.querySelector("textarea").value = `background-image: linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`;
    document.querySelector("body").style.backgroundImage = `linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`;
}

function copy() {
    document.querySelector("textarea").select();
    document.execCommand("copy");
    alert("Copied Successfully!");
}