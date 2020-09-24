var images=[
    "Welcome.gif",
    "Family1.jpg",
    "Family11.jpg",
    "Family2.jpg",
    "Advik Godse.jpg",
    "Family5.jpg",    
    "Family6.jpg",
    "Family7.jpg",
    "Niharika Godse.jpg",
    "Family8.jpg",
    "Family9.jpg",
    "Family10.jpg",    
    "Family4.jpg",
    "Family12.jpg",
    "Family16.jpg",
    "Yogita Godse.jpg",
    "Family13.jpg",
    "Family14.jpg",
    "Family15.jpg",    
    "Family17.jpg",
    "Family18.jpg",
    "Family19.jpg",
    "Prashant Godse.jpg",
    "Family20.jpg",
    "Family21.jpg",
    "Family22.jpg",
    "Family23.jpg",
    "Thank You.gif",
    "Bye.gif",
];

var text=[
    "Welcome!",
    "",
    "",
    "",
    "Advik Godse (My Brother)",
    "",
    "",
    "",
    "Niharika Godse (Me!)", 
    "",
    "",
    "",
    "",
    "",
    "",
    "Yogita Godse (My Mother)",
    "",
    "",
    "",
    "",
    "",
    "",
    "Prashant Godse (My Father)",
    "", 
    "",
    "",
    "",
    "Thank You and.......",
    "Bye!!̥",
];


var i=0;


function next(){

    i++;
    
    if ( i > 28 ) {
        
        i=0
   
    };
   
    
    document.getElementById("txtChange").innerHTML = text[i];
    document.getElementById("imgChange").src = images[i];       
    
    
   
       
};



function back(){

    i--;

    if ( i < 0 ) {
        
        i=28
   
    };

    document.getElementById("txtChange").innerHTML = text[i];
    document.getElementById("imgChange").src = images[i];       
    
  


}

