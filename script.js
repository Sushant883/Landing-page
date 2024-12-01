 // JavaScript to update the progress bar on scroll

 
 window.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop; // Current vertical position
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Total scrollable height
    let scrollPercentage = (scrollTop / scrollHeight) * 100; // Percentage scrolled
    document.getElementById("progress-bar").style.width = scrollPercentage + "%"; // Set progress bar width
  };


