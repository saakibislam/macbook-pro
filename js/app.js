const memoryCostField = document.getElementById("memoryCost");
const storageCostField = document.getElementById("storageCost");
const deliveryCostField = document.getElementById("deliveryCost");
const totalPriceField = document.getElementById("totalPrice");
const discountTotalField = document.getElementById("discount-total");

// Total Price Table Update
function updateTotal() {
    let totalPrice = 1299;
    const memoryPrice = parseFloat(memoryCostField.innerText);
    const storagePrice = parseFloat(storageCostField.innerText);
    const deliveryPrice = parseFloat(deliveryCostField.innerText);
    totalPrice = totalPrice + memoryPrice + storagePrice + deliveryPrice;
    totalPriceField.innerText = totalPrice;
    discountTotalField.innerText = totalPrice;
}

// Memory Selection 
function memoryCostCalculation(memory) {
    if (memory == '16gb') {
        memoryCostField.innerText = 180;
    } else {
        memoryCostField.innerText = 0;
    }
    updateTotal();
}

document.getElementById("8gb-memory").addEventListener("click", function () {
    memoryCostCalculation('8gb');
})
document.getElementById("16gb-memory").addEventListener("click", function () {
    memoryCostCalculation('16gb');
})

// Storage Selection
function storageCostCalculation(storage) {
    if (storage == '1tb') {
        storageCostField.innerText = 180;
    } else if (storage == '512gb') {
        storageCostField.innerText = 100;
    } else {
        storageCostField.innerText = 0;
    }
    updateTotal();
}

document.getElementById("256gb-storage").addEventListener("click", function () {
    storageCostCalculation('256gb');
})
document.getElementById("512gb-storage").addEventListener("click", function () {
    storageCostCalculation('512gb');
})
document.getElementById("1tb-storage").addEventListener("click", function () {
    storageCostCalculation('1tb');
})

// Delivery Selection 
function deliveryChargeCalculation(delivery) {
    if (delivery == 'express') {
        deliveryCostField.innerText = 20;
    } else {
        deliveryCostField.innerText = 0;
    }
    updateTotal();
}

document.getElementById("prime-delivery").addEventListener("click", function () {
    deliveryChargeCalculation('prime');
})
document.getElementById("express-delivery").addEventListener("click", function () {
    deliveryChargeCalculation('express');
})