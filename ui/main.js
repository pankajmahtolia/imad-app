console.log('Loaded GameOn!');

//for moving madi (image)
var img = document.getElementById(`tripu`);
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';   
    
}
img.onclick =function(){
    var interval=setInterval(moveRight,10);

};