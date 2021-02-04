var newScript = document.createElement("script");
newScript.setAttribute("src", "https://cdn.jsdelivr.net/npm/socket.io-client@3.0.1/dist/socket.io.min.js");
document.body.appendChild(newScript);

var personalID = 123456;

var socket = io("http://192.168.1.91:3000");



socket.on('askForID', function (data) {
    
    alert(data);
    socket.emit('getID', 123456);
    socket.on('askForURL', function (data) {
        
        var htmlVideoPlayer = document.getElementsByTagName('video')[0];
        var duration = parseInt(htmlVideoPlayer.currentTime);
        var url = document.URL+"&start="+duration;
        socket.emit('responceURL',url);
    });
    
    
    
});

var htmlVideoPlayerButton = document.getElementsByTagName('video')[0];
// htmlVideoPlayerButton.addEventListener("click", function(){
//     var htmlVideoPlayer = document.getElementsByTagName('video')[0];
//     var duration = parseInt(htmlVideoPlayer.currentTime);
//     alert(document.URL+"&start="+duration);

// });
// chrome.storage.local.get(['personal_ID_storage'],function(data){
    //     if (data.personal_ID_storage == null) {
        //         chrome.storage.local.set({'personal_ID_storage' : getRandomInt(9999999)})
        //     }
        // });
        // chrome.storage.local.get(['personal_ID_storage'],function(data){
            //     personalID = data.personal_ID_storage;
// });
