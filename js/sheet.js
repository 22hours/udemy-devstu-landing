let submitBtn = document.getElementById("submit_btn");

let inputName = document.getElementById("name");
let inputPhone = document.getElementById("phone");
let inputEmail = document.getElementById("email");
let inputSelect = document.getElementById("type");
let inputReason = document.getElementById("reason");

function checkInput() {
    console.log("인풋");
    var isEmpty = false;

    if (inputName.value === "") {
        alert("모든 항목을 입력해주세요");
        isEmpty = true;
        return false;
    }
    if (inputPhone.value === "") {
        alert("모든 항목을 입력해주세요");
        isEmpty = true;
        return false;
    }
    if (inputEmail.value === "") {
        alert("모든 항목을 입력해주세요");
        isEmpty = true;
        return false;
    }
    if (inputSelect.value === "") {
        alert("모든 항목을 입력해주세요");
        isEmpty = true;
        return false;
    }
    if (inputReason.value === "") {
        alert("모든 항목을 입력해주세요");
        isEmpty = true;
        return false;
    }

    console.log(isEmpty);
    return isEmpty;
}

//CLICK EVENT
$("#submit_btn").click(function () {
    //빈값 체크
    if (checkInput()) {
        return;
    }

    $.ajax({
        type: "GET",
        url: "https://script.google.com/macros/s/AKfycbx5pWG-XRs9CR0FhR97GBJmTmUegYilSO-2YogtyAdYiDAF7_gFuQRAHsQPDwJtMiFg/exec",
        data: {
            이름: inputName.val(),
            이메일주소: inputEmail.val(),
            연락처: "'" + inputPhone.val(),
            지원동기: inputReason.val(),
        },
        success: function (response) {
            isLoading(false);
            setTimeout(function () {
                snackbar.removeClass("show");
            }, 2000);

            //값 비워주기
            inputName.val("");
            inputEmail.val("");
            inputPhone.val("");
            inputReason.val("");
            alert("전송완료");
        },
        error: function (request, status, error) {
            isLoading(false);
            console.log("code:" + request.status + "\n" + "error:" + error);
            console.log(request.responseText);
        },
    });
});
