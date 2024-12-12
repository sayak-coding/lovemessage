// Heading scroll effect
$(window).scroll(function () {
  const scrollTop = $(this).scrollTop();
  const fadePoint = 800;

  $("h1").css({
      backgroundPosition: `center ${scrollTop / 2}px`,
  });

  $(".parallax").css({
      top: `${scrollTop / 1.6}px`,
      opacity: 1 - scrollTop / fadePoint,
  });
});

// Parallax scrolling
document.addEventListener("scroll", () => {
  const topOffset = window.pageYOffset;

  const elements = [
      { selector: ".one", speed: 0.1 },
      { selector: ".two", speed: 0.2 },
      { selector: ".three", speed: 0.3 },
      { selector: ".four", speed: 0.4 },
      { selector: ".five", speed: 0.5 },
  ];

  elements.forEach((el) => {
      const element = document.querySelector(el.selector);
      if (element) {
          element.style.bottom = `-${topOffset * el.speed}px`;
      }
  });
});

/*
// Mouse movement parallax effect
let currentX = '';
let currentY = '';
const movementConstant = 0.015;

$(document).mousemove(function (event) {
  if (currentX === '') currentX = event.pageX;
  const xDiff = event.pageX - currentX;
  currentX = event.pageX;

  if (currentY === '') currentY = event.pageY;
  const yDiff = event.pageY - currentY;
  currentY = event.pageY;

  $('.parallax div').each(function (index, element) {
      const movementX = (index + 1) * (xDiff * movementConstant);
      const movementY = (index + 1) * (yDiff * movementConstant);

      const newX = $(element).position().left + movementX;
      const newY = $(element).position().top + movementY;

      $(element).css('left', `${newX}px`);
      $(element).css('top', `${newY}px`);
  });
});*/
