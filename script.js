document.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    const target = document.querySelector(event.target.getAttribute('href'));
    if (target) { 
      event.preventDefault(); 
      const targetPosition = target.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1200; 
      let start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOut(progress, startPosition, distance, duration));
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }

      function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }

      window.requestAnimationFrame(step);
    }
  }
});


window.onscroll = function() {
    scrollFunction();
  };
  
function scrollFunction() {
  var btnScrollTop = document.getElementById("btnScrollTop");
  if (document.documentElement.scrollTop > 500 || document.body.scrollTop > 500) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
}

function scrollToTop() {
  const scrollDuration = 800; 
  const startingY = window.pageYOffset; 
  const targetY = 0; 
  const startTime = performance.now();

  function scrollAnimation(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / scrollDuration, 1);
    const easeInOutCubic = t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
    const newY = startingY - (startingY - targetY) * easeInOutCubic(progress);

    window.scrollTo(0, newY);

    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }
  requestAnimationFrame(scrollAnimation);
}


let header = document.querySelector('header');
let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.burger-menu');
let linksInsideMenu = menu.querySelectorAll('a');


menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
  header.classList.toggle('open');
})

document.addEventListener('click', function(event) {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.remove('active');
    header.classList.remove('open');
  }
});

linksInsideMenu.forEach(function(link) {
  link.addEventListener('click', function() {
    menu.classList.remove('active');
    header.classList.remove('open');
  });
});



