window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    var btnScrollToTop = document.getElementById("btnScrollToTop");
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
      btnScrollToTop.style.display = "block";
    } else {
      btnScrollToTop.style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }