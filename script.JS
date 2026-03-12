const chatBox = document.getElementById("chatBox");

function sendMessage(){

let input = document.getElementById("userInput");
let text = input.value;

if(text === "") return;

addMessage(text,"user");

input.value="";

thinking();

setTimeout(()=>{
let reply = generateAI(text);
addMessage(reply,"bot");
},1000);

}

function addMessage(text,type){

let msg = document.createElement("div");
msg.classList.add("message");
msg.classList.add(type);

msg.innerText=text;

chatBox.appendChild(msg);

chatBox.scrollTop = chatBox.scrollHeight;

}

function thinking(){

addMessage("AI is thinking...","bot");

}

function generateAI(text){

text = text.toLowerCase();

if(text.includes("hello"))
return "Hello 👋 How can I help you?";

if(text.includes("quiz"))
return "Quiz: What is 2 + 2 ?";

if(text.includes("study"))
return "Study Tip 📚: Break topics into small parts.";

if(text.includes("shop"))
return "Shopping Research 🛒: Compare prices before buying.";

return "I can help with research, study, quizzes, shopping, and more!";
}

function addEmoji(){
document.getElementById("userInput").value += "😊";
}

function createPoll(){

let question = prompt("Enter poll question");

addMessage("📊 Poll: "+question,"bot");

}

function createEvent(){

let event = prompt("Enter event name");

addMessage("📅 Event Created: "+event,"bot");

}

function addSticker(){

addMessage("🎨 Sticker Sent!","user");

}

function webSearch(){

let q = document.getElementById("userInput").value;

window.open("https://www.google.com/search?q="+q);

}