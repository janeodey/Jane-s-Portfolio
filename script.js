// getting item from local storage
let theme = localStorage.getItem("theme")
if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName("theme-dot")

for(let i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener("click", function(){
        let mode = this.dataset.mode
        // console.log("clicked", mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById("theme-style").href = 'default.css'
    }
    if(mode == 'blue'){
        document.getElementById("theme-style").href='blue.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    // setting item from localStorage
    localStorage.setItem("theme", mode)
}


// slide show
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}