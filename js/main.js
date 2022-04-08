
const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");
const content = document.querySelector('.content');
menuToggle.onclick = function () {
  navigation.classList.toggle("open");
  content.classList.toggle("open");
};

let list = document.querySelectorAll(".list");
let contentBx = document.querySelectorAll(".contentBx");
 function activeLink(){
 list.forEach((item) => item.classList.remove("active"));
  
  this.classList.add("active");
  
}
list.forEach((item) => item.addEventListener("click", activeLink));

// function showLink(){
  
//   contentBx.forEach((select) => select.classList.remove("show"));
//   contentBx.classList.add("show");
// }
// list.forEach((item) => item.addEventListener("click", showLink));
for (let i=0; i<list.length; i++){
  list[i].addEventListener('click',function(){
    for (let i=0; i<contentBx.length;i++){
      contentBx[i].className='contentBx';
    }
    document.getElementById(this.dataset.id).className = 'contentBx show'
  })
}


function likeButton(){
  let heart = document.querySelector(".heart");
  let likes = document.querySelector('.likes');
  if(heart.src.match("./css/img/heart.png")){
    heart.src = "./css/img/heart_red.png";
    likes.innerHTML = "4,298 likes";
  }
  else{
    heart.src = "./css/img/heart.png";
    likes.innerHTML = "4,297 likes";
  }
}



let list2 = document.querySelectorAll('.list2');
let itemBox = document.querySelectorAll('.itemBox');

for(let q = 0; q<list2.length; q++){
  list2[q].addEventListener('click', function(){
    for(let j = 0; j<list2.length; j++){
      list2[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');

    for( let k = 0;k<itemBox.length; k++){
      itemBox[k].classList.remove('active');
      itemBox[k].classList.add('hide');

      if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
        itemBox[k].classList.remove('hide');
        itemBox[k].classList.add('active');
      }
    }
  })
}


let btn =document.querySelector('.btn');
btn.onclick = function(){
    btn.classList.toggle('active')
}