// Memory Selection 
function memoryCostCalculation(memory) {
    const memoryCostField = document.getElementById("memoryCost");
    if (memory == '16gb') {
        memoryCostField.innerText = 180;
        return parseFloat(180);
    } else {
        memoryCostField.innerText = 0;
        return parseFloat(0);

    }
}

document.getElementById("8gb-memory").addEventListener("click", function () {
    const memoryCost = memoryCostCalculation('8gb');
})
document.getElementById("16gb-memory").addEventListener("click", function () {
    const memoryCost = memoryCostCalculation('16gb');
})

// Storage Selection
function storageCostCalculation(storage) {
    const storageCostField = document.getElementById("storageCost");
    if (storage == '1tb') {
        storageCostField.innerText = 180;
        return parseFloat(180);
    } else if (storage == '512gb') {
        storageCostField.innerText = 100;
        return parseFloat(100);
    }
    else {
        storageCostField.innerText = 0;
        return parseFloat(0);
    }
}

document.getElementById("256gb-storage").addEventListener("click", function () {
    const storageCost = storageCostCalculation('256gb');
})
document.getElementById("512gb-storage").addEventListener("click", function () {
    const storageCost = storageCostCalculation('512gb');
})
document.getElementById("1tb-storage").addEventListener("click", function () {
    const storageCost = storageCostCalculation('1tb');
})

// Delivery Selection 
function deliveryChargeCalculation(delivery) {
    const deliveryCostField = document.getElementById("deliveryCost");
    if (delivery == 'express') {
        deliveryCostField.innerText = 20;
        return parseFloat(20);
    } else {
        deliveryCostField.innerText = 0;
        return parseFloat(0);
    }
}

document.getElementById("prime-delivery").addEventListener("click", function () {
    const deliveryCharge = deliveryChargeCalculation('prime');
})
document.getElementById("express-delivery").addEventListener("click", function () {
    const deliveryCharge = deliveryChargeCalculation('express');
})