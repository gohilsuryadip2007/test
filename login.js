function login () {
    let name = document.getElementById ("name").value;
    let email = document.getElementById ("email").value;

    if (name && email) {
        // to store in the local store your detail 
        localStorage.setItem ("userName", name);
        localStorage.setItem ("useremail", email);


        // Redirect to notes page 

        window.location.href = "notes.html";
        

    }else {
        alert("plz enter your name and email kaaa sura bhai");

    }
    
    
};