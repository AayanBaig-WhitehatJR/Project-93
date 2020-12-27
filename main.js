//Firebase Links


//------------------------------------
//Navbar Code
function goToSignUpLogin(){
window.location("login.html")
}
function goToHome(){
window.location("homepage.html")
}
function goToFAQ(){
window.location("faq.html")
}
function goToBugFixes(){
window.location("bugfixes.html")
}
//-----------------------------
//Login Function
function login(){
    var username = document.getElementById("inputUsername").value 
    localStorage.setItem("Username", username)
    window.location = "homepage.html"
}