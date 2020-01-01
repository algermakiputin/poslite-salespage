
  
$(document).ready(function() {
    
    var countOffset = $("#count-section").offset().top; 
    var counted = 0; 

    console.log(countOffset)
    
    $(window).scroll(function() {
        var win = document.documentElement.scrollTop; 
      
        if (win >= countOffset && !counted) {
             counter($("#luzon"), 0, 48, 320);
             counter($("#visayas"), 0, 34, 300);
             counter($("#mindanao"), 0, 25, 460);
            counted = 1; 
        }else {
             
        }
    });
})

/* 
@@params
elem - element to display the counter
start - starting number to count
end - ending number to count
speed - in seconds
increment - sum number / skip, default 0
*/

function counter(elem, start, end,speed, increment = 0) {
    var start = parseInt(start);
    var end = parseInt(end);
    
    var interval = setInterval(function() {
        elem.text(start)
        start++;

        if (increment)
            start += increment;

        if (start > end) {
            elem.text(end);
            clearInterval(interval);
        }
    }, speed / 4.89);



}

