const responses = [
  "I'm not lazy, I'm on energy-saving mode.",
  "404: Joke not found.",
  "Why so serious? Have a meme instead.",
  "Coding is 10% writing code, 90% Googling errors.",
  "When nothing goes right... go left!"
];

function getRandomResponse() {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
}

function respond() {
  const userInput = document.getElementById('userInput').value;
  const responseDiv = document.getElementById('response');
  responseDiv.innerText = getRandomResponse();
  document.getElementById('userInput').value = '';
}
