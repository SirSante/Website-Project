const navbarItems = document.querySelectorAll(".navbar ul li a");
let currentIndex = 0;

// Function to highlight a menu item
function highlightMenuItem(index) {
  navbarItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
      item.setAttribute("aria-current", "page");
    } else {
      item.classList.remove("active");
      item.removeAttribute("aria-current");
    }
  });
}

highlightMenuItem(currentIndex);

// Keyboard navigation
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
    case "ArrowDown":
      currentIndex = (currentIndex + 1) % navbarItems.length;
      break;
    case "ArrowLeft":
    case "ArrowUp":
      currentIndex = (currentIndex - 1 + navbarItems.length) % navbarItems.length;
      break;
    case "Enter":
      navbarItems[currentIndex].click();
      break;
  }
  highlightMenuItem(currentIndex);
});

// Hover effect management
navbarItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    currentIndex = index;
    highlightMenuItem(index);
  });
});