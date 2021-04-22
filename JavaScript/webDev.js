(function () {
    // strict mode document: https://www.w3schools.com/js/js_strict.asp
    "use strict";  // Run this script in strict mode.
    // Strict mode makes it easier to write "secure" JavaScript.
    // Strict mode changes previously accepted "bad syntax" into real errors.

    var state = document.getElementById('s-state');

    document.addEventListener('DOMContentLoaded', function () {

        document.getElementById('cart-hplus').addEventListener('submit', calTotal);

        var btn = document.getElementById('btn-estimate');
        btn.disabled = true;
        state.addEventListener('change', function () {
            // if(state.value==='')
            // {
            //     btn.disabled=true;
            // }
            // else{
            //     btn.disabled=false;
            // }

            // Short hand for upper if.
            btn.disabled = (state.value === '');
        });
    });

    function calTotal(event) {
        event.preventDefault();

        var state = document.getElementById('s-state');
        if (state.value === '') {
            alert('please choose your shipping state.');
            state.focus();
        }

        var itemBball = parseInt(document.getElementById('txt-q-bball').value, 10) || 0,
            itemJersey = parseInt(document.getElementById('txt-q-jersey').value, 10) || 0,
            itemPower = parseInt(document.getElementById('txt-q-power').value, 10) || 0,
            shippingState = state.value,
            shippingMethod = document.querySelector('[name=r_method]:checked').value || "";

        var totalQTY = itemBball + itemJersey + itemPower,
            shippingCostPer,
            shippingCost,
            taxFactor = 1,
            estimate,
            totalItemPrice = (90 * itemBball) + (25 * itemJersey) + (30 * itemPower);

        if (shippingState === 'CA') {
            taxFactor = 1.075;
        }

        switch (shippingMethod) {
            case 'usps':
                shippingCostPer = 2;
                break;
            case 'ups':
                shippingCostPer = 3;
                break;
            default:
                shippingCostPer = 0;
                break;

        }

        shippingCost = shippingCostPer * totalQTY;
        estimate = '$' + ((totalItemPrice * taxFactor) + shippingCost).toFixed(2);

        document.getElementById('txt-estimate').value = estimate;

        var results = document.getElementById('results');
        results.innerHTML = 'Totlal items : ' + totalQTY + '<br>';
        results.innerHTML += 'Total Shipping: $' + shippingCost.toFixed(2) + '<br>';
        results.innerHTML += 'Tax: ' + ((taxFactor - 1) * 100).toFixed(2) + '% (' + shippingState + ')';

    }

})();
