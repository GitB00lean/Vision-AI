document.getElementById("showPassword").addEventListener("click", function() {
   toggleTextType("password", "showPassword");
})

document.getElementById("showConfirmPassword").addEventListener("click", function() {
    toggleTextType("confPassword", "showConfirmPassword");
})


function toggleTextType(idOfTheElement, toogleSwitchId) 
{
    document.getElementById(toogleSwitchId).addEventListener("click", e => {
        if (document.getElementById(idOfTheElement).type == "password") 
        {
            document.getElementById(idOfTheElement).type = "text";
        }
        else
        {
            document.getElementById(idOfTheElement).type = "password";
        }
    })
}