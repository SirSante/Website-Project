
const main = document.querySelector('.main');
const navbar = document.querySelectorAll('.navbar ul li a');
let currentIndex = 0;


function createBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // Randomize size and position
  const size = Math.random() * 20 + 10; 
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`; 

  
  main.appendChild(bubble);

  // Remove the bubble after the animation ends
  setTimeout(() => {
    bubble.remove();
  }, 5000); 
}

setInterval(createBubble, 300); 

// Function to highlight a menu item based on index
function highlightMenuItem(index) {
  navbar.forEach((item, i) => {
    if (i === index) {
      // Highlight the selected item
      item.style.color = 'lightslategray'; 
    } else {
      item.style.color = 'white'; 
    }
  });
}

// Set initial highlight
highlightMenuItem(currentIndex);

// Keyboard navigation logic
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    // Move to the next menu item
    currentIndex = (currentIndex + 1) % navbar.length;
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    // Move to the previous menu item
    currentIndex = (currentIndex - 1 + navbar.length) % navbar.length;
  } else if (event.key === 'Enter') {
    // Navigate to the selected link
    navbar[currentIndex].click();
  }

  
  highlightMenuItem(currentIndex);
});

// Mouse hover effect
navbar.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    item.style.color = 'lightslategray';
  });

  item.addEventListener('mouseleave', () => {
    // When the mouse leaves, restore the default color
    if (index !== currentIndex) {
      item.style.color = 'white';
    }
  });
});