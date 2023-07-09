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
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}