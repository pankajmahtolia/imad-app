console.log('Loaded GameOn!');

// click Me button
var button = document.getElementById('counter');
//on click
button.onclick = function(){
  // creating a request to browsre
  var request = new XMLHttpRequest();

  
  //condition of request
  request.onreadystatechange = function(){
      if(request.readyState === XMLHttpRequest.Done){
      //successsful or not
      if(request.Status === 200){
          var counter = request.reponseText;
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
          
        }
       
     
      }
    };
  
    // before going to onreadystate function it will make a request
    request.open('GET','http://pankajmahtolia0.imad.hasura-app.io/counter',true);
    request.send(null);
};



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

