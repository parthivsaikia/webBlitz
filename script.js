const apple = document.getElementById("apple");
const man = document.getElementById("man");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const box = document.getElementById("input-container");

input.value = ""

let speed = 0;
let gravity = 0.3;
let falling = false;

function dropApple() {
    if (falling) return;
    falling = true;

    // Use getBoundingClientRect() to get correct starting position
    let appleY = apple.getBoundingClientRect().top - 200;

    function animate() {
        if (speed < 7) speed += gravity; // Accelerate
        appleY += speed;
        apple.style.top = appleY + "px"; // Apply new position

        const appleRect = apple.getBoundingClientRect();
        const manRect = man.getBoundingClientRect();

        if (appleRect.bottom >= manRect.top + 20) {
            apple.style.visibility = "hidden";
            man.src = "assets/fall.png";
            man.style.height = "200px";
            const nice = document.createElement("p");
            nice.className = "hi";
            nice.innerHTML = "Nice! You killed Newton!<br>Now you can eat the apple!";
            const refreshButton = document.createElement("button");
            refreshButton.textContent = "Restart";
            box.appendChild(nice);
            box.appendChild(refreshButton);
            refreshButton.addEventListener("click", () => {
                input.value = "";
                window.location.reload();
            });
            return;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

const newt = () => {
    if (input.value.trim().toLowerCase() === "newton") {
        dropApple();
    }
    else {
        const hi = document.createElement("p");
        hi.className = "hi";
        hi.textContent = "Hi " + input.value + "!";
        const hi2 = document.createElement("p");
        hi2.className = "hi";
        hi2.textContent = "hint-look at the image";
        box.appendChild(hi);
        box.appendChild(hi2);
        setTimeout(() => {
            box.removeChild(hi);
            box.removeChild(hi2);
        }, 2000);
    }
}

btn.addEventListener("click", newt());
input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        setBackground();
    }
});