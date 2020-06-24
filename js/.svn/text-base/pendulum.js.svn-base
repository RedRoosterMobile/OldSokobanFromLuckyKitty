// https://gist.github.com/333492
//http://colabopad.blogspot.com/2011/10/box2d-demo-of-pendulum-lab-running-on.html
//processing
//http://www.gwoptics.org/processing/pendulum/pendulum.php
// no interaction
//http://jsdo.it/yuqq.js/qjtB
// walk the line
//http://www.sci.utah.edu/~msteffen/teaching/double_pendulum.html
function rotate(id) {
    var element = document.getElementById(id);
    function applyRotate(angle) {
        var strAngle = "rotate(" + angle + "rad)";
        element.style.WebkitTransform = strAngle;
        element.style.MozTransform = strAngle;
    }
    function update() {
        var start = new Date().getTime();
        update.acceleration = update.g * update.angle;
        update.speed += update.acceleration;
        update.angle += update.speed;
        applyRotate(update.angle);
        var elapsed = new Date().getTime() - start;
        setTimeout(update, 80-elapsed);
    }
    update.g = -.005;
    update.acceleration = 1;
    update.speed = 0;
    update.angle = .1;
    element.style.WebkitTransformOrigin = "center top";
    element.style.MozTransformOrigin = "center top";
    update();
}