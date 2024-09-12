
    const TARGET_VALUE = 2000;
    
   
    function increment() {
        var countElement = document.getElementById('count');
        var currentCount = parseInt(countElement.textContent, 10);

        
        if (currentCount < TARGET_VALUE) {
            countElement.textContent = currentCount + 1;
        } else {
                    clearInterval(intervalId);
        }
    }

   
    var intervalId = setInterval(increment, 0.5); 





    function toggleMute() {
        const video = document.getElementById('video');
        const muteIcon = document.getElementById('mute-icon');
        video.muted = !video.muted;
        muteIcon.src = video.muted ? 'images/unmute.png' : 'images/mute.png';
    }