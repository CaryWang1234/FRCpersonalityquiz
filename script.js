// ---- Questions Data ----
const questions = [
    {
        text: "When you walk into the pits for the first time, what’s your immediate focus?",
        options: [
            { letter: "A", text: "Scanning the entire stadium", trait: "strategic" },
            { letter: "B", text: "Checking out everyone else’s robot designs.", trait: "competitive" },
            { letter: "C", text: "Finding the veteran teams and asking for advice.", trait: "collaborative" },
            { letter: "D", text: "Making sure our pit area is perfectly organized.", trait: "detail" }
        ]
    },
    {
        text: "Your robot just broke during a match. You:",
        options: [
            { letter: "A", text: "Grab the toolbox and start fixing it immediately.", trait: "practical" },
            { letter: "B", text: "Quickly analyze what went wrong and delegate tasks.", trait: "analytical" },
            { letter: "C", text: "Stay calm, encourage the team, and find a workaround.", trait: "resilient" },
            { letter: "D", text: "Yell “ROBOT!” and hope for the best.", trait: "passionate" }
        ]
    },
    {
        text: "Which role would you most enjoy during build season?",
        options: [
            { letter: "A", text: "Designing the mechanism in CAD.", trait: "innovative" },
            { letter: "B", text: "Machining and assembling parts.", trait: "hands-on" },
            { letter: "C", text: "Writing the autonomous code.", trait: "tech-savvy" },
            { letter: "D", text: "Scouting other teams and planning alliance strategy.", trait: "social" }
        ]
    },
    {
        text: "What’s your ideal celebration after a tough win?",
        options: [
            { letter: "A", text: "High-fiving everyone in sight and maybe dancing.", trait: "energetic" },
            { letter: "B", text: "A quiet fist pump and immediately analyzing what we did right.", trait: "calm" },
            { letter: "C", text: "Taking a team photo and posting it on social media.", trait: "community" },
            { letter: "D", text: "Going to the snack bar to celebrate with food.", trait: "easygoing" }
        ]
    },
    {
        text: "Pick a game element that most excites you:",
        options: [
            { letter: "A", text: "A massive climbing challenge at the end.", trait: "climber" },
            { letter: "B", text: "Shooting game pieces into high goals.", trait: "shooter" },
            { letter: "C", text: "Collecting objects from the floor and passing them.", trait: "collector" },
            { letter: "D", text: "Balancing on a platform with alliance partners.", trait: "team-player" }
        ]
    },
    {
        text: "How do you handle a controversial referee call?",
        options: [
            { letter: "A", text: "Respectfully ask for clarification after the match.", trait: "gracious" },
            { letter: "B", text: "Immediately raise your hand and argue your case.", trait: "assertive" },
            { letter: "C", text: "Take a deep breath and focus on the next match.", trait: "resilient" },
            { letter: "D", text: "Trust that your drive team did their best regardless.", trait: "supportive" }
        ]
    },
    {
        text: "Your dream alliance partner would be:",
        options: [
            { letter: "A", text: "The underdog team with a clever mechanism.", trait: "creative" },
            { letter: "B", text: "The powerhouse team that dominates every year.", trait: "ambitious" },
            { letter: "C", text: "A team known for exceptional teamwork and spirit.", trait: "spirited" },
            { letter: "D", text: "A robot that perfectly complements your own strategy.", trait: "strategic" }
        ]
    },
    {
        text: "What does 'Gracious Professionalism' mean to you?",
        options: [
            { letter: "A", text: "Competing fiercely but helping others whenever possible.", trait: "balanced" },
            { letter: "B", text: "Putting kindness and respect above winning.", trait: "kind" },
            { letter: "C", text: "Sharing knowledge openly with the community.", trait: "sharing" },
            { letter: "D", text: "Pushing yourself and your team to be the best version of yourselves.", trait: "growth" }
        ]
    },
    {
        text: "Choose a robot aesthetic:",
        options: [
            { letter: "A", text: "Sleek, polished, with custom anodized parts.", trait: "modern" },
            { letter: "B", text: "Robust, industrial, built like a tank.", trait: "sturdy" },
            { letter: "C", text: "Colorful, with LEDs and fun decorations.", trait: "playful" },
            { letter: "D", text: "Minimalist, efficient, nothing unnecessary.", trait: "pragmatic" }
        ]
    },
    {
        text: "The game manual is released. You:",
        options: [
            { letter: "A", text: "Read it cover to cover before doing anything else.", trait: "thorough" },
            { letter: "B", text: "Skim for the most impactful rules and start brainstorming.", trait: "fast" },
            { letter: "C", text: "Watch the animation first, then dive into details.", trait: "visual" },
            { letter: "D", text: "Discuss interpretations with your team right away.", trait: "collaborative" }
        ]
    },
    {
        text: "How do you feel about autonomous mode?",
        options: [
            { letter: "A", text: "It’s the most exciting part of the match.", trait: "tech-savvy" },
            { letter: "B", text: "A necessary evil, I prefer teleop periods.", trait: "driver" },
            { letter: "C", text: "Love tweaking the code until it’s perfect.", trait: "perfectionist" },
            { letter: "D", text: "Prefer strategies that work with auto.", trait: "adaptable" }
        ]
    },
    {
        text: "Which activity will you do during offseason?",
        options: [
            { letter: "A", text: "Hosting a workshop for local teams.", trait: "community" },
            { letter: "B", text: "Competing in an off-season event.", trait: "competitive" },
            { letter: "C", text: "Prototyping new ideas for next year.", trait: "innovative" },
            { letter: "D", text: "Relaxing and recharging with the team.", trait: "balanced" }
        ]
    },
    {
        text: "Pick a word that resonates with you:",
        options: [
            { letter: "A", text: "rebuilt", trait: "renewal" },
            { letter: "B", text: "lightning", trait: "speed" },
            { letter: "C", text: "explosive", trait: "energy" },
            { letter: "D", text: "space", trait: "exploration" }
        ]
    },
    {
        text: "Your team is behind in qualifications. What do you do?",
        options: [
            { letter: "A", text: "Analyze standings and adjust scouting priorities.", trait: "strategic" },
            { letter: "B", text: "Practice relentlessly to improve performance.", trait: "disciplined" },
            { letter: "C", text: "Boost morale with a team cheer.", trait: "spirited" },
            { letter: "D", text: "Seek advice from higher-seeded teams.", trait: "networking" }
        ]
    },
    {
        text: "Which safety rule annoys you the most?",
        options: [
            { letter: "A", text: "No safety glasses in the pit.", trait: "rule-follower" },
            { letter: "B", text: "Leaving tools scattered on the floor.", trait: "organized" },
            { letter: "C", text: "Running near the field.", trait: "cautious" },
            { letter: "D", text: "Ignoring battery safety.", trait: "responsible" }
        ]
    },
    {
        text: "How would you describe your ideal FIRST experience?",
        options: [
            { letter: "A", text: "Winning a blue banner at the Championship.", trait: "ambitious" },
            { letter: "B", text: "Making lifelong friends from different teams.", trait: "connector" },
            { letter: "C", text: "Solving a really tough engineering problem.", trait: "engineer" },
            { letter: "D", text: "Inspiring younger students to join STEM.", trait: "mentor" }
        ]
    },
    {
        text: "Choose a color combo for your robot:",
        options: [
            { letter: "A", text: "Red and black", trait: "fierce" },
            { letter: "B", text: "Blue and silver", trait: "classic" },
            { letter: "C", text: "White and gold", trait: "futuristic" },
            { letter: "D", text: "Neon", trait: "flashy" }
        ]
    },
    {
        text: "What’s your go-to snack during a long competition day?",
        options: [
            { letter: "A", text: "Granola bars and fruit.", trait: "healthy" },
            { letter: "B", text: "Pizza and energy drinks.", trait: "intense" },
            { letter: "C", text: "Whatever the team parents brought.", trait: "grateful" },
            { letter: "D", text: "I forget to eat when I’m focused.", trait: "obsessed" }
        ]
    },
    {
        text: "You have one extra week before competition. You:",
        options: [
            { letter: "A", text: "Refine the autonomous routine.", trait: "tech-savvy" },
            { letter: "B", text: "Add that cool feature you had to cut earlier.", trait: "dreamer" },
            { letter: "C", text: "Intensively test and fix reliability issues.", trait: "reliable" },
            { letter: "D", text: "Write a thorough scouting method for competitions.", trait: "prepared" }
        ]
    },
    {
        text: "Finally, what does FIRST mean to you personally?",
        options: [
            { letter: "A", text: "A place where I can be myself and build cool stuff.", trait: "authentic" },
            { letter: "B", text: "The hardest fun I’ll ever have.", trait: "passionate" },
            { letter: "C", text: "A community that changed my life.", trait: "impactful" },
            { letter: "D", text: "The reason I’m pursuing engineering.", trait: "inspired" }
        ]
    }
];

