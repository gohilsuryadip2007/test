document.addEventListener("DOMContentLoaded", () => {
    let username = localStorage.getItem("userName");
    if (!username) {
        window.location.href = "index.html"; // Redirect to login if not logged in
    }

    document.getElementById("username").innerText = username;
    loadNotes();
});

function saveNote() {
    let note = document.getElementById("note").value;
    if (note.trim() === "") return;

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));

    document.getElementById("note").value = "";
    loadNotes();
}

function loadNotes() {
    let notesList = document.getElementById("notesList");
    notesList.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach((note, index) => {
        let li = document.createElement("li");
        li.textContent = note;
        notesList.appendChild(li);
    });
}
