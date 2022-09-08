/**
 * Created by Prashant on 08/14/2016.
 */
 "use strict";
 let c = document.getElementById("canvas");
 let ctx = c.getContext("2d");
 
 c.height = window.innerHeight;
 c.width = window.innerWidth;
 
 let floatChar = [0,1];
 let font_size = 10;
 let col = c.width / font_size;
 let charDrops = [];
 for (let i = 0; i < col; i++)
     charDrops[i] = 1;
 
 let putPixel = ()=>{
     ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
     ctx.fillRect(0, 0, c.width, c.height);
     ctx.fillStyle = "#00fff7";
  
     for (let i = 0; i < charDrops.length; i++) {
         let txt = floatChar[Math.floor(Math.random() * floatChar.length)];
         ctx.fillText(txt, i * font_size, charDrops[i] * font_size);
         if (charDrops[i] * font_size > c.height && Math.random() > 0.975)
             charDrops[i] = 0;
 
         //incrementing Y coordinate
         charDrops[i]++;
     }
 }
 
 setInterval(putPixel, 33);