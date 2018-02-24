console.log('Loaded GameOn!');

//for moving (image)
var img = document.getElementById(`img`);
var marginLeft=0;
var marginRight=0;

img.onclick =function(){

    var interval=setInterval(moveRight,10);

};
function moveRight(){
    if(marginRight>=0&&marginRight<=60)
        {marginRight++;
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
            
        }
    else if(marginRight>60&&marginRight<=180){
    marginRight++;
    marginLeft=marginLeft-1;
    img.style.marginLeft=marginLeft+'px';
    }
    else if(marginRight>180){
    marginRight=0;    
    marginLeft=0;
    }

    
}
