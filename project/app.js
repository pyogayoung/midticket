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



let data = [["./images/1.jpg","정밀아 정기단독공연 〈춥지 않은 겨울밤〉","2022-01-01 ~ 2022-01-01", "세종문화회관"],
            ["./images/2.jpg","초승（CHOSNG）소극장 단독공연 ‘아파하는 꽃들에게’","2021-12-01 ~ 2022-01-01 ", "경희대 평화의 전당"],
            ["./images/3.jpg","2021 김수영 단독공연［EPISODE］","2021-12-31 ~ 2022-01-01", "올림픽 체조경기장"],
            ["./images/4.jpg","임헌일 단독공연 SUNSET","2022-01-11 ~ 2022-01-01", "잠실 주경기장"]]

function tableprint(){
let text ='';
text = `<table><tr><th>공연명</th><th> </th><th>공연일시</th><th>공연장소</th></tr>`;
for(let i=0; i<data.length; i++){
    text += `<tr><td><img src=${data[i][0]} style="width: 130px;"></td><td id="show-name">${data[i][1]}</td><td>${data[i][2]}</td><td>${data[i][3]}</td></tr>`;
}
text+=`</table>`;
    document.getElementById("productList").innerHTML=text;
}


function fileUpload(){
    let a = new Array();
    let show = document.getElementById("show").value;
    let file = "./images/" + document.getElementById("file").files[0].name;
    let date = document.getElementById("date").value;
    let place = document.getElementById("place").value;
    a[0] = file;
    a[1] = show;
    a[2] = date;
    a[3] = place;
    data.push(a);
    console.log(data);
}

