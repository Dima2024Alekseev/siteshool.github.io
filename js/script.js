function openNewTab() {
    window.open("http://www.school2taseevo.ru/index/0-195", "_blank");
  }

function openNewTab_2() {
    window.open("http://www.school2taseevo.ru/index/0-240", "_blank");
  }

function openNewTab_3() {
    window.open("http://www.school2taseevo.ru/index/0-59", "_blank");
  }

function openNewTab_4() {
    window.open("http://www.school2taseevo.ru/index/0-76", "_blank");
  }



const drop = noselect
function noselect() {
    return false
}



setInterval(() => {
    if (document.ondragstart !== drop) {
        console.log("Копирование запрещено")
        document.ondragstart = noselect
        document.onselectstart = noselect
        document.oncontextmenu = noselect
    }
    else {
        console.log('Равны')
    }
},
    10000
)

