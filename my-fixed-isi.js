let stickyISI = document.getElementsByClassName("sticky-isi-wrapper");
let expandBtn = document.getElementById("isi-btn");
let shownStickyISI = document.getElementsByClassName("show");

expandBtn.addEventListener("click", function () {
  // console.log("handing expanding");
  handleExpanding(stickyISI, 'show', 'toggle');
})

function handleExpanding(ele, className, fnName) {
  for (let i = 0; i < ele.length; i++){
    if (ele[i].classList.contains('show')) {
      expandBtn.innerText = '+';
      expandBtn.style.bottom = '20vh';
    } else {
      expandBtn.innerText = '-';
      expandBtn.style.bottom = '70vh';
    }
    ele[i].classList[fnName](className);
  }
}

  
(function($) {
  $(document).ready(function() {
    $(window).scroll(function() {
      var stickyISI = $('.sticky-isi-wrapper');
      var lastP = $('#last-para')

      // if ( lastP.is(':in-viewport(500)') ) {
      if ( $(window).scrollTop() >= lastP.offset().top + lastP.outerHeight() - window.innerHeight + 10 ) {
        stickyISI.addClass('show');
        expandBtn.innerText = '-';
      } else {
        stickyISI.scrollTop(0);
        stickyISI.removeClass('show');
        expandBtn.innerText = '+';
      }
    });
  });
}(jQuery));

