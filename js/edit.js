function getUser(username){
   
    let user = getUserFromLocalStorageData(username.split('=')[1]);
    document.getElementById("fname").value = user.firstName;
    document.getElementById("lname").value = user.lastName;
    document.getElementById("email").value = user.emailId;
    document.getElementById("password").value = user.password;
    document.getElementById("address").value = user.address;
    if(user.gender == "M"){
        document.getElementById("m").checked = true;
    }else{
        document.getElementById("f").checked = true;
    }
    $('#test').attr('src', user.image).width(100).height(100);
}

function saveUser(){
    let user = getLocalStorageData();

    let gender = undefined;
    if(document.getElementById("m").checked){
        gender = "M";
    }else{
        gender = "F";
    }
    if(image == "" || image == undefined){
        image = document.getElementById("test").src;
    }
    var userObj = {
        firstName : document.getElementById("fname").value,
        lastName : document.getElementById("lname").value,
        emailId : document.getElementById("email").value,
        password : document.getElementById("password").value,
        gender : gender,
        address : document.getElementById("address").value,
        image : image
    };
    let promise = new Promise((resolve, reject) => {
        if(user.find( (result, i) => {
            if(result.emailId === userObj.emailId){
                user[i] = userObj;
                return true;
            }
        })){resolve("Record Updated successfully");}
        else{
            reject("Record not updated");
        }
    }).then( msg => alert(msg))
    .catch(msg => alert(msg));

    localStorage.setItem("usersRecord", JSON.stringify(user));
}

var image = "";
function uploadFile(input) {         
    if (input.files && input.files[0]) {            
     var reader = new FileReader();              
     reader.onload = function (e) {   
     image = e.target.result;
     $('#test').attr('src', e.target.result).width(100).height(100);             
     };               
     reader.readAsDataURL(input.files[0]);            
     }     
     return image;
} 
