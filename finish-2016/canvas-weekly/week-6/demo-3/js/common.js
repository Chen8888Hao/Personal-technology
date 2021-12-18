(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        canvasW = canvas.width,
        canvasH = canvas.height;

    var ship = new Ship();
    ship.x = centerX;
    ship.y = centerY;

    var vr = 0,
        vx = 0,
        vy = 0,
        ax = 0,
        ay = 0,
        angle = 0,
        thrust = 0;

    window.addEventListener('keydown', function(event) {
        switch (event.keyCode) {
            case 37:
                vr = -3;
                break;
            case 39:
                vr = 3;
                break;
            case 38:
                ship.showFlame = true;
                thrust = 0.05;
                break;
            case 40:
                thrust -= 0.02;
                break;
        }
    }, false);

    window.addEventListener('keyup', function(event) {
        vr = 0;
        thrust = 0;
        ship.showFlame = false;
    }, false);

    !(function drawFrame() {
        window.requestAnimationFrame(drawFrame, canvas);
        context.clearRect(0, 0, canvasW, canvasH);

        ship.rotation += vr * Math.PI / 180;

        angle = ship.rotation;
        ax = Math.cos(angle) * thrust;
        ay = Math.sin(angle) * thrust;

        vx += ax;
        vy += ay;

        ship.x += vx;
        ship.y += vy;

        if (ship.x - ship.width / 2 > canvasW) {
            ship.x = 0;
        }
        if (ship.x < 0) {
            ship.x = canvasW;
        }
        if (ship.y - ship.height / 2 > canvasH) {
            ship.y = 0;
        }
        if (ship.y < 0) {
            ship.y = canvasH;
        }

        ship.draw(context);
    })();
})();
