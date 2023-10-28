
var checkName = false;
var checkNick = false;
var checkEmail = false;
var checkPw = false;
var checkCheck_pw = false;

// 이름 확인
var name = document.getElementById("name")

name.addEventListener("keyup", function(){
    if(name.value === ""){
        checkName = false;
        document.getElementById("validateName").style.color = "red"
        document.getElementById("validateName").innerHTML = checkName
        //"필수 입력 항목입니다!"
        
    }
    else {
        checkName = true;
        document.getElementById("validateName").style.color = "green"
        document.getElementById("validateName").innerHTML =
        "멋진 이름이네요!"
        
        
    }
    activeLoginBtn();
})

// 닉네임 확인
var nick = document.getElementById("nick")

nick.addEventListener("keyup", function(){
    if(nick.value === ""){
        document.getElementById("validateNick").innerHTML = ""
    }
    else if(nick.value.length > 5 || nick.value.length < 2){
        checkNick = false;
        document.getElementById("validateNick").style.color = "red"
        document.getElementById("validateNick").innerHTML =
        "닉네임은 2~5글자로 구성해주세요!"
        
    }
    else {
        checkNick = true;
        document.getElementById("validateNick").style.color = "green"
        document.getElementById("validateNick").innerHTML =
        "멋진 닉네임이군요!"
        
    }
    activeLoginBtn();
})
// 이메일 확인
var email = document.getElementById("email")
email.addEventListener("keyup", function(){
    var test_email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if(email.value === ""){
        document.getElementById("validateEmail").innerHTML =""
    }
    else if(test_email.test(email.value) == false){
        checkEmail = false;
        document.getElementById("validateEmail").style.color = "red"
        document.getElementById("validateEmail").innerHTML =
        "올바른 메일 형식이 아닙니다!"
        
    }
    else {
        checkEmail = true;
        document.getElementById("validateEmail").style.color = "green"
        document.getElementById("validateEmail").innerHTML =
        "올바른 메일 형식입니다!"
        
    }
    activeLoginBtn();
})

// 비밀번호 확인
var pw = document.getElementById("pw")
var check_pw = document.getElementById("check-pw")
pw.addEventListener("keyup", function(){
    var test_pw = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_])/;
    if(pw.value === ""){
        document.getElementById("validatePw").innerHTML = ""
    }
    else if(test_pw.test(pw.value) == false){
        checkPw = false;
        document.getElementById("validatePw").style.color = "red"
        document.getElementById("validatePw").innerHTML =
        "영어+숫자+특수문자를 조합하여 작성해주세요."

        CheckPwFuntion();
        
    }
    else {
        checkPw = true;
        document.getElementById("validatePw").style.color = "green"
        document.getElementById("validatePw").innerHTML =
        "안전한 비밀번호입니다."

        CheckPwFuntion();
        
    }
    activeLoginBtn();
})

check_pw.addEventListener("keyup", function CheckPwFuntion(){
    if(check_pw.value === ""){
        document.getElementById("validateCheck-pw").innerHTML = ""
    }
    else if(check_pw.value != pw.value){
        checkCheck_pw = false;
        document.getElementById("validateCheck-pw").style.color = "red"
        document.getElementById("validateCheck-pw").innerHTML =
        "비밀번호가 일치하지 않습니다."
        
    }
    else {
        checkCheck_pw = true;
        document.getElementById("validateCheck-pw").style.color = "green"
        document.getElementById("validateCheck-pw").innerHTML =
        "비밀번호가 일치합니다."
        
    }
    activeLoginBtn();
})

// 가입버튼 활성화
var loginBtn = document.getElementById("Login-btn")
function activeLoginBtn() {
    if(checkName && checkNick && checkEmail && checkPw && checkCheck_pw){
        loginBtn.style.backgroundColor = "black"
        loginBtn.disabled = false;
    }
    else {
        loginBtn.style.backgroundColor = "#8e8b84"
        loginBtn.disabled = true;
    }
}

// 모달창 열기
var modal = document.getElementById("modal-back")
loginBtn.onclick = function(){
    modal.style.display = "flex"
}

// 모달창 닫기
var close = document.getElementById("close")
close.onclick = function(){
    modal.style.display = "none"
}

