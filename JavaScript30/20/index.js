;
(function() {
  'use strict'
  
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  console.log(window.SpeechRecognition)

  const sr = new SpeechRecognition()
  sr.interimResults = true

  let p = document.createElement('p')
  const words = document.querySelector('.words')
  words.appendChild(p)

  sr.addEventListener('result', e => {

    console.log('录音有结果')
    const transcript = Array.from(e.results)
      .map(result => {console.log(result);return result[0]})
      .map(result => result.transcript)
      .join('')

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi,'💩')
    p.textContent = poopScript

    if (e.results[0].isFinal) {
      p = document.createElement('p')
      words.appendChild(p)
    } 
  })

  sr.addEventListener('end',sr.start)
  sr.start()
  console.log('录音开始')
  
})();
