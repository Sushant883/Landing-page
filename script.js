// JavaScript to update the progress bar on scroll


window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop; // Current vertical position
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Total scrollable height
  let scrollPercentage = (scrollTop / scrollHeight) * 100; // Percentage scrolled
  document.getElementById("progress-bar").style.width = scrollPercentage + "%"; // Set progress bar width
};




function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Select all boxes
const boxes = document.querySelectorAll('.box');

// Scroll event to add or remove animations
window.addEventListener('scroll', () => {
  boxes.forEach((box) => {
    if (isInViewport(box)) {
      box.classList.add('in-view'); // Add class to slide in
      box.classList.remove('out-of-view');
    } else if (box.getBoundingClientRect().top > window.innerHeight) {
      box.classList.add('out-of-view'); // Add class to slide out
      box.classList.remove('in-view');
    }
  });
});
