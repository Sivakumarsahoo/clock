setInterval(() => {
   d=new Date();
   htime=d.getHours();
   mtime=d.getMinutes();
   stime=d.getSeconds();
   h=30*htime+mtime/2;
   m=6*mtime;
   s=6*stime;
   console.log("sukanya i love you");
   document.querySelector("#second").style.transform= `rotate(${s}deg)`;
   
   document.querySelector("#hour").style.transform= `rotate(${h}deg)`;
   
  
   document.querySelector("#minute").style.transform= `rotate(${m}deg)`;
}, 1000);
    
