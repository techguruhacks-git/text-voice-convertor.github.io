let speaks = new SpeechSynthesisUtterance();
let voices = [];
let voiceChoose = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speaks.voice = voices[0];

    voices.forEach((voice, i) => (voiceChoose.options[i] = new Option(voice.name, i)));

};
voiceChoose.addEventListener("change", () =>{
    speaks.voice = voices[voiceChoose.value];
});

document.querySelector("button").addEventListener("click", () => {
    speaks.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speaks);
});
