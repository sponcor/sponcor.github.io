console.log("Making sure this is linked correctly.");

const x = 2;
const y = 2;

if ( x === y) {
    console.log("SUCCESS");
}
else {
    console.log("FAIL");
}

const btn = document.querySelector
("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener
("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
})

btn.addEventListener("click", draw);

function random(number) {
    return Math.floor(Math.random() * number);
};


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 1000; i++) {
        ctx.beginPath();
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let alpha = Math.random(); 
        let color = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
        console.log(color);
        ctx.fillStyle = color; 
        ctx.rect(
            random(canvas.width),
            random(canvas.height),
            random(500),
            10
        );
        ctx.fill();
    }
}

btn.addEventListener("click", draw);

//change something about draw function