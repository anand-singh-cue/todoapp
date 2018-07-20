function getUser(username){
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
}
