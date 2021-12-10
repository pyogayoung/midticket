function w3_open(){
    document.getElementById("concert").style.display="block";
    document.getElementById("classic").style.display="block";
    document.getElementById("musical").style.display="block";
    document.getElementById("display").style.display="block";
    document.getElementById("kids").style.display="block";
    document.getElementById("my").style.display="block";
    document.getElementById("sidebar-close-button").style.display="block";
}

function w3_close(){
    document.getElementById("concert").style.display = "none";
    document.getElementById("classic").style.display="none";
    document.getElementById("musical").style.display="none";
    document.getElementById("display").style.display="none";
    document.getElementById("kids").style.display="none";
    document.getElementById("my").style.display="none";
    document.getElementById("sidebar-close-button").style.display="none";
}

function heart_click(){
    document.querySelector("i").style.color = 'rgb(104, 38, 124, 80%)';
}

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat');

function seatf(e){
    if (e.target.classList.contains('seat')&& !e.target.classList.contains('occupied')
      ) {
        e.target.classList.toggle('selected');
        alert("좌석이 선택되었습니다.")
        const a = document.getElementsByClassName('selected').length;
        document.getElementById("cart").innerHTML = `좌석이 총 ${a-1}개 선택되었습니다.<br><button>결제</button>`;
      }
    if (e.target.classList.contains('occupied')
    ) {
        alert("이미 판매 된 좌석입니다.");
    }
}
container.addEventListener('click', seatf)

function getLocation() {
    if (navigator.geolocation) {  //위치정보 객체
    navigator.geolocation.watchPosition(showPosition);  //위치정보 반환
  }
}
function showPosition(position) {
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(37.515838, 127.072584),
        level: 3
    };
    var map = new kakao.maps.Map(container, options);
    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.515838, 127.072584); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
}
