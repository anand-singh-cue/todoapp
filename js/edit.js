function getUser(username){
    console.log("COOKE :"+username);
    cookiearray = username.split('=');
    for(let i = 0;i < cookiearray.length;i = i+2){
        console.log("MM "+cookiearray[i]);
    }

    console.log(username.split('=')[1]);
    let user = getUserFromLocalStorageData(username.split('=')[1]);
    document.getElementById("fname").value = user.firstName;
    document.getElementById("lname").value = user.lastName;
    document.getElementById("email").value = user.emailId;
    document.getElementById("password").value = user.password;
    document.getElementById("address").value = user.address;
    if(user.gender == "M"){
        document.getElementById("M").checked = true;
    }else{
        document.getElementById("F").checked = true;
    }
    $('#test').attr('src', user.image).width(100).height(100);             
}

function saveUser(){
    
}
