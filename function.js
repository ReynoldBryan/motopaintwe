function paint()
{
    var changed = document.querySelector("#motor");
    var colorSelect = document.getElementById("colorSelect").Value;

    if (colorSelect === "Red")
    {
        motor.style.backgroundColor = "Red";
    }
    else if (colorSelect === "Blue")
    {
        motor.style.backgroundColor = "Blue";
    }
    else if (colorSelect === "Green")
    {
        motor.style.backgroundColor = "Green";
    }
    else if (colorSelect === "Yellow")
    {
        motor.style.backgroundColor = "Yellow";
    }
    else if (colorSelect === "Black")
    {
        motor.style.backgroundColor = "Black";
    }
    else if (colorSelect === "Pink")
    {
        motor.style.backgroundColor = "Pink";
    }
    else if (colorSelect === "Grey")
    {
        motor.style.backgroundColor = "Grey";
    }
}
function reset()
{
    var changed = document.querySelector("#motor");
    motor.style.backgroundColor = "white"
}