// ---- Season Mapping (1992 hidden) ----
const seasonResults = [
    { name: "REBUILT", year: 2026, tagline: "Transformation & Redemption", desc: "You embrace fresh starts and aren't afraid to rebuild from the ground up. Adaptable and forward-thinking, you see every setback as a setup for a comeback.", traits: ["resilient", "renewal", "pragmatic", "innovative"] },
    { name: "REEFSCAPE", year: 2025, tagline: "Deep Dive into the Unknown", desc: "You're drawn to complexity and depth. Like navigating a coral reef, you excel in challenging environments and find beauty in intricate systems.", traits: ["exploration", "thorough", "visual", "adaptable"] },
    { name: "CRESCENDO", year: 2024, tagline: "Rising to the Occasion", desc: "Energy and momentum define you. You love building up to a powerful climax, whether it's a match or a project, and you thrive under spotlight.", traits: ["energetic", "perfectionist", "modern", "futuristic"] },
    { name: "CHARGED UP", year: 2023, tagline: "Powered by Enthusiasm", desc: "Your optimism is contagious. You bring energy to every alliance and see opportunity in every challenge, always ready to plug in and contribute.", traits: ["energy", "collaborative", "playful", "flashy"] },
    { name: "RAPID REACT", year: 2022, tagline: "Speed & Precision", desc: "Fast thinking and sharp execution are your hallmarks. You're at your best when decisions need to be made in a split second.", traits: ["speed", "fast", "driver", "intense"] },
    { name: "Infinite Recharge", year: 2021, tagline: "Enduring Spirit", desc: "Even when resources seem low, you find a way to keep going. You're resilient, resourceful, and value conservation of effort — but never give up.", traits: ["resilient", "healthy", "balanced", "reliable"] },
    { name: "INFINITE RECHARGE", year: 2020, tagline: "Unfinished Symphony", desc: "You appreciate plans even when they get interrupted. Adaptability and grace under pressure are your strengths; you roll with the punches.", traits: ["adaptable", "calm", "gracious", "prepared"] },
    { name: "DESTINATION: DEEP SPACE", year: 2019, tagline: "Voyager of Ideas", desc: "You're an explorer at heart, always looking beyond the horizon. Complex problems with many layers are your favorite playground.", traits: ["exploration", "tech-savvy", "futuristic", "innovative"] },
    { name: "FIRST POWER UP", year: 2018, tagline: "Retro Gamer Spirit", desc: "You blend classic principles with modern twists. A nostalgic soul who loves a good challenge and believes in the power of teamwork to beat any boss level.", traits: ["team-player", "playful", "classic", "spirited"] },
    { name: "FIRST STEAMWORKS", year: 2017, tagline: "Steampunk Visionary", desc: "You appreciate the beauty of mechanics and the elegance of steam-age engineering. Creative, hands-on, and a little whimsical.", traits: ["hands-on", "creative", "engineer", "dreamer"] },
    { name: "FIRST STRONGHOLD", year: 2016, tagline: "Fortress of Determination", desc: "You're a defender and a strategist. You believe in building strong foundations, both in robots and in character.", traits: ["strategic", "sturdy", "disciplined", "rule-follower"] },
    { name: "RECYCLE RUSH", year: 2015, tagline: "Eco-Warrior Innovator", desc: "You see value in what others discard. Creative reuse and efficient design are your superpowers. Practical and environmentally conscious.", traits: ["pragmatic", "collector", "organized", "responsible"] },
    { name: "AERIAL ASSIST", year: 2014, tagline: "Passing the Torch", desc: "Teamwork and assists define your style. You're a natural mentor and connector, believing that shared success is the best victory.", traits: ["collaborative", "connector", "mentor", "sharing"] },
    { name: "ULTIMATE ASCENT", year: 2013, tagline: "Aim for the Top", desc: "You're a climber, always looking to reach new heights. Ambitious and goal-oriented, you inspire others with your vision.", traits: ["climber", "ambitious", "assertive", "growth"] },
    { name: "Rebound Rumble", year: 2012, tagline: "Bouncing Back Stronger", desc: "You're at your best when the pressure is on. Quick to recover from mistakes and lethal with a second chance.", traits: ["resilient", "competitive", "shooter", "fast"] },
    { name: "LOGO MOTION", year: 2011, tagline: "Patterns of Genius", desc: "You think in systems and sequences. Clever manipulation of the environment is your trademark — you'd hang those inflated shapes with finesse.", traits: ["analytical", "innovative", "strategic", "perfectionist"] },
    { name: "BREAKAWAY", year: 2010, tagline: "Breaking the Mold", desc: "You don't follow the crowd; you start your own path. Independent and bold, you love games that require aggressive tactics.", traits: ["assertive", "fierce", "ambitious", "driver"] },
    { name: "LUNACY", year: 2009, tagline: "Out of This World", desc: "You're quirky, unconventional, and delightfully odd. Low-friction environments don't scare you; they inspire you to think differently.", traits: ["creative", "playful", "dreamer", "exploration"] },
    { name: "FIRST Overdrive", year: 2008, tagline: "Full Speed Ahead", desc: "Speed and raw power are your love language. You thrive on high-octane, fast-paced challenges.", traits: ["speed", "energetic", "passionate", "flashy"] },
    { name: "Rack 'N' Roll", year: 2007, tagline: "Rhythm of the Build", desc: "You have a methodical yet groovy approach to problems. Steady and consistent, you rock the fundamentals.", traits: ["disciplined", "thorough", "classic", "reliable"] },
    { name: "Aim High", year: 2006, tagline: "Precision Visionary", desc: "You set lofty goals and have the focus to achieve them. Accuracy and excellence are your standards.", traits: ["shooter", "ambitious", "perfectionist", "inspired"] },
    { name: "Triple Play", year: 2005, tagline: "Threefold Mastery", desc: "You juggle multiple tasks with ease and believe in the power of threes: design, build, compete. Jack-of-all-trades.", traits: ["balanced", "adaptable", "practical", "collaborative"] },
    { name: "FIRST Frenzy", year: 2004, tagline: "Beautiful Chaos", desc: "You thrive in chaotic environments and find joy in the madness of competition. High energy, high reward.", traits: ["intense", "energetic", "competitive", "passionate"] },
    { name: "Stack Attack", year: 2003, tagline: "Builder of Empires", desc: "You're a foundational thinker, meticulously stacking skills and parts to create something greater than the sum.", traits: ["engineer", "organized", "pragmatic", "detail"] },
    { name: "Zone Zeal", year: 2002, tagline: "Zonal Strategist", desc: "You excel at positional play and area control. Patient, methodical, and always thinking two steps ahead.", traits: ["strategic", "patient", "analytical", "rule-follower"] },
    { name: "Diabolical Dynamics", year: 2001, tagline: "Mischievous Innovator", desc: "You have a playful, slightly wicked sense of creativity. You love surprising opponents with clever tricks.", traits: ["creative", "playful", "innovative", "dreamer"] },
    { name: "Co-opertition FIRST", year: 2000, tagline: "Pioneer of Teamwork", desc: "You defined the original spirit of 'coopetition.' Collaborative by nature, you believe lifting others lifts yourself.", traits: ["collaborative", "community", "kind", "sharing"] }
];

