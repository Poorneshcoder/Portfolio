var typed = new Typed(".auto-type", {
    strings: ["Developer.","Professional Coder.","UI/UX Designer."],
    typeSpeed: 20,
    backSpeed: 20,
    loop: true
})

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// resume tabs

// const tabBtns=document.querySelectorAll(".resume-container .resume-btn-container button");
// const tabAllPanels=document.querySelectorAll(".resume-container .tabPanel");

// function showPanel(panelIndex,displayData) {
   
//     tabButtons[panelIndex].style.backgroundColor=displayData;
//     tabPanels.forEach(function(node){
//         node.style.display="none";
//     });
//     tabPanels[panelIndex].style.display="block";
//     tabPanels[panelIndex].style.backgroundColor=displayData;
// }
// showPanel(0);


// price tabs

const tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
const tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,displayData) {
   
    tabButtons[panelIndex].style.backgroundColor=displayData;
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=displayData;
}
showPanel(0);

