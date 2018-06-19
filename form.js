 function FormDetails()
 {
    var pas =localStorage.getItem('Active user');
     if(pas==0)
        {
            window.location.href="login.html";
        }
     var pass = JSON.parse(localStorage.getItem(pas));
     console.log(pass.username);
     //document.getElementById("formfill").style.display="block";
     
     document.getElementById("firstname").innerHTML=pass.firstname;
    	document.getElementById("lastname").innerHTML=pass.lastname;
    	document.getElementById("username").innerHTML=pass.username;
    	document.getElementById("email").innerHTML=pass.email;
    	document.getElementById("dob").innerHTML=JSON.stringify(pass.sdob);
    	document.getElementById("country").innerHTML=pass.country;
    	document.getElementById("phone").innerHTML=pass.phone;
       // document.getElementById("photo").src=pass.photo;
        var dataImage = localStorage.getItem('imgData');
bannerImg = document.getElementById('photo');
bannerImg.src = "data:image/png;base64," + dataImage;
    }
    
    function terminate()
    {
        localStorage.setItem('Active user',0);
        window.location.href="login.html"
    }
        