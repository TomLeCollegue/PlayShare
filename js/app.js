chrome.storage.local.get(['personal_ID_storage','id_friend'],function(data){
    if (data.personal_ID_storage == null) {
        chrome.storage.local.set({'personal_ID_storage' : getRandomInt(9999999)})
        document.location.reload();
    }

    if (data.id_friend != null) { 
        document.getElementById('id_friend_input').value = data.id_friend;
    }
});

chrome.storage.local.get(['personal_ID_storage'],function(data){
    document.getElementById('personal_id').innerHTML = "Votre ID : " + data.personal_ID_storage;
});

document.getElementById("button_join").addEventListener("click", saveIDFriend);

function saveIDFriend(){
    
    var id = document.getElementById('id_friend_input').value;
    chrome.storage.local.set({"id_friend" : id});
}



function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}