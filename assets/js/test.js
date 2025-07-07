let currentSlide = 0;
const track = document.getElementById('carousel-track');
const indicators = document.getElementById('carousel-indicators');
const slides = track.children;

// Create indicators
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i));
  indicators.appendChild(dot);
}
updateIndicators();

// Show specific slide
function showSlide(index) {
  currentSlide = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  updateIndicators();
}

// Move to next/prev slide
function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  showSlide(currentSlide);
}

// Update active dot
function updateIndicators() {
  Array.from(indicators.children).forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

// Auto slide every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);