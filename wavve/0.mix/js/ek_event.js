  /* 이벤트 페이지 항목 */
  let ek_list = [
    {href : "https://www.wavve.com/customer/event_board_view?eventId=706&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230706_event_110204.webp", title : "<블랙워터:어비스> 론칭 프로모션", date : "2023-07-17" },
    {href : "https://www.wavve.com/customer/event_board_view?eventId=705&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230706_event_110139.webp", title : "<슬픔의 삼각형> 론칭 프로모션", date : "2023-07-14" },
    {href : "https://www.wavve.com/customer/event_board_view?eventId=704&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230630_event_130611.webp", title : "<부화> 론칭 프로모션", date : "2023-07-10"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=703&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230629_event_100531.webp", title : "<안나푸르나> 론칭 프로모션", date : "2023-07-07"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=701&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230621_event_172623.webp", title : "<슈퍼마리오 브라더스> 론칭 프로모션", date : "2023-06-26"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=702&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230619_event_135826.webp", title : "<스트리머> 론칭 프로모션", date : "2023-06-23"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=696&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230607_event_095714.webp", title : "<미디어캐슬>과 함께하는 일본영화 기획전", date : "2023-06-20"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=698&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230609_event_084839.webp", title : "디즈니 <미리 SUMMER FESTIVAL> 프로모션", date : "2023-06-12"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=699&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230608_event_131334.webp", title : "<유랑지구2> 론칭 프로모션", date : "2023-06-12"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=700&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230531_event_100238.webp", title : "<슈퍼마리오 브라더스> 예약 구매 이벤트", date : "2023-06-02"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=697&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230531_event_094112.webp", title : "<리바운드> 론칭 프로모션", date : "2023-06-02"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=694&pageNum=1", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230531_event_094237.webp", title : "<던전 앤 드래곤: 도적들의 명예> 론칭 프로모션(~5.30 기간연장)", date : "2023-06-02"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=695&pageNum=2", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230518_event_081925.webp", title : "<머미즈> 론칭 프로모션 및 할인전", date : "2023-05-22"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=690&pageNum=2", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230515_event_112031.webp", title : "KTA 신학기 기획전(~5.11 기간연장)", date : "2023-05-19"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=692&pageNum=2", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230503_event_141342.webp", title : "<샤잠! 신들의 분노> 론칭 프로모션", date : "2023-05-08"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=693&pageNum=2", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230502_event_081921.webp", title : "<앤트맨과 와스프:퀀텀매니아> 론칭 프로모션", date : "2023-05-08"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=691&pageNum=2", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230425_event_134314.webp", title : "<카운트> 론칭 프로모션", date : "2023-04-28"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=689&pageNum=2", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230411_event_092015.webp", title : "<아바타:물의 길> 론칭 프로모션", date : "2023-04-14"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=688&pageNum=2", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230407_event_095421.webp", title : "<마루이 비디오> 론칭 프로모션", date : "2023-04-01"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=685&pageNum=2", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230405_event_100430.webp", title : "<바빌론> 론칭 프로모션", date : "2023-04-10"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=687&pageNum=3", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230405_event_100457.webp", title : "<애프터 썬> 론칭 프로모션", date : "2023-04-07"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=686&pageNum=3", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230404_event_093855.webp", title : "<어쩌면 우린 헤어졌는지 모른다> 론칭 프로모션", date : "2023-04-07"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=684&pageNum=3", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230321_event_095511.webp", title : "<피터 본 칸트> 론칭 프로모션", date : "2023-03-24"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=683&pageNum=3", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230302_event_111545.webp", title : "<오세이사> 론칭 프로모션", date : "2023-03-03"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=682&pageNum=3", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230302_event_144305.webp", title : "<천룡팔부 : 교봉전> 론칭 프로모션", date : "2023-03-03"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=681&pageNum=3", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230217_event_111630.webp", title : "<블랙팬서:와칸다 포에버> 론칭 프로모션", date : "2023-02-17"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=679&pageNum=3", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230125_event_155221.webp", title : "<에브리씽 에브리웨어 올앳원스> 독점 기념 프로모션", date : "2023-02-03"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=676&pageNum=3", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230116_event_141906.webp", title : "<스트레인지 월드> 론칭 프로모션", date : "2023-01-18"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=677&pageNum=3", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230119_event_130335.webp", title : "<헌트> 굿즈 패키지 프로모션", date : "2023-01-17"},
    {href : "https://www.wavve.com/customer/event_board_view?eventId=675&pageNum=3", src : "https://image.wavve.com/v1/thumbnails/260_147_20_80/service30/event/2023/20230102_event_110630.webp", title : "2023년 디즈니와 함께! 프로모션", date : "2023-01-06"}
];


function ek_transImg(obj){
    let a  = document.querySelectorAll(".ek_event_content ul li a");
    let img  = document.querySelectorAll(".ek_event_content ul li a img");
    let h3 = document.querySelectorAll(".ek_event_content ul li a h3");
    let text = document.querySelectorAll(".ek_event_content ul li a span");
    let divClass = document.querySelectorAll(".ek_event_content_btn");
    let index=0;
    
    for(let k = 0 ; k<divClass.length-1 ; k++){
        if(divClass[k]==obj){
            index = k;
        }
    }
    let j;
    for(let i=0;i<a.length;i++){
        j = i + (index*10);
        a[i].href = ek_list[j].href;
        img[i].src = ek_list[j].src;
        h3[i].innerHTML = ek_list[j].title;
        text[i].innerHTML = ek_list[j].date;
    } 
    
}

window.addEventListener("load", ek_transImg);


/* 페이지 버튼 */
function  ek_addBtnClass(index){
    // 클래스명 추가
    let a  = document.querySelectorAll(".ek_event_content_btn"); // 클래스명을 가진 모든 것을 배열로 저장
    for(let i = 0 ; i<a.length; i++){
        index = i;
        if(index==a.length-1){
            a[index].innerHTML = ">";
        }else{
            a[index].innerHTML = index+1;
        }
    }    
        
}
window.addEventListener("load", ek_addBtnClass);

function ek_addBtnStyle(obj){
    let a  = document.querySelectorAll(".ek_event_content_btn");
    for(let i = 0 ; i<a.length; i++){
        index = i;
        a[index].classList.remove("ek_btn_click"); // 리스트 배열에 모든 btn_click 클래스 제거
    }  
    let  classList  = obj.classList; // 선택된 클래스 리스트 저장
    classList.add("ek_btn_click"); // 리스트 배열에 btn_click 클래스 추가   
}