function formValidation()
{
  var uid= document.registration.username.value;
  var first=document.registration.firstname.value;
  var last=document.registration.lastname.value;
  var dob=document.registration.dob.value;
  var uname = document.registration.details;
  bannerImage = document.getElementById('bannerImg');
imgData = getBase64Image(bannerImage);
localStorage.setItem("imgData", imgData);
  var e = document.getElementById("country");
  var ucountry = e.options[e.selectedIndex].value;
  var uphone = document.registration.phone.value;
  var uemail = document.registration.email.value;
  var upass=document.registration.password.value;
  var user={"firstname":first,"lastname":last,"username":uid,"email":uemail,"password":upass,"sdob":dob,"country":ucountry,"phone":uphone};
  if(name_length(first,3,12,'Firstname'))
  {
    if(name_length(uid,5,12,'Username'))
    {
      if(ValidateEmail(uemail))
      {
         if(countryselect(ucountry))
         {
            if(allnumeric(uphone))
            {
            localStorage.setItem(uemail, JSON.stringify(user));
            console.log(user);
            }
         }
      }
    }
  }
  return false;
}
/*
function query()
{
  var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

  previewFile();
 
*/
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function readURL(input) 
{
    document.getElementById("bannerImg").style.display = "block";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('bannerImg').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}


function name_length(uid,mx,my,a)
{
var uid_len = uid.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert(a+" should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}

function passid_validation(passid,mx,my)
{
var passid_len = passid.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}

function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.match(letters))
{
alert('Form Successfully Submitted');
return true;
}
else
{
alert('Details must have alphabet characters only');
uname.focus();
return false;
}
}

function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}

function countryselect(ucountry)
{
if(ucountry == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}

function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.match(numbers))
{
alert('Form Successfully Submitted');
return true;

}
else
{
alert('Phone number must have numeric characters only');
uzip.focus();
return false;
}
}


function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.match(mailformat))
{

return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}

function validsex(umsex,ufsex)
{
x=0;

if(umsex.checked) 
{
x++;
} if(ufsex.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
umsex.focus();
return false;
}
else
{
alert('Form Successfully Submitted');

return true;}
}


