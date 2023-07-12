let jj_boxes = document.querySelectorAll('.jj_wrap'); //큰덩어리
let jj_prevBtns = document.querySelectorAll('.jj_prev-btn'); //이전버튼
let jj_nextBtns = document.querySelectorAll('.jj_next-btn'); //다음 버튼
let jj_moves = Array.from({ length: jj_boxes.length }, () => 0); //개수만큼의 요소를 가지는 배열을 생성하고, 모든 요소를 0으로 초기화
let jj_boxWidth = jj_boxes[0].querySelector('.jj_infoBox').offsetWidth; //이미지 영역에 가로넓이 가져옴
let jj_containerWidth = jj_boxes[0].offsetWidth; //큰덩어리 영역 가로넓이 가져옴
let jj_maxMove = jj_containerWidth - jj_boxWidth; //이미지 영역이 큰덩어리 영역보다 얼마나 더 넓은지를 계산

//숨겨진 버튼이 나올때
function showButtons(index) {
    jj_prevBtns[index].style.left = '5px';
    jj_nextBtns[index].style.right = '5px';
}
//나온 버튼이 다시 숨겨질때
function hideButtons(index) {
    jj_prevBtns[index].style.left = '-50px';
    jj_nextBtns[index].style.right = '-50px';
}

//다음으로 이동하기
function moveNext(index) {
    jj_moves[index] -= jj_containerWidth;
    checkButtonState(index);
    jj_boxes[index].querySelector('.jj_infoBox').style.transform = `translateX(${jj_moves[index]}px)`;
}
//이전으로 이동하기
function movePrev(index) {
    jj_moves[index] += jj_containerWidth;
    checkButtonState(index);
    jj_boxes[index].querySelector('.jj_infoBox').style.transform = `translateX(${jj_moves[index]}px)`;
}


for (let i = 0; i < jj_boxes.length; i++) {
    checkButtonState(i); // 초기 버튼 상태 설정

    // 클릭을하면 이동
    jj_prevBtns[i].addEventListener('click', () => movePrev(i));
    jj_nextBtns[i].addEventListener('click', () => moveNext(i));
    // 마우스를 올리면 버튼이 보여짐
    jj_boxes[i].addEventListener('mouseenter', () => showButtons(i));
    jj_boxes[i].addEventListener('mouseleave', () => hideButtons(i));
}

//0이면(시작) next버튼만 추가, 아니면 삭제
function checkButtonState(index) {
    if (jj_moves[index] == 0) {
        jj_prevBtns[index].classList.add('jj_nextPrev');
    } else {
        jj_prevBtns[index].classList.remove('jj_nextPrev');
    }

    if (jj_moves[index] <= jj_maxMove) {
        jj_nextBtns[index].classList.add('jj_nextPrev');
    } else {
        jj_nextBtns[index].classList.remove('jj_nextPrev');
    }
}