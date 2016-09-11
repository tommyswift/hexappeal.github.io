var d, h, m, s, color;
function displayTime() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    if(h <= 9) h = '0'+h;
    if(m <= 9) m = '0'+m;
    if(s <= 9) s = '0'+s;
    
    color = "#"+h+m+s;
  
  
document.body.style.background = color; 
  
             document.getElementById("hex").innerHTML = color;  
  
 document.getElementById("t").innerHTML = h+":"+m+":"+s;
 
 /* $("div.background").css("background",'-webkit-linear-gradient(to left,'+color+' 10%, #ffffff 90%'); */  
    
   setTimeout(displayTime, 1000);
    
}

displayTime();

