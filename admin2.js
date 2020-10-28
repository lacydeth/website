function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="lacydeth" && password="123")
        {
            location.href = "italok.html";
        }
    else 
    {
        alert(Sikertelen bejelentkezés!);
    }
}