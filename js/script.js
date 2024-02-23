document.body.onload = function(){
  setTimeout(function(){
      var preloader = document.getElementById('page-preloader');
      if(!preloader.classList.contains('done'))
      {
          preloader.classList.add('done');
      }
  }, 2000);

}


document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
    
    // Показать кнопку при загрузке страницы
    backToTop.style.display = "block";
    
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });
    
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});



setInterval(() => {
    if (document.ondragstart !== drop) {
        //console.log("Копирование запрещено")
        document.ondragstart = noselect
        document.onselectstart = noselect
        document.oncontextmenu = noselect
    }
    else {
       // console.log('Равны')
    }
},
    10000
)

