function navbar_spyscroll() {

    var navbar = this.document.getElementById("mainnav").getElementsByTagName("li");
    var elemOffset = 200;
    
    window.onscroll = function() {
        
        var yPosition = document.documentElement.scrollTop; 
        var offset = 700;  

        for (i = 0; i < navbar.length; i++) {
            
            let menu = navbar[i].querySelector("a").getAttribute("href").substr(1); 
            var section = this.document.getElementById(this.String(menu));
              
            if ( section ) {
                
                var elem_y_position = section.offsetTop - elemOffset;
                var nextSection = section.offsetHeight + elem_y_position; 
                
                var li = navbar[i];  

                if (yPosition >= elem_y_position && nextSection > yPosition) {
                    li.classList.add("menu-active");
                }else { 
                    li.classList.remove("menu-active");
                }  
                
            } 
             
        }
    }
}

/* 
Home = 0;
Services = 1000;

current scroll 800

*/