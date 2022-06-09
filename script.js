function compute()
{
    var principal = document.getElementById("principal").value;
    
    //Validates that principal is greather than zero
    if (principal <= 0)
    {
        //Show the alert for an invalid principal
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    //Set values to be highlighted
    var strPrincipal = '<span class="highlighted">' + principal + '</span>';
    var strRate = '<span class="highlighted">' + rate + '%</span>';
    var strInterest = '<span class="highlighted">' + interest + '</span>';
    var strYear = '<span class="highlighted">' + year + '</span>';
    var message = "If you deposit "+strPrincipal+",\<br\>at an interest rate of "+strRate+"\<br\>You will receive an amount of "+strInterest+",\<br\>in the year "+strYear+"\<br\>";

    //Insert the message with the result
    document.getElementById("result").innerHTML=message;
    
}

function updateRate() 
{
    //Updates rate value every time the range changes
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        