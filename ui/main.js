console.log('Loaded GameOn!');
//changing text of main page
var element=document.getElementById(`centre_text`);
element.innerHTML=`Hey, Everyone It's Pankaj@Ash Here!`;

//for moving madi (image)
var img = document.getElementById(`madi`);
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';   
    
}
img.onclick =function(){
    var interval=setInterval(moveRight,10);

};