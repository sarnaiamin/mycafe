let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let phonenumberField = document.getElementById("phonenumberField");
let emailField = document.getElementById("emailField");
let yearField = document.getElementById("yearField");
let title = document.getElementById("title");
let snsContainer = document.getElementById("snsContainer");
let buttonContainer = document.getElementById("buttonCintainer");
var btnField = document.querySelector(".btn-field");

function handleVisible(height) {
    nameField.style.maxHeight = height;
    emailField.style.maxHeight = height;
    yearField.style.maxHeight = height;
    phonenumberField.style.maxHeight = height;
    toggleSnsContainer();
}

function toggleSnsContainer() {
    if (signinBtn.classList.contains("disable")) {
        snsContainer.style.display = "none";
    } else {
        snsContainer.style.display = "block";
    }
}

signinBtn.onclick = function () {
    handleVisible("0");
    title.innerHTML = "로그인";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    //Alert message haruuldag function
    if (signupBtn.classList.contains("disable")) {
        alert("로그인되었습니다.");
    }
    btnField.style.top = "40%";
    toggleSnsContainer();
};

signupBtn.onclick = function () {
    handleVisible("60px");
    title.innerHTML = "회원가입";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    //Alert message haruuldag function
    alert("회원가입 완료되었습니다");
    btnField.style.top = "85%";
    toggleSnsContainer();
};
