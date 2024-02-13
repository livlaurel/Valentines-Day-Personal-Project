
function Yes() {
      var buttonsContainer = document.querySelector('.container');
      buttonsContainer.style.display = 'none';
   
      var paragraph = document.createElement('p');

      var textNode1 = document.createTextNode("I love you so much!++");
      var lineBreak = document.createElement('br');
      var textNode2 = document.createTextNode("(read the card hehe)");

      paragraph.appendChild(textNode1);
      paragraph.appendChild(lineBreak);
      paragraph.appendChild(textNode2);
      
      paragraph.style.fontSize = '50px';
      paragraph.style.color = 'black';
      paragraph.style.fontFamily = 'Gill Sans, sans-serif, monospace';

      paragraph.style.position = 'absolute';
      paragraph.style.top = '70%';
      paragraph.style.left = '50%';
      paragraph.style.transform = 'translate(-50%, -50%)';

      paragraph.style.whiteSpace = 'pre-line';

      document.body.appendChild(paragraph);

      var image = document.createElement('img');
      image.src = '/Users/olivialaurel/Downloads/personal projects/lib.jpeg';
      image.style.width = '272px'; 
      image.style.height = '181.5px'; 
      image.style.position = 'absolute';
      image.style.top = '50%';
      image.style.left = '50%';
      image.style.transform = 'translate(-50%, -50%)';
      document.body.appendChild(image);
}

function message(){
   var messages = [
      "are you sure?",
      "what?",
      "how about reconsidering?",
      "try again babe!",
      "what the freak?",
      "huh?",
      ":(",
      "babeeeeee",
      "but why tho?",
      "man come on",
      "no?",
      "what the fweaking heck",
      "STOP",
      "be fr",
      "BARK",
      "pause",
      "try that one more time!",
      "wrong button!",
      "yikes",
      "uhhhh no?"
   ];

   var randomIndex = Math.floor(Math.random() * messages.length);

   return messages[randomIndex];
}

function No() {
   document.querySelector('.no').innerText = message();

   var yesButton = document.querySelector('.yes');
   var currentSize = window.getComputedStyle(yesButton, null).getPropertyValue('font-size');
   var newSize = (parseFloat(currentSize) + 7.0) + 'px';
   yesButton.style.fontSize = newSize;
}