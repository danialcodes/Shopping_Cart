function update() {
    document.getElementById('sub_total').innerText = parseFloat(document.getElementById('phone_total').innerText) + parseFloat(document.getElementById('case_total').innerText);
    updateVat();
    updateTotal();
}
function updateVat() {
    document.getElementById('tax').innerText = (parseFloat(document.getElementById('sub_total').innerText) * .10).toFixed(2);
}
function updateTotal() {
    document.getElementById('total').innerText = parseFloat(document.getElementById('sub_total').innerText) + parseFloat(document.getElementById('tax').innerText)
}

function add(inputId, totalId) {
    const input = document.getElementById(inputId);
    const inputVal = parseInt(input.value);
    const finalVal = inputVal + 1;
    if (checkPos(finalVal)) {
        input.value = finalVal;
        if (inputId == 'phone_quantity') {
            var unitPrice = 1219;
        }
        else if (inputId == 'case_quantity') {
            var unitPrice = 59;
        }
        document.getElementById(totalId).innerText = finalVal * unitPrice;
        update();
    }


}
function checkPos(val) {
    if (val >= 0) {
        return true;
    }
    else {
        return false;
    }
}
function sub(inputId, totalId) {
    const input = document.getElementById(inputId);
    const inputVal = parseInt(input.value);
    const finalVal = inputVal - 1;
    if (checkPos(finalVal)) {
        input.value = finalVal;
        if (inputId == 'phone_quantity') {
            var unitPrice = 1219;
        }
        else if (inputId == 'case_quantity') {
            var unitPrice = 59;
        }
        document.getElementById(totalId).innerText = finalVal * unitPrice;
        update();

    }

}

document.getElementById('phone_btn_plus').addEventListener('click', function () {
    add('phone_quantity', 'phone_total');
});



document.getElementById('phone_btn_minus').addEventListener('click', function () {
    sub('phone_quantity', 'phone_total');

});


document.getElementById('case_btn_minus').addEventListener('click', function () {
    sub('case_quantity', 'case_total');

});


document.getElementById('case_btn_plus').addEventListener('click', function () {
    add('case_quantity', 'case_total');

});

document.getElementById('phone_quantity').addEventListener('change', function () {
    const input = document.getElementById('phone_quantity');
    const inputVal = parseInt(input.value);
    document.getElementById('phone_total').innerText = inputVal * 1219;
    update();
});
document.getElementById('case_quantity').addEventListener('change', function () {
    const input = document.getElementById('case_quantity');
    const inputVal = parseInt(input.value);
    document.getElementById('case_total').innerText = inputVal * 59;
    update();
});
