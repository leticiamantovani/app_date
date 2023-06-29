var btn = document.querySelector(".no");
var position

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    btn.addEventListener("touchstart", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
      });
      
      btn.addEventListener("touchend", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
      });
  } else {
    btn.addEventListener("mouseover", function() {
        position ? (position = 0) : (position = 150);
        btn.style.transform = `translate(${position}px,0px)`;
        btn.style.transition = "all 0.3s ease";
        });
  }

function executaAcaoBatman() {
  window.location.href = "/alternativas/batman/batman.html";
}  

function executaAcaoTerror() {
    window.location.href = "/alternativas/terror/terror.html";
} 

function executaAcaoStudio() {
    window.location.href = "/alternativas/studio/studio.html";
}
  
function executaAcaoVelozes() {
    window.location.href = "/alternativas/velozes/velozes.html";
}
  
function executaAcaoRomantica() {
    window.location.href = "/alternativas/romantica/romantica.html";
}