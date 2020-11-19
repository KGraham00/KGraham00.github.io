var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeRunner = function() {
        
        window.opspark.runner = {};
        var runner = window.opspark.runner;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables //
        var circle;
        var circles = [];

        // TODO 2 : Create a function that draws a circle  //
        var drawCircle = function() {
            // TODO 2: Draw a circle //
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas);
            view.addChild(circle);
            circles.push(circle);
            // other code...
        }
        
        // TODO 3 : Call the drawCircle function 5 times //
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();

        // TODO 7 : Create a Loop to call drawCircle 100 times
        var counter = 0;
        while (counter < 100) {
            drawCircle();
            counter++;
        }
    
        view.addChild(fps);
        app.addUpdateable(fps);
    
        runner.checkCircleBounds = function(circle) {
            var areaWidth = canvas.width + circle.radius;
            var areaHeight = canvas.height + circle.radius;
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////
            if ( circle.x > areaWidth ) {
                circle.x = - circle.radius;
            } 
            else if ( circle.x < - circle.radius ) {
                circle.x = areaWidth;
            } 
            if ( circle.y > areaHeight ) {
                circle.y = - circle.radius;
            } 
            else if ( circle.y < - circle.radius ) {
                circle.y = areaHeight;
            }
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        }
    
        function update() {
            // TODO 4 : Update the circle's position //
            // physikz.updatePosition(circles[0]);
            // physikz.updatePosition(circles[1]);
            // physikz.updatePosition(circles[2]);
            // physikz.updatePosition(circles[3]);
            // physikz.updatePosition(circles[4]);
            
            // TODO 6 : Call checkCircleBounds on your circles.
            // runner.checkCircleBounds(circles[0]);
            // runner.checkCircleBounds(circles[1]);
            // runner.checkCircleBounds(circles[2]);
            // runner.checkCircleBounds(circles[3]);
            // runner.checkCircleBounds(circles[4]);
    
            // TODO 8 : Iterate over the array
            for (var i = 0; i < circles.length; i++) {
                var circle = circles[i];
                physikz.updatePosition(circle);
                runner.checkCircleBounds(circle);
            }
        }
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        runner.circle = circle;
        runner.circles = circles;
        runner.drawCircle = drawCircle;
        runner.update = update;
        
        app.addUpdateable(window.opspark.runner);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
