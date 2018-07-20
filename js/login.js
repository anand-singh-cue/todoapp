$(document).ready(() =>{

    $('#login').click(() => {
        let userLogin = {
            username : document.getElementById("username").value,
            password : document.getElementById("password").value
        };
        isUserAvailable(userLogin, getLocalStorageData())
                        .then(() => {
                            document.cookie = 'username=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                            document.cookie = "username="+userLogin.username;
                            location.replace("edit.html");
                        })
                        .catch((msg) => alert(msg));
    });

    function isUserAvailable(userLogin, userRecords){
        return new Promise((resolve, reject) => {
            userRecords.find( u => {
                console.log(u.emailId+" == "+ userLogin.username);
                if(u.emailId == userLogin.username && u.password == userLogin.password){
                    resolve();
                }
            });
            reject('Check username and password');
        });
    }
});