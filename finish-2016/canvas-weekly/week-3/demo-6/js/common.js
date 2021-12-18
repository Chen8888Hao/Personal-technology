(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    var ball = new Ball();

    var angle = 0,
        radiusX = 50,
        radiusY = 100,
        speed = 0.05;

    (function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvas.width, canvas.height);

        ball.x = centerX + Math.sin(angle) * radiusX;
        ball.y = centerY + Math.cos(angle) * radiusY;
        angle += speed;

        ball.draw(context);
    })();
})();
