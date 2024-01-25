window.addEventListener('DOMContentLoaded', () => {
    const flameDiv = document.querySelector('.flame');
    const bringBackButton = document.getElementById('bringBackButton');
    const music = document.getElementById("music");

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
    });
});
