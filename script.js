// --- Quiz Logic ---
function takeStep(score) {
    const container = document.getElementById('quiz-container');
    const result = document.getElementById('quiz-result');
    
    container.style.display = 'none';
    result.style.display = 'block';

    if (score <= 2) {
        result.innerHTML = "<h3>It's okay to feel overwhelmed.</h3><p>Take 5 minutes to drink some water and stretch. You're doing your best.</p>";
    } else {
        result.innerHTML = "<h3>Looking good!</h3><p>Keep that positive energy flowing and share a smile with someone today.</p>";
    }
}

// --- Jokes Logic ---
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "What do you call a fake noodle? An Impasta!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised."
];

function getJoke() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.getElementById('joke-text').innerText = randomJoke;
}

// --- Game Logic: Click a Cloud ---
let score = 0;
function startGame() {
    score = 0;
    document.getElementById('score').innerText = "Score: " + score;
    const area = document.getElementById('cloud-area');
    area.innerHTML = '';
    
    for(let i=0; i<10; i++) {
        createCloud();
    }
}

function createCloud() {
    const area = document.getElementById('cloud-area');
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.innerText = '☁️';
    cloud.style.top = Math.random() * 150 + 'px';
    cloud.style.left = Math.random() * 90 + '%';

    // add movement logic below
    let currentLeft = parseFloat(cloud.style.left);
    function move() {
        currentLeft += 0.1; 
        cloud.style.left = currentLeft +'%';

        // Remove the cloud if it goes off-screen to save memory
        if(currentLeft < 100) {
            requestAnimationFrame(move);
        }
        else {
            cloud.remove();
        }
    }
    move(); //start moving the cloud
    
    cloud.onclick = function() {
        score++;
        document.getElementById('score').innerText = "Score: " + score;
        this.remove();
        if(document.querySelectorAll('.cloud').length === 0) {
            alert("Bravo you did a good job!");
        }
    };
    area.appendChild(cloud);
}