// ---- State ----
let currentQuestion = 0;
let answers = [];
let currentSeason = null;

const app = document.getElementById('app');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const qText = document.getElementById('q-text');
const qNumber = document.getElementById('q-number');
const optionsContainer = document.getElementById('options-container');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');
const btnBack = document.getElementById('btn-back');
const navHint = document.getElementById('nav-hint');

const resultYear = document.getElementById('result-year');
const resultName = document.getElementById('result-name');
const resultTagline = document.getElementById('result-tagline');
const resultDesc = document.getElementById('result-desc');
const resultTraits = document.getElementById('result-traits');
const resultCard = document.getElementById('result-card');

const easterEggOverlay = document.getElementById('easter-egg-overlay');
const eeClose = document.getElementById('ee-close');
const easterEggZone = document.getElementById('easter-egg-zone');

const seasonInfoOverlay = document.getElementById('season-info-overlay');
const siClose = document.getElementById('si-close');
const siTitle = document.getElementById('si-title');
const siImage = document.getElementById('si-image');
const siLink = document.getElementById('si-link');

// ---- Screen Management ----
function showScreen(screen) {
    [startScreen, quizScreen, resultScreen].forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

// ---- Quiz Logic ----
function loadQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    currentQuestion = index;
    const q = questions[index];
    qText.textContent = q.text;
    qNumber.textContent = `Q${index + 1}`;
    progressText.textContent = `${index + 1} / ${questions.length}`;
    progressBar.style.width = `${((index + 1) / questions.length) * 100}%`;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${opt.letter}</span><span class="option-text">${opt.text}</span>`;
        btn.addEventListener('click', () => selectOption(index, i, opt.trait));
        optionsContainer.appendChild(btn);
    });

    if (answers[index] !== undefined) {
        const selectedIndex = questions[index].options.findIndex(o => o.trait === answers[index]);
        if (selectedIndex >= 0) {
            optionsContainer.children[selectedIndex].classList.add('selected');
        }
    }

    btnBack.disabled = (index === 0);
    navHint.textContent = answers[index] !== undefined ? 'You can go back or proceed.' : 'Select an option to continue';
}

function selectOption(qIndex, optionIndex, trait) {
    answers[qIndex] = trait;
    Array.from(optionsContainer.children).forEach((btn, i) => {
        btn.classList.toggle('selected', i === optionIndex);
    });
    navHint.textContent = 'Option selected. Moving to next question...';
    setTimeout(() => {
        if (qIndex + 1 < questions.length) {
            loadQuestion(qIndex + 1);
        } else {
            showResult();
        }
    }, 400);
}

function goBack() {
    if (currentQuestion > 0) {
        loadQuestion(currentQuestion - 1);
    }
}

// ---- Result Calculation ----
function calculateResult() {
    const traitCount = {};
    answers.forEach(trait => {
        traitCount[trait] = (traitCount[trait] || 0) + 1;
    });

    const userTopTraits = Object.entries(traitCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(e => e[0]);

    let bestSeason = seasonResults[0];
    let bestScore = -1;

    seasonResults.forEach(season => {
        let score = 0;
        season.traits.forEach(t => {
            if (userTopTraits.includes(t)) {
                score += traitCount[t] || 1;
            }
        });
        if (score > bestScore) {
            bestScore = score;
            bestSeason = season;
        }
    });

    return bestSeason;
}

function showResult() {
    const season = calculateResult();
    currentSeason = season;
    resultYear.textContent = season.year;
    resultName.textContent = season.name;
    resultTagline.textContent = season.tagline;
    resultDesc.textContent = season.desc;

    resultTraits.innerHTML = '';
    season.traits.forEach(t => {
        const tag = document.createElement('span');
        tag.className = 'trait-tag';
        const firstChar = t.charCodeAt(0) % 3;
        if (firstChar === 0) tag.classList.add('red-tag');
        else if (firstChar === 1) tag.classList.add('blue-tag');
        else tag.classList.add('white-tag');
        tag.textContent = '#' + t.replace(/-/g, ' ');
        resultTraits.appendChild(tag);
    });

    resultCard.classList.remove('easter-egg-glow');
    showScreen(resultScreen);
}

// ---- Season Info Modal Logic (修复图片路径) ----
function openSeasonInfo() {
    if (!currentSeason) return;
    const year = currentSeason.year;
    siTitle.textContent = `${currentSeason.name} (${year})`;
    
    // ✅ 使用相对路径
    siImage.src = `res/${year}.png`;
    siImage.alt = `${currentSeason.name} artwork`;
    
    // 图片加载失败时的后备显示
    siImage.onerror = function() {
        this.style.display = 'none';
        if (!document.getElementById('si-placeholder')) {
            const placeholder = document.createElement('div');
            placeholder.id = 'si-placeholder';
            placeholder.className = 'si-placeholder';
            placeholder.textContent = '🎨 Artwork coming soon';
            this.parentNode.appendChild(placeholder);
        }
    };
    siImage.onload = function() {
        this.style.display = 'block';
        const placeholder = document.getElementById('si-placeholder');
        if (placeholder) placeholder.remove();
    };
    
    siLink.href = `https://frc-events.firstinspires.org/${year}`;
    seasonInfoOverlay.classList.add('active');
}

