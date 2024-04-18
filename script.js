const genderIdentities = [
    "Male", "Female", "Batman", "Spiderman", "Other"]

const dropdown=document.getElementById("dropdown");
genderIdentities.forEach(element => {
    let ident=document.createElement("option");
    let text = document.createTextNode(element);
    ident.appendChild(text);
    dropdown.appendChild(ident);
});

const checkPassword=(form)=>{ 
    password1 = form.password1.value; 
    password2 = form.password2.value; 

    if (password1 == '') 
        alert ("Please enter Password"); 
          
    else if (password2 == '') 
        alert ("Please enter confirm password"); 
          
    else if (password1 != password2) { 
        alert ("\nPassword did not match: Please try again...") 
        return false; 
    } 

    else{ 
        alert("Password Match!") 
        return true; 
    } 
} 