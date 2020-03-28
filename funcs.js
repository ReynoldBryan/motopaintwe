
function generator()
{
    var x = Math.floor(Math.random() *256) +1;
    var y = Math.floor(Math.random() *256) +1;
    var z = Math.floor(Math.random() *256) +1;
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    var motor = document.querySelector("#motor");
    motor.style.backgroundColor = bgColor;
}

function paint() { 
    if (document.getElementById("colorSelect").value == "Blue")  
    {
        document.getElementById("motor").style.background = "blue";
    }
    else if(document.getElementById("colorSelect").value == "Green")  
    {
        document.getElementById("motor").style.background = "Green";
    }
    else if (document.getElementById("colorSelect").value == "Yellow")  
    {
        document.getElementById("motor").style.background = "Yellow";
    }
    else if (document.getElementById("colorSelect").value == "Black")  
    {
        document.getElementById("motor").style.background = "Black";
    }
    else if (document.getElementById("colorSelect").value == "Yellow")  
    {
        document.getElementById("motor").style.background = "Yellow";
    }
    else if (document.getElementById("colorSelect").value == "Pink")  
    {
        document.getElementById("motor").style.background = "Pink";
    }
    else if (document.getElementById("colorSelect").value == "Grey")  
    {
        document.getElementById("motor").style.background = "Grey";
    }   
}
function reset()
{
    var motor = document.querySelector("#motor");
    motor.style.backgroundColor = "white"
}

