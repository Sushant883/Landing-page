let WhoIsthere = prompt("Who's there ?");
    let username = WhoIsthere.toLowerCase();
// let Admin;

if (username == "Cancel") {
    alert("Canceled")
} else if (username === "Other") {
    alert("I don't know you");
} else if (username === "admin") {
    alert("Welcome Admin");

    let Password =  prompt("Enter Password...","");
    if(Password === "1234"){
        alert("Welcome Master !");
    }else if(Password === "cancel"){
        alert("Operation cancel");
    }else{
        alert("Wrong password");
    }
}else { 
    alert("User not found !");
}