function closeSeasonInfo() {
    seasonInfoOverlay.classList.remove('active');
}

// ---- Easter Egg Logic ----
let clickCount = 0;
let clickTimer = null;

easterEggZone.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 3) {
        easterEggOverlay.classList.add('active');
        clickCount = 0;
        if (clickTimer) clearTimeout(clickTimer);
    } else {
        if (clickTimer) clearTimeout(clickTimer);
        clickTimer = setTimeout(() => { clickCount = 0; }, 1500);
    }
});

let yearClickCount = 0;
let yearClickTimer = null;
resultYear.addEventListener('click', () => {
    yearClickCount++;
    if (yearClickCount === 5) {
        easterEggOverlay.classList.add('active');
        yearClickCount = 0;
        if (yearClickTimer) clearTimeout(yearClickTimer);
    } else {
        if (yearClickTimer) clearTimeout(yearClickTimer);
        yearClickTimer = setTimeout(() => { yearClickCount = 0; }, 2000);
    }
});

eeClose.addEventListener('click', () => {
    easterEggOverlay.classList.remove('active');
});

easterEggOverlay.addEventListener('click', (e) => {
    if (e.target === easterEggOverlay) {
        easterEggOverlay.classList.remove('active');
    }
});

siClose.addEventListener('click', closeSeasonInfo);
seasonInfoOverlay.addEventListener('click', (e) => {
    if (e.target === seasonInfoOverlay) {
        closeSeasonInfo();
    }
});

// ---- Button Events ----
document.getElementById('btn-start').addEventListener('click', () => {
    answers = new Array(questions.length).fill(undefined);
    currentQuestion = 0;
    currentSeason = null;
    loadQuestion(0);
    showScreen(quizScreen);
});

btnBack.addEventListener('click', goBack);

document.getElementById('btn-retake').addEventListener('click', () => {
    answers = new Array(questions.length).fill(undefined);
    currentQuestion = 0;
    currentSeason = null;
    loadQuestion(0);
    showScreen(quizScreen);
});

document.getElementById('btn-learn-more').addEventListener('click', openSeasonInfo);

// ---- Initialize ----
showScreen(startScreen);