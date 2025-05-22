export default function startBreakout(canvas, onGameOver) {
    const ctx = canvas.getContext('2d');

    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    const ballRadius = 5;

    const paddleHeight = 6;
    const paddleWidth = 50;
    let paddleX = (canvas.width - paddleWidth) / 2;

    const brickRowCount = 5;
    const brickColumnCount = 10;
    const brickWidth = 25;
    const brickHeight = 8;
    const brickPadding = 3;
    const brickOffsetTop = 20;
    const brickOffsetLeft = 10;

    const colors = ["#ff3b3b", "#3b6eff", "#3bff3b", "#f0f03b", "#a03bff"];

    let score = 0;
    let gameOver = false;

    let rightPressed = false;
    let leftPressed = false;

    const bricks = [];
    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            bricks[c][r] = { x: 0, y: 0, status: 1, color };
        }
    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle() {
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight, 5);
        } else {
            ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        }
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.closePath();
    }

    function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;

        const color = bricks[c][r].color;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

        // Efeito 3D pixelado (luz e sombra)
        const lightColor = "#ffffff33"; // branco com transparência
        const shadowColor = "#00000066"; // preto com mais opacidade

        ctx.lineWidth = 1;

        // Luz (topo e esquerda)
        ctx.strokeStyle = lightColor;
        ctx.beginPath();
        ctx.moveTo(brickX, brickY + brickHeight);           // esquerda baixo
        ctx.lineTo(brickX, brickY);                         // esquerda cima
        ctx.lineTo(brickX + brickWidth, brickY);            // topo direita
        ctx.stroke();

        // Sombra (direita e base)
        ctx.strokeStyle = shadowColor;
        ctx.beginPath();
        ctx.moveTo(brickX + brickWidth, brickY);            // direita topo
        ctx.lineTo(brickX + brickWidth, brickY + brickHeight); // direita baixo
        ctx.lineTo(brickX, brickY + brickHeight);           // base esquerda
        ctx.stroke();
      }
    }
  }
}

    function drawScore() {
        ctx.font = "12px 'Press Start 2P', monospace";
        ctx.fillStyle = "#ffffff";
        ctx.fillText("Score: " + score, 8, 20);
    }

    function collisionDetection() {
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                let b = bricks[c][r];
                if (b.status === 1) {
                    if (
                        x > b.x &&
                        x < b.x + brickWidth &&
                        y > b.y &&
                        y < b.y + brickHeight
                    ) {
                        dy = -dy;
                        b.status = 0;
                        score++;
                        if (score === brickRowCount * brickColumnCount) {
                            gameOver = true;
                            if (onGameOver) onGameOver(true); // Venceu
                            return;
                        }
                    }
                }
            }
        }
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Right" || e.key === "ArrowRight") rightPressed = true;
        else if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = true;
    });

    document.addEventListener("keyup", (e) => {
        if (e.key === "Right" || e.key === "ArrowRight") rightPressed = false;
        else if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = false;
    });

    canvas.addEventListener("mousemove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        paddleX = mouseX - paddleWidth / 2;
        paddleX = Math.max(0, Math.min(paddleX, canvas.width - paddleWidth));
    });

    canvas.addEventListener("touchmove", (e) => {
        const rect = canvas.getBoundingClientRect();
        const touchX = e.touches[0].clientX - rect.left;
        paddleX = touchX - paddleWidth / 2;
        paddleX = Math.max(0, Math.min(paddleX, canvas.width - paddleWidth));
        e.preventDefault();
    }, { passive: false });

    function draw() {
        if (gameOver) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        collisionDetection();

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) dx = -dx;
        if (y + dy < ballRadius) dy = -dy;
        else if (y + dy > canvas.height - ballRadius) {
            if (x > paddleX && x < paddleX + paddleWidth) dy = -dy;
            else {
                gameOver = true;
                if (onGameOver) onGameOver(false); // Perdeu
                return;
            }
        }

        if (rightPressed && paddleX < canvas.width - paddleWidth) paddleX += 5;
        else if (leftPressed && paddleX > 0) paddleX -= 5;

        x += dx;
        y += dy;

        requestAnimationFrame(draw);
    }

    draw();
}