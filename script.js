function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
  
    if (username === "user" && password === "password") {
      alert("Login successful!");
     
      return true;
    } else {
     alert("Login Failed");
      return false;
    }
  }