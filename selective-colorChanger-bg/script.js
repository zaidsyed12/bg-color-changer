const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach((button)=>{
   button.addEventListener('click', function(evt) {
       //console.log(evt);
       //console.log(evt.target);
       
        if(evt.target.id === 'box1'){
            body.style.backgroundColor = 'maroon';
        }
        else if(evt.target.id === 'box2'){
            body.style.backgroundColor = 'bisque';
        }
        else if(evt.target.id === 'box3'){
            body.style.backgroundColor = '#2929';
        }

        // switch (evt.target.id) {
            // case 'box1':
                // body.style.backgroundColor = 'maroon';
                // break;
            // case 'box2':
                // body.style.backgroundColor = 'bisque';
                // break;
            // case 'box3':
                // body.style.backgroundColor = '#2929';
                // break;
            // default:
                // break;
        // }


        

    });

});


