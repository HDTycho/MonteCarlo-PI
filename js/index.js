function piCalc(){
    let point = document.getElementById("myInput").value;
    piCal(point);
}

function piCal(points) {
    let circlecanvas = document.getElementById("circlecanvas");
    circlecanvas.width=(window.innerWidth * .8);
    circlecanvas.height=(window.innerWidth * .8);
    let context = circlecanvas.getContext("2d");

    let x;
    let y;
    let square = 0;
    let circle = 0;
    let canvasWidth = circlecanvas.width;
    let canvasHeight = circlecanvas.height;

    for (let i = 0; i < points ; i++)
    {
        x = Math.random()*canvasWidth;
        y = Math.random()*canvasHeight;

        if ( x*x + y*y <= (canvasWidth*canvasHeight) )	{
            circle++;
            square++;
            context.fillStyle = '#872cf5';
            context.fillRect(x,y,1,1);
        }
        else{
            square++;
            context.fillStyle = '#79ca2d';
            context.fillRect(x,y,1,1);
        }
    }
    pi = 4* (circle/square);
    document.getElementById("piout").innerHTML = "Estimate of PI is : <strong style='text-decoration: underline'> " + pi + "</strong>";
     document.getElementById("myInput").value = points;

}
