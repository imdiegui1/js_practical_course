//const priceOriginal = 120;
//const discount = 18;
//
//const finalPercentage = 100-discount;
//const priceFinal = (priceOriginal*finalPercentage)/100;

function calculatePriceFinal(price, discount) {
    const finalPercentage = 100-discount;
    const priceFinal = (price*finalPercentage)/100;

    return priceFinal;
};


function buttonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = parseInt(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = parseInt(inputDiscount.value);
    
    const result = calculatePriceFinal(priceValue, discountValue);
    
    //alert(priceValue)
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "Price with discount is: $"+result;
};