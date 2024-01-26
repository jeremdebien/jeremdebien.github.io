window.addEventListener('DOMContentLoaded', () => {
    const flameDiv = document.querySelector('.flame');
    const bringBackButton = document.getElementById('bringBackButton');
    const music = document.getElementById("music");
    const one = document.getElementById("1");
    const two = document.getElementById("2");
    const three = document.getElementById("3");

    // Request access to the microphone
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            const audioContext = new AudioContext();
            const analyser = audioContext.createAnalyser();
            const microphone = audioContext.createMediaStreamSource(stream);
            const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);

            analyser.smoothingTimeConstant = 0.8;
            analyser.fftSize = 1024;

            microphone.connect(analyser);
            analyser.connect(scriptProcessor);
            scriptProcessor.connect(audioContext.destination);

            scriptProcessor.onaudioprocess = () => {
                const dataArray = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(dataArray);
                const average = getAverageVolume(dataArray);

                if (average > 60) {
                    flameDiv.classList.add('out');
                    if (music.paused) {
                        music.play();
                        playButton.textContent = "Pause Music";
                    }
                    one.classList.add('hidden');
                    setTimeout(function(){
                        two.classList.remove('hidden');
                    }, 1500);
                    setTimeout(function(){
                        two.classList.add('hidden');
                    }, 4000);
                    setTimeout(function(){
                        three.classList.remove('hidden');
                    }, 5000);
                    setTimeout(function(){
                        bringBackButton.classList.remove('hidden');
                    }, 7000);
                    
                    
                }
            };
        })
        .catch(err => {
            console.error('Error accessing microphone:', err);
        });

    function getAverageVolume(array) {
        let values = 0;
        const length = array.length;
        for (let i = 0; i < length; i++) {
            values += array[i];
        }
        return values / length;
    }

    bringBackButton.addEventListener('click', () => {
        flameDiv.classList.remove('out');
        music.pause();
        music.currentTime = 0;
        bringBackButton.classList.add('hidden');
        three.classList.add('hidden');
        setTimeout(function(){
            one.classList.remove('hidden');
        }, 1000);
        
    });
});
