// Write your JavaScript here

// start with defining money function; use document to access id
var money = function(id) {
    return document.getElementById(id);
    };

// define amount within money function; this is where the calulation is defined
    function Calculate() {
        var amount = money("amount-received").value - money("amount-due").value

        // cents is defined and outputs call on HTML
        var cents = (amount*100);
        if (isNaN (cents) || cents < 0 || cents > 99999 ) {
            alert ("must be a number between 0 and 999.99");
            cents = 0;
        }
        money("twenty-output").innerHTML = Math.floor(cents/2000);
        cents = cents % 2000;
        
        money("ten-output").innerHTML = Math.floor(cents/1000);
        cents = cents % 1000;
        
        money("five-output").innerHTML = Math.floor(cents/500);
        cents = cents % 500;
        
        money("dollars-output").innerHTML = Math.floor(cents/100);
        cents = cents % 100;
        
        money("quarters-output").innerHTML = Math.floor(cents/25);
        cents = cents % 25;
        
        money("dimes-output").innerHTML = Math.floor(cents/10);
        cents = cents % 10;
        
        money("nickels-output").innerHTML = Math.floor(cents/5);
        
        money("pennies-output").innerHTML = Math.ceil(cents % 5);
    }

// click button
    document.getElementById('calculate-change').addEventListener('click', Calculate);