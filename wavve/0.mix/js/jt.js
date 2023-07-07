let jt_box = document.querySelector('.jt_박스');
let jt_prevBtn = document.querySelector('.jt_prev-btn');
let jt_nextBtn = document.querySelector('.jt_next-btn');
let jt_stop = document.querySelector('.jt_stop');
let jt_i = document.querySelector('.jt_i');
let jt_re = document.querySelectorAll('.jt_박스')
let currentTranslate = 0;

//처음 이미지 위치 지정
function jt_str(){
  currentTranslate -= 8500;
  jt_box.style.transform = `translateX(${currentTranslate}px)`;
}
jt_str()
//점 바뀌는 func
let jt_flag2= 2;
function jt_next(){
  if(jt_flag2==1){
    jt_i.src="../img/점1.png";
    jt_flag2++
  }else if(jt_flag2==2){
    jt_i.src="../img/점2.png";
    jt_flag2++
  }else if(jt_flag2==3){
    jt_i.src="../img/점3.png";
    jt_flag2=1
  };
};
function jt_prev(){
  if(jt_flag2==1){
    jt_i.src="../img/점2.png";
    jt_flag2=3
  }else if(jt_flag2==2){
    jt_i.src="../img/점3.png";
    jt_flag2--
  }else if(jt_flag2==3){
    jt_i.src="../img/점1.png";
    jt_flag2--
  };
}


//버튼 클릭시 앞 뒤
jt_nextBtn.addEventListener('click', () => {
  jt_next();
  currentTranslate -= 1260;
  jt_box.style.transform = `translateX(${currentTranslate}px)`;
});

jt_prevBtn.addEventListener('click', () => {
  jt_prev();
  currentTranslate += 1260;
  jt_box.style.transform = `translateX(${currentTranslate}px)`;
});

//타이머 

let loopInterval = setInterval(() => {
  jt_next();
  currentTranslate -= 1260;
  jt_box.style.transform = `translateX(${currentTranslate}px)`; // 다음 슬라이드를 보여주는 함수
}, 4000,);
//정지 재생 이미지
let jt_flag1= true;
    function jt_toggle(){
        let jt_stop = document.querySelector('.jt_stop');
  
        if(jt_flag1==true){
            jt_stop.src="../img/재생.png";
    clearInterval(loopInterval);
 
            jt_flag1=false
        }else if(jt_flag1==false){
            jt_stop.src="../img/정지.png";
    loopInterval = setInterval(() => {
    jt_next();
    currentTranslate -= 1260;
    jt_box.style.transform = `translateX(${currentTranslate}px)`; // 다음 슬라이드를 보여주는 함수
    }, 4000,);
            jt_flag1=true
        }
        
    }
