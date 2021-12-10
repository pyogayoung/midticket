function login(){
    let id = document.getElementById("id").value;
    let pw = document.getElementById("pw").value;
    if(id==="admin"){
        if(pw=="1234"){
            alert("로그인이 되었습니다.")
            document.getElementById("login").innerHTML="<h1>" + id + 
                "님이 <br> 로그인하셨습니다. </h1>"
            document.getElementById("you").innerHTML="<span>" + id + " 님을 위한 추천</span>"
        }   else{
            alert("비밀번호를 확인하세요.")
        }
    }else{
        alert("회원가입을 해주세요.")
        // window.location.href="./register.register.html"
    }
}

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

function entry(){
    var a = 0;  
    if(confirm("이벤트에 응모하시겠습니까?")){
        a+=1
        alert("이벤트에 응모되셨습니다!")
        document.getElementById("event-button2").innerHTML=`<h4 style="color: rgb(104, 38, 124, 85%);">〈응모완료〉</h4>`
    }
}

let data = [["./sub01_images/1.jpg","정밀아 정기단독공연 〈춥지 않은 겨울밤〉","2022-01-01 ~ 2022-01-01", "세종문화회관"],
            ["./sub01_images/2.jpg","초승（CHOSNG）소극장 단독공연 ‘아파하는 꽃들에게’","2021-12-01 ~ 2022-01-01 ", "경희대 평화의 전당"],
            ["./sub01_images/3.JPG","2021 김수영 단독공연［EPISODE］","2021-12-31 ~ 2022-01-01", "올림픽 체조경기장"],
            ["./sub01_images/4.JPG","임헌일 단독공연 SUNSET","2022-01-11 ~ 2022-01-01", "잠실 주경기장"]]

function tableprint(){
let text ='';
text = `<table><tr><th>공연명</th><th> </th><th>공연일시</th><th>공연장소</th></tr>`;
for(let i=0; i<data.length; i++){
    text += `<tr><td><a><img src=${data[i][0]} style="width: 130px;"></a></td><td id="show-name">${data[i][1]}</td><td>${data[i][2]}</td><td>${data[i][3]}</td></tr>`;
}
text+=`</table>`;
    document.getElementById("productList").innerHTML=text;
}

// sub02 //

let data2 = [["./sub02_images/1.jpg","강남심포니오케스트라 제89회 정기연주회","2022-01-01 ~ 2022-01-01", "예술의 전당 콘서틀홀"],
            ["./sub02_images/2.jpg","강보라 바이올린 독주회","2021-12-01 ~ 2022-01-01 ", "예술의전당 리사이틀홀"],
            ["./sub02_images/3.JPG","고전적 음악, 저녁 : HOME Again - 수원","2021-12-31 ~ 2022-01-01", "경기아트센터 소극장"],
            ["./sub02_images/4.JPG","댄스씨어터 창 〈굿 (Exorcism) _사도〉","2022-01-11 ~ 2022-01-01", "아르코예술극장 대극장"]]

function tableprint2(){
let text ='';
text = `<table><tr><th>공연명</th><th> </th><th>공연일시</th><th>공연장소</th></tr>`;
for(let i=0; i<data.length; i++){
    text += `<tr><td><a><img src=${data2[i][0]} style="width: 130px;"></a></td><td id="show-name">${data2[i][1]}</td><td>${data2[i][2]}</td><td>${data2[i][3]}</td></tr>`;
}
text+=`</table>`;
    document.getElementById("productList2").innerHTML=text;
}

function zoomIn(e) {
    e.target.style.transform = "scale(1.1)";
    e.target.style.zIndex = 1;
    e.target.style.transition = "all 0.4s";
  }

  function zoomOut(e) {
    e.target.style.transform = "scale(1)";
    e.target.style.zIndex = 0;
    e.target.style.transition = "all 0.4s";
  }

function fileUpload(){
    let a = new Array();
    let show = document.getElementById("show").value;
    let file = "./sub01_images/" + document.getElementById("file").files[0].name;
    let date = document.getElementById("date").value;
    let place = document.getElementById("place").value;
    a[0] = file;
    a[1] = show;
    a[2] = date;
    a[3] = place;
    data.push(a);
    console.log(data);
}

function popup(){
    //window.open("팝업소스파일", "팝업별명","스타일설정")
    window.open("event.html", "event_popup", "width=500, height=500, scrollbars=yes, left=100, top=100");
}  