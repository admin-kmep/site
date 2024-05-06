let isPaused = false;
const imageContainer = document.getElementById("image-container");

function toggleScroll() {
  if (isPaused) {
    imageContainer.style.animationPlayState = "running";
  } else {
    imageContainer.style.animationPlayState = "paused";
  }
  isPaused = !isPaused;
}

imageContainer.addEventListener("animationiteration", function () {
  if (isPaused) return;

  const computedStyle = window.getComputedStyle(imageContainer);
  const currentTransform = computedStyle.transform;

  if (currentTransform === "matrix(1, 0, 0, 1, 0, 0)") {
    imageContainer.style.animationDirection = "reverse";
  } else if (currentTransform === "matrix(-1, 0, 0, -1, 0, 0)") {
    imageContainer.style.animationDirection = "normal";
  }
});

// Add click event listener to each image-wrapper
const imageWrappers = document.querySelectorAll(".image-wrapper");

imageWrappers.forEach((wrapper) => {
  wrapper.addEventListener("click", () => {
    toggleScroll();
  });
});

$(document).ready(function() {
// Calculate total width of images
var totalWidth = 0;
$('#image-container .image-wrapper').each(function() {
  totalWidth += $(this).outerWidth(true);
});
// Set width of image container to total width of images
$('#image-container').css('width', totalWidth);
});