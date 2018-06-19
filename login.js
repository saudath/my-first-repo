function loginForm()
{
	var id=document.getElementById("userid").value;
	window.x=id;
    var password=document.getElementById("passwrd").value;
    var pass = JSON.parse(localStorage.getItem(id));
    //var ph=JSON.stringify(pass.photo);
    if(pass.password==password)
    {
        localStorage.setItem('Active user',id);
        window.location.href = "form.html";
    	/*document.getElementById("d").style.display="inline";
    	document.getElementById("firstname").innerHTML=pass.firstname;
    	document.getElementById("lastname").innerHTML=pass.lastname;
    	document.getElementById("username").innerHTML=pass.username;
    	document.getElementById("email").innerHTML=pass.email;
    	document.getElementById("dob").innerHTML=JSON.stringify(pass.sdob);
    	document.getElementById("country").innerHTML=pass.country;
    	document.getElementById("phone").innerHTML=pass.phone;
        document.getElementById("photo").src=pass.photo;
        
    	document.getElementById("container").style.display="none";
    	//document.getElementById("i").style.display="inline";
    	//document.getElementById("i").style.display="block";
    	//document.getElementById("g").style.display="none";
    	*/
    }
    else
    {
    	document.getElementById("g").style.display="block";
    }
}
