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

