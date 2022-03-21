//SUBMIT_BTN
let submitBtn = document.getElementById("submit_btn");

//INPUTS
let inputName = document.getElementById("name");
let inputPhone = document.getElementById("phone");
let inputEmail = document.getElementById("email");
let inputSelect = document.getElementById("type");
let inputReason = document.getElementById("reason");

//CHECKBOX
let checkPrivacy = document.getElementById("check_privacy");
let checkMarketing = document.getElementById("check_marketing");

//REGEX
const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const regSpecialInput = /[\{\}\[\]\/<>$;:\\\\(\'\"]/gi;

const checkPrivacyBox = () => {
    if (!checkPrivacy.checked) {
        alert("개인정보처리방침에 동의해주세요");
        return true;
    }
};

const checkEmptyInput = () => {
    let isEmpty = false;

    if (inputName.value.length < 2) {
        alert("이름을 알맞게 입력해주세요");
        return true;
    }
    if (!regPhone.test(inputPhone.value)) {
        alert("핸드폰 번호를 알맞게 입력해주세요");
        return true;
    }
    if (!regEmail.test(inputEmail.value)) {
        alert("이메일을 알맞게 입력해주세요");
        return true;
    }
    if (inputSelect.value === "") {
        alert("학습 희망분야를 선택해주세요");
        return true;
    }
    if (inputReason.value.length < 10) {
        alert("지원 동기를 10자 이상 입력해주세요");
        return true;
    }
    return isEmpty;
};

const checkSpecialInput = () => {
    let isEmpty = false;

    if (regSpecialInput.test(inputName.value)) {
        alert("해당 특수문자q는 입력 불가능합니다");
        return true;
    }
    if (regSpecialInput.test(inputReason.value)) {
        alert("해당 특수문자r는 입력 불가능합니다");
        return true;
    }
    return isEmpty;
};

const handleClick = () => {
    alert("멘토단 지원이 마감되었습니다");
};
