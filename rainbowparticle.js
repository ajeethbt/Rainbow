var xPositions = [100, 200, 300];
var yPositions = [0, 100, 250];

for( var numX = 0; numX < 15; numX++) {
    xPositions.push(random(0,400));
    yPositions.push(random(0,400)); 
}

draw = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(xPositions[i], yPositions[i], random(0,400));
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
            
            if(yPositions[i] > 400){
                yPositions[i] = 0;
            }
    }
    
if(mouseIsPressed) {
    xPositions.push(random(0,400));
    yPositions.push(random(0,400)); 
    
}
};
