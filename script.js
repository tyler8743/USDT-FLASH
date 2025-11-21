// Website Loaded Notification
console.log("USDTFlash Website Loaded Successfully ✔️");

// Simple alert example
function flashNotify(message) {
    alert(message || "FlashUSDT action executed!");
}

// Auto highlight active section while scrolling
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 150;

    sections.forEach(sec => {
        if (sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
            sec.style.borderLeft = "3px solid #00ffb3";
        } else {
            sec.style.borderLeft = "none";
        }
    });
});
