var inputs = $('input[type="text"]');
var googleSubmitBtn = $("#submit_btn");
// INPUTS
var inputName = $("#name");
var inputPhone = $("#phone");
var inputEmail = $("#email");

var inputReason = $("#reason");

function isLoading(status) {
    if (status) {
        $("html, body").addClass("wait");
        googleSubmitBtn.attr("disabled", true).html("전송중...");
    } else {
        $("html, body").removeClass("wait");
        googleSubmitBtn.attr("disabled", false).html("입력완료");
    }
}

function checkInput() {
    console.log("인풋");
    var isEmpty = false;
    $.each(inputs, function (index, element) {
        if (element.value === "") {
            alert("모든 항목을 입력해주세요");
            isEmpty = true;
            return false;
        }
    });
    console.log(isEmpty);
    return isEmpty;
}

//CLICK EVENT
$("#submit_btn").click(function () {
    //빈값 체크
    if (checkInput()) {
        return;
    }
    // 입력중..
    isLoading(true);

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
