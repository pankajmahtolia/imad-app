console.log('Loaded GameOn!');

//for moving madi (image)
var img = document.getElementById(`img`);
var marginLeft=0;
var marginRight=0;
function moveRight(){
    marginRight++;
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
    
    
}
img.onclick =function(){
    if(marginRight<10)
    var interval=setInterval(moveRight,10);

};