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
} 

$(document).ready(() => {

    var userArray = [];
    $('#signup').click(() => {
       let checkFormPromise = new Promise((resolve, reject) => {
            resolve(checkForm());
       }).then(initUserAddProcess)
       .catch((msg) => {
            alert(msg);
       })
    });

    function checkForm(){
      return new Promise((resolve, reject)=>{
            if((document.getElementById("fname").value != "")&&
               (document.getElementById("lname").value != "")&&
               (document.getElementById("email").value != "")&&
               (document.getElementById("password").value != "")&&
               (document.getElementById("m").checked || document.getElementById("f").checked)&&
               (document.getElementById("address").value != "")&&
               (image != "")){
                resolve();
               }
            else{
                reject('All fields are required');
            }
      });
    }
        
    function initUserAddProcess() {
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript= document.createElement("script");
        oScript.type = "text/javascript";
        oScript.src = "js/localStorage.js";
        oHead.appendChild(oScript);

        let gender = undefined;
        if(document.getElementById("m").checked){
            gender = "M";
        }else{
            gender = "F";
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
        userArray = getLocalStorageData(); 

        let promiseToAddUser = new Promise((resolve, reject) => {
            let isUserAdded = addUser(userObj, userArray, validateUser);
            if(isUserAdded){
                resolve('User added successfully');
            }
            reject('User already exists');
        });
        promiseToAddUser.then((msg) => alert(msg));
        promiseToAddUser.catch((msg) => alert(msg));
    }
 
    //Add the new user if the user is not present
    function addUser(userObj, userArray, validateUser){
        if(!validateUser(userObj, userArray)){      
            userArray.push(userObj);
            localStorage.usersRecord = JSON.stringify(userArray);
            return true;
        }
        return false;
    }

    //To validate the user
    function validateUser(user){
        return userArray.find(u => u.emailId === user.emailId );
    }
});