// Pop up windows

const openWindowButtons = document.querySelectorAll('[data-window-target]');
const closeWindowButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById("overlay");

openWindowButtons.forEach(button => {
        button.addEventListener("click", () => {
            const window = document.querySelector(button.dataset.windowTarget);
            openWindow(window);
        });
    }
)
closeWindowButtons.forEach(button => {
        button.addEventListener("click", () => {
            const window = button.closest(".window");
            closeWindow(window);
        });
    }
)

function openWindow(window) {
    if (window == null) return
    window.classList.add("active");
    overlay.classList.add("active");
}

function closeWindow(window) {
    if (window == null) return
    window.classList.remove("active");
    overlay.classList.remove("active");
}


// Hamburger menu

const hamburgerMenu = document.getElementById("menu-hamburger");
const openHamburgerMenu = document.getElementById("open-menu-hamburger");
openHamburgerMenu.onclick = () => {
    hamburgerMenu.style.display = "flex";
    openHamburgerMenu.style.display = "none";
}
document.getElementById("close-menu-hamburger").onclick = () => {
    hamburgerMenu.style.display = "none";
    openHamburgerMenu.style.display = "block";
}
