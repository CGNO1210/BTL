//menu
var click = document.querySelector(".sidebar");
var click2 = document.querySelector(".sidebar2");

document.querySelector(".menu-icon1").onclick = () => {
  if (click.className.includes("hide")) {
    click.classList.remove("hide")
    click2.classList.add("hide")
  }
   else{
       click.classList.add('hide')
       click2.classList.remove('hide')
   }
};

//xem thêm ẩn bớt
var clickMore = document.querySelector(".more-mini");
var change = document.querySelector(".change-list");
change.onclick = () => {
  change.style.display = "none";
  clickMore.style.display = "block";
};

var noneAll = document.querySelector(".none-list");
noneAll.onclick = () => {
  clickMore.style.display = 'none';
  change.style.display = "flex";
};

//search
// var input = document.querySelector('.input > input')
var input = document.querySelector('input')
var inputBorder = document.querySelector('.input')

input.onfocus = () => {
  document.querySelector('.mini-search-icon').classList.remove('hide');
  document.querySelector('.clear').classList.remove('hide');
  inputBorder.style['border'] = '1px #00f solid'
  inputBorder.style['border-left'] = 'none'
  document.querySelector('.suggest').style.display = 'block'
  document.querySelector('.keybroad').style.right = '36px'

}
input.onblur = () => {
  inputBorder.style['border'] = '1px #ccc solid'
  document.querySelector('.mini-search-icon').classList.add('hide');
  document.querySelector('.clear').classList.add('hide');
  document.querySelector('.suggest').style.display = 'none'
  document.querySelector('.keybroad').style.right = '16px'

}

var suggests = document.querySelectorAll('.suggest li')
suggestsLength = suggests.length
for(var i=0;i< suggestsLength;i++){
  suggests[i].onmousedown = function() {
    console.log(this.querySelector('span').innerText)
    input.value = this.querySelector('span').innerText
  }
}

document.querySelector('.clear').onclick = () =>{
  input.value = ''
}

document.querySelector('.keybroad').onmousedown =
function(e){
  e.preventDefault()
}

document.querySelector('.clear').onmousedown =
function(e){
  e.preventDefault()
}

document.querySelector('.create').onclick = 
() =>{
  if (document.querySelector('.create-list').className.includes("hide")) {
    document.querySelector('.create-list').classList.remove("hide")
  }
  else{
     document.querySelector('.create-list').classList.add("hide")
   }
}
document.querySelector('.notification >ion-icon').onclick = 
() =>{
  if (document.querySelector('.noti-table').className.includes("hide")) {
    document.querySelector('.noti-table').classList.remove("hide")
  }
  else{
     document.querySelector('.noti-table').classList.add("hide")
   }
}


document.querySelector('.account img').onclick = 
() =>{
  if (document.querySelector('.acc-info').className.includes("hide")) {
    document.querySelector('.acc-info').classList.remove("hide")
  }
  else{
     document.querySelector('.acc-info').classList.add("hide")
   }
}