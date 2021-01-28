var phonePlus = document.getElementById('phone-plus');
phonePlus.addEventListener('click', function () {
    product('phone' , true);
});

var phoneMinus = document.getElementById('phone-minus');
phoneMinus.addEventListener('click', function(){
    product('phone' , false);
});

var casePlus = document.getElementById('case-plus');
casePlus.addEventListener('click', function(){
    product('case' , true);
});

var caseMinus = document.getElementById('case-minus');
caseMinus.addEventListener('click', function(){
    product('case' , false);
});




function product(productName ,isIncrease) {
    var inputValue = document.getElementById( productName + '-input').value;
    var inputValueNum = parseInt(inputValue);
    var CountValue = inputValueNum;
    if(isIncrease == true){
        CountValue = inputValueNum + 1;
    }
    if (isIncrease == false && inputValueNum > 0) {
        CountValue = inputValueNum - 1;
    }
    document.getElementById(productName + '-input').value = CountValue;
    var productPrice = 0;
    if (productName == 'phone') {
        productPrice = CountValue * 1219;
    }
    if (productName == 'case') {
        productPrice = CountValue * 59;
    }
    document.getElementById(productName + '-price').innerText = productPrice;
    calculateTotal();
}

function calculateTotal() {
    var phoneInputValueNum = productCount('phone');
    var caseInputValueNum = productCount('case');

    var totalPrice = phoneInputValueNum * 1219 + caseInputValueNum * 59;
    document.getElementById('total-price').innerText = totalPrice;

    var taxAmount =Math.round(totalPrice * .1);
    document.getElementById('tax-amount').innerText = taxAmount;

    var grandTotal = totalPrice + taxAmount;
    document.getElementById('grand-total').innerText = grandTotal;
}

function productCount(product) {
    var productInputValue = document.getElementById(product + '-input').value;
    var productInputValueNum = parseInt(productInputValue);
    return productInputValueNum;
}


