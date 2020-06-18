"use strict";

function calculateInterest() {
    var principal = parseFloat(document.getElementById("amount").value);
    var saving = document.getElementById("saving-plan").value;
    var duration = parseFloat(document.getElementById("duration").value);

    if (saving == 'piggybank' || saving == 'flex_naira' || saving == 'targets' )
        var rate = parseFloat(10/100)

    if (saving == 'safelock')
        var rate = parseFloat(13/100)

    if (saving == 'flex_dollar')
        var rate = parseFloat(6/100)


    var amount_interest = parseFloat(principal) * (1 + (rate * (duration/12)))

    var amount_interest = amount_interest.toFixed(2)

    var result = "NGN " + amount_interest


    document.getElementById("demo2").innerHTML = result;

}

