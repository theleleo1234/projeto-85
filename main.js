canvas = document.getElementById("mycanvas");
ctx = canvas.getcontext("2d");
greencar_width = 75;
greencar_height = 100;
function add() {
background_imgtag = new Image();
background_imgtag.onload = uploadbackground
background_imgtag.src = background_image;
greencar_imgtag = nei Image();
greencar_imgtag.onload = uploadbackground;
greencar_imgtag.src = greencar_image;
}
function uploadbackground
 ctx.drawimage(background_imgtag, 0, 0, canvas.width, canvas.height)
}
function uploadgreencar() {
    ctx.drawimage(greencar_imgtab, greencar_x,greencar_y, greencar.width, greencarheight);
}
function up() {
}
  greencar_y = greencar_y - 10;
  console.log("when up arrow is pressed",  x = "+ greencar_x" y= " +green_y;)
  uploadbackground();
  uploadgreencar();           