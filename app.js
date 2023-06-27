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

// const hoverList = document.querySelector('li');

// hoverList.forEach(btn => {
//     btn.addEventListener('click', ()=>{
//         document.querySelector('.hover-effect')?.classList.remove('hover-effect');
//         btn.classList.add('.hover-effect');
//     })
// })

// function setActive(element) {
//     var buttons = document.getElementsByTagName('a');
//     for (var i = 0; i < buttons.length; i++) {
//       buttons[i].classList.remove('hover-effect');
//     }
//     element.classList.add('hover-effect');
//   }


var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,displayContent) {
    // tabButtons.forEach(function(node){
    //     node.style.backgroundColor="";
    //     node.style.color="";
    // });
    tabButtons[panelIndex].style.backgroundColor=displayContent;
    // tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=displayContent;
}
showPanel(0);