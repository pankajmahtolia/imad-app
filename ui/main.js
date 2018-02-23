console.log('Loaded!');
//changing text of main page
var element=document.getElementById(`centre_text`);
element.innerHTML=`Hey, Everyone It's Pankaj@Ash Here!`;

//for moving madi (image)
var img = document.getElementById(`madi`);
img.onclick =function(){
    img.style.marginLeft='50px';
};