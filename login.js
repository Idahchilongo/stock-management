window.onload = function (){
    document.querySelector("button").onclick = function Login(){


    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    if(!usernameInput || !passwordInput){
        alert("login fields not found!");
        return;
    }
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    const correctUsername = "fatwell";
    const correctPassword = "12345";
    console.log("login button clicked");

    if (username === correctUsername && password === correctPassword){
        //save login state(optional)

        sessionStorage.setItem("loggedInUser", username);
        //redirect to main page
        console.log("login success....")
        window.location.href = "dashboard.html";
    }else {
        document.getElementById("message").textContent = "invalid username or password";
    }
    };
};