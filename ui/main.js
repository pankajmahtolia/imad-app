console.log('Loaded GameOn!');

//for moving madi (image)
var img = document.getElementById(`img`);
var marginLeft=0;
var marginRight=0;
img.onclick =function(){

    var interval=setInterval(moveRight,10);

};
function moveRight(){
    if(marginRight>=0&&marginRight<=150)
        {marginRight++;
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
            
        }
    else if(marginRight>150&&marginRight<=300){
    marginRight++;
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft-'px';
    }
    else if(marginRight>300){
    marginRight=0;    
    }
    
    
}
