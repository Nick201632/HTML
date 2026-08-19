console.log("Ritrix Started!");

const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const chats = document.querySelectorAll(".chat");

function updateSearch() {

    const search = searchInput.value.toLowerCase().trim();

    chats.forEach(chat => {

        const name = chat.querySelector(".info h3").textContent.toLowerCase();

        if (name.includes(search)) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }

    });

    if (search === "") {
        clearBtn.style.display = "none";
    } else {
        clearBtn.style.display = "block";
    }

}

function clearSearch() {
    searchInput.value = "";
    updateSearch();
    searchInput.focus();
}

searchInput.addEventListener("input", updateSearch);

function openChat(){

    document.getElementById("homeScreen").style.display = "none";

    document.querySelector(".chat-screen").style.display = "block";

}