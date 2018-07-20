function getLocalStorageData(){
    let userArray = [];
    if(localStorage.usersRecord){
        userArray = JSON.parse(localStorage.usersRecord);
    }
    return userArray;
}

function showLocalStorageData(){
    let userArray = getLocalStorageData();
    for(let i = 0;i < userArray.length; i++){
        console.log(userArray[i].emailId+" "+ userArray[i].password);
    }
}

function getUserFromLocalStorageData(emailId){
    let userRecord = getLocalStorageData();
    return userRecord.find(u => u.emailId == emailId);
}