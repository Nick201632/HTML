console.log("Chat.js Loaded!");

const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");

sendBtn.addEventListener("click", function () {

    const text = messageInput.value.trim();

    if (text === "") return;

    const newMessage = document.createElement("div");

    newMessage.classList.add("message");
    newMessage.classList.add("sent");

    newMessage.textContent = text;

    messages.appendChild(newMessage);

    messageInput.value = "";

});

const backBtn = document.getElementById("backBtn");

console.log(backBtn);

backBtn.addEventListener("click", function () {
    console.log("Back button clicked!");
    window.location.href = "index.html";
});

