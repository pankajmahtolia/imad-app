console.log('Loaded GameOn!');

//for moving madi (image)
var img = document.getElementById(`img`);
var marginLeft=0;
function moveRight(){
    
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
    
    
}
img.onclick =function(){
    if(marginLeft<=200)
    var interval=setInterval(moveRight,10);

};