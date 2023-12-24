const textInput = document.querySelector("#textInput");
const analyzerBtn = document.querySelector("#analyzerBtn");
const wordCount = document.querySelector("#wordCount");
const charCount = document.querySelector("#charCount");
const avgWordCount = document.querySelector("#avgWordCount");

console.log(textInput, analyzerBtn);

document.addEventListener("DOMContentLoaded", (e) => {
    analyzerBtn.addEventListener("click", analyzeText);
});

function analyzeText(){
    const wordcount = textInput.value.trim().split(/\s+/);
    console.log(wordcount);
    const wc = textInput.value.length == 0 ? 0 : wordcount.length;
    wordCount.innerHTML = wc;

    const cc = wordcount.join("").length;
    charCount.innerHTML = cc; 
    
    avgWordCount.innerHTML = wc==0 ? 0 : (cc/wc).toFixed(3);
}