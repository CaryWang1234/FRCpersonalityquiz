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

// ---- Retro Season Mapping (1992-1999) ----
const retroSeasonResults = [
    { name: "Maize Craze", year: 1992, tagline: "The Pioneer Spirit", desc: "You embody the roots of FIRST. Like the original 28 teams in that New Hampshire gymnasium, you value raw ingenuity, hands-on creativity, and the pure joy of building something from nothing. Corn, creativity, and community — that's your foundation.", traits: ["pioneer", "creative", "hands-on", "community"] },
    { name: "Rug Rage", year: 1993, tagline: "Raw Competition", desc: "You thrive in the heat of direct competition. Like teams wrestling for control on the mat, you're aggressive, determined, and never back down from a challenge. You believe in taking what you want through sheer force of will.", traits: ["competitive", "aggressive", "determined", "bold"] },
    { name: "Tower Power", year: 1994, tagline: "Reach New Heights", desc: "You're all about vertical ambition. Like stacking totes to the sky, you believe in building upward — both literally and metaphorically. Height is your playground, and the top is where you belong.", traits: ["ambitious", "strategic", "builder", "visionary"] },
    { name: "Ramp N' Roll", year: 1995, tagline: "Motion & Momentum", desc: "You understand the art of controlled chaos. Like navigating ramps and obstacles, you're adaptable, quick-thinking, and know how to turn momentum into victory. Movement is your superpower.", traits: ["adaptable", "quick", "dynamic", "resilient"] },
    { name: "Hexagon Havoc", year: 1996, tagline: "Geometric Genius", desc: "You see patterns where others see chaos. Like navigating hexagonal goals, you think in systems and angles. Strategic positioning and geometric precision are your trademarks.", traits: ["analytical", "strategic", "precise", "methodical"] },
    { name: "Toroid Terror", year: 1997, tagline: "Circular Mastery", desc: "You embrace complexity and aren't intimidated by unconventional challenges. Like handling toroids, you find beauty in the unusual and excel when others are confused by the shape of the game.", traits: ["innovative", "fearless", "creative", "unconventional"] },
    { name: "Ladder Logic", year: 1998, tagline: "Step by Step to Victory", desc: "You're a systematic thinker who believes in climbing one rung at a time. Methodical, patient, and logical — you know that every step upward brings you closer to the top.", traits: ["methodical", "patient", "logical", "disciplined"] },
    { name: "Double Trouble", year: 1999, tagline: "Twice the Challenge, Twice the Fun", desc: "You thrive when juggling multiple objectives. Like managing dual challenges, you're a master of multitasking and believe that complexity only makes victory sweeter.", traits: ["versatile", "multitasker", "energetic", "balanced"] }
];

// ---- Retro Quiz Questions (10 questions for 1992-1999 era) ----
const retroQuestions = [
    {
        text: "You're in a gymnasium with 27 other teams. What's your first thought?",
        options: [
            { letter: "A", text: "This is the beginning of something legendary.", trait: "pioneer" },
            { letter: "B", text: "I'm going to dominate this competition.", trait: "competitive" },
            { letter: "C", text: "Let's see what everyone else has built.", trait: "creative" },
            { letter: "D", text: "How can we all help each other succeed?", trait: "community" }
        ]
    },
    {
        text: "Your robot is made from scrap parts and duct tape. You feel:",
        options: [
            { letter: "A", text: "Proud — it's all about ingenuity.", trait: "hands-on" },
            { letter: "B", text: "Ready to prove that simple works.", trait: "determined" },
            { letter: "C", text: "Excited to iterate and improve.", trait: "innovative" },
            { letter: "D", text: "Grateful for whatever you could scrounge.", trait: "resilient" }
        ]
    },
    {
        text: "The game involves stacking objects high. Your strategy:",
        options: [
            { letter: "A", text: "Build the tallest, most stable tower.", trait: "builder" },
            { letter: "B", text: "Go fast and stack as many as possible.", trait: "aggressive" },
            { letter: "C", text: "Find the optimal height-to-speed ratio.", trait: "strategic" },
            { letter: "D", text: "Watch others and adapt mid-match.", trait: "adaptable" }
        ]
    },
    {
        text: "You're driving your robot up a ramp. What's your approach?",
        options: [
            { letter: "A", text: "Full speed — momentum is everything.", trait: "bold" },
            { letter: "B", text: "Careful and steady — don't tip over.", trait: "methodical" },
            { letter: "C", text: "Take the most creative line up.", trait: "creative" },
            { letter: "D", text: "Practice until it's flawless.", trait: "disciplined" }
        ]
    },
    {
        text: "The field has hexagonal goals. Your reaction:",
        options: [
            { letter: "A", text: "Love the geometric challenge.", trait: "analytical" },
            { letter: "B", text: "Immediately calculate the best angles.", trait: "precise" },
            { letter: "C", text: "Figure it out through trial and error.", trait: "dynamic" },
            { letter: "D", text: "This is weird but I'm here for it.", trait: "unconventional" }
        ]
    },
    {
        text: "Toroids (donut-shaped objects) are in play. You:",
        options: [
            { letter: "A", text: "Design a mechanism specifically for them.", trait: "innovative" },
            { letter: "B", text: "Embrace the weirdness and have fun.", trait: "fearless" },
            { letter: "C", text: "Stack them like pancakes.", trait: "hands-on" },
            { letter: "D", text: "Turn the challenge into an advantage.", trait: "strategic" }
        ]
    },
    {
        text: "Climbing a ladder is the key objective. You:",
        options: [
            { letter: "A", text: "Plan each rung carefully.", trait: "methodical" },
            { letter: "B", text: "Climb as fast as humanly possible.", trait: "aggressive" },
            { letter: "C", text: "Make sure the ladder is stable first.", trait: "logical" },
            { letter: "D", text: "Help your teammate climb too.", trait: "community" }
        ]
    },
    {
        text: "This year's game has TWO major challenges. You:",
        options: [
            { letter: "A", text: "Tackle both simultaneously — why not?", trait: "multitasker" },
            { letter: "B", text: "Focus on one, then dominate the other.", trait: "disciplined" },
            { letter: "C", text: "Find the synergy between them.", trait: "analytical" },
            { letter: "D", text: "Bring double the energy to both.", trait: "energetic" }
        ]
    },
    {
        text: "What's your philosophy on robot design in the early days?",
        options: [
            { letter: "A", text: "Simple, reliable, and gets the job done.", trait: "practical" },
            { letter: "B", text: "Push boundaries — be the first to try something new.", trait: "pioneer" },
            { letter: "C", text: "Make it tough enough to survive the chaos.", trait: "resilient" },
            { letter: "D", text: "Balance offense and defense perfectly.", trait: "balanced" }
        ]
    },
    {
        text: "Looking back at the 1990s FRC era, what resonates most?",
        options: [
            { letter: "A", text: "The raw, unfiltered creativity of it all.", trait: "creative" },
            { letter: "B", text: "How everyone was figuring it out together.", trait: "community" },
            { letter: "C", text: "The spirit of fearless experimentation.", trait: "fearless" },
            { letter: "D", text: "The foundation it laid for everything after.", trait: "visionary" }
        ]
    }
];

// ---- State ----
let currentQuestion = 0;
let answers = [];
let currentSeason = null;

// Retro Quiz State
let retroCurrentQuestion = 0;
let retroAnswers = [];
let retroCurrentSeason = null;

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

const easterEggZone = document.getElementById('easter-egg-zone');

const seasonInfoOverlay = document.getElementById('season-info-overlay');
const siClose = document.getElementById('si-close');
const siTitle = document.getElementById('si-title');
const siImage = document.getElementById('si-image');
const siLink = document.getElementById('si-link');

// Retro Quiz DOM Elements
const retroQuizScreen = document.getElementById('retro-quiz-screen');
const retroResultScreen = document.getElementById('retro-result-screen');
const retroQText = document.getElementById('retro-q-text');
const retroQNumber = document.getElementById('retro-q-number');
const retroOptionsContainer = document.getElementById('retro-options-container');
const retroProgressText = document.getElementById('retro-progress-text');
const retroProgressBar = document.getElementById('retro-progress-bar');
const retroBtnBack = document.getElementById('retro-btn-back');
const retroNavHint = document.getElementById('retro-nav-hint');
const retroResultYear = document.getElementById('retro-result-year');
const retroResultName = document.getElementById('retro-result-name');
const retroResultTagline = document.getElementById('retro-result-tagline');
const retroResultDesc = document.getElementById('retro-result-desc');
const retroResultTraits = document.getElementById('retro-result-traits');
const btnRetroBack = document.getElementById('btn-retro-back');

// Radar Chart DOM Elements
const radarCanvas = document.getElementById('radar-canvas');
const retroRadarCanvas = document.getElementById('retro-radar-canvas');

// ---- Screen Management ----
function showScreen(screen) {
    [startScreen, quizScreen, resultScreen, retroQuizScreen, retroResultScreen].forEach(s => s.classList.remove('active'));
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
function drawUserRadarChart(isRetro = false) {
    const canvas = isRetro ? retroRadarCanvas : radarCanvas;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 50;
    
    ctx.clearRect(0, 0, width, height);
    
    const quizQuestions = isRetro ? retroQuestions : questions;
    const quizAnswers = isRetro ? retroAnswers : answers;
    
    const traitScores = {};
    
    quizAnswers.forEach((selectedTrait) => {
        if (!selectedTrait) return;
        traitScores[selectedTrait] = (traitScores[selectedTrait] || 0) + 1;
    });
    
    const allTraits = Object.keys(traitScores).sort((a, b) => (traitScores[b] || 0) - (traitScores[a] || 0));
    const topTraits = allTraits.slice(0, 8);
    
    if (topTraits.length < 3) return;
    
    const maxScore = Math.max(...Object.values(traitScores));
    
    const numTraits = topTraits.length;
    const angleStep = (Math.PI * 2) / numTraits;
    const startAngle = -Math.PI / 2;
    
    const gridColor = isRetro ? 'rgba(255, 215, 0, 0.15)' : 'rgba(255, 255, 255, 0.1)';
    const axisColor = isRetro ? 'rgba(255, 215, 0, 0.3)' : 'rgba(255, 255, 255, 0.2)';
    const labelColor = isRetro ? '#ffd700' : '#e8e8f0';
    const fillColor = isRetro ? 'rgba(255, 215, 0, 0.25)' : 'rgba(227, 24, 55, 0.25)';
    const strokeColor = isRetro ? '#ffd700' : '#e31837';
    
    for (let level = 1; level <= 5; level++) {
        const levelRadius = (radius / 5) * level;
        ctx.beginPath();
        for (let i = 0; i <= numTraits; i++) {
            const angle = startAngle + angleStep * i;
            const x = centerX + Math.cos(angle) * levelRadius;
            const y = centerY + Math.sin(angle) * levelRadius;
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    for (let i = 0; i < numTraits; i++) {
        const angle = startAngle + angleStep * i;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = axisColor;
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    ctx.beginPath();
    const dataPoints = [];
    for (let i = 0; i <= numTraits; i++) {
        const traitIndex = i % numTraits;
        const trait = topTraits[traitIndex];
        const score = traitScores[trait] || 0;
        const percentage = maxScore > 0 ? score / maxScore : 0;
        const dataRadius = radius * Math.min(percentage, 1);
        const angle = startAngle + angleStep * traitIndex;
        const x = centerX + Math.cos(angle) * dataRadius;
        const y = centerY + Math.sin(angle) * dataRadius;
        dataPoints.push({ x, y });
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    dataPoints.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = strokeColor;
        ctx.fill();
        ctx.strokeStyle = isRetro ? '#1a1a0a' : '#0a0a14';
        ctx.lineWidth = 2;
        ctx.stroke();
    });
    
    ctx.font = 'bold 10px Inter, sans-serif';
    ctx.fillStyle = labelColor;
    
    for (let i = 0; i < numTraits; i++) {
        const angle = startAngle + angleStep * i;
        const labelRadius = radius * 0.85;
        let x = centerX + Math.cos(angle) * labelRadius;
        let y = centerY + Math.sin(angle) * labelRadius;
        
        if (Math.cos(angle) > 0.3) {
            ctx.textAlign = 'left';
            x += 8;
        } else if (Math.cos(angle) < -0.3) {
            ctx.textAlign = 'right';
            x -= 8;
        } else {
            ctx.textAlign = 'center';
        }
        
        if (Math.sin(angle) < -0.3) {
            ctx.textBaseline = 'bottom';
            y -= 8;
        } else if (Math.sin(angle) > 0.3) {
            ctx.textBaseline = 'top';
            y += 8;
        } else {
            ctx.textBaseline = 'middle';
        }
        
        const traitLabel = topTraits[i].replace(/-/g, ' ');
        ctx.fillText(traitLabel, x, y);
    }
}

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

    drawUserRadarChart(false);

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

// ---- Retro Quiz Logic ----
function startRetroQuiz() {
    retroAnswers = new Array(retroQuestions.length).fill(undefined);
    retroCurrentQuestion = 0;
    retroCurrentSeason = null;
    loadRetroQuestion(0);
    showScreen(retroQuizScreen);
}

function loadRetroQuestion(index) {
    if (index < 0 || index >= retroQuestions.length) return;
    retroCurrentQuestion = index;
    const q = retroQuestions[index];
    retroQText.textContent = q.text;
    retroQNumber.textContent = `Q${index + 1}`;
    retroProgressText.textContent = `${index + 1} / ${retroQuestions.length}`;
    retroProgressBar.style.width = `${((index + 1) / retroQuestions.length) * 100}%`;

    retroOptionsContainer.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${opt.letter}</span><span class="option-text">${opt.text}</span>`;
        btn.addEventListener('click', () => selectRetroOption(index, i, opt.trait));
        retroOptionsContainer.appendChild(btn);
    });

    if (retroAnswers[index] !== undefined) {
        const selectedIndex = retroQuestions[index].options.findIndex(o => o.trait === retroAnswers[index]);
        if (selectedIndex >= 0) {
            retroOptionsContainer.children[selectedIndex].classList.add('selected');
        }
    }

    retroBtnBack.disabled = (index === 0);
    retroNavHint.textContent = retroAnswers[index] !== undefined ? 'You can go back or proceed.' : 'Select an option to continue';
}

function selectRetroOption(qIndex, optionIndex, trait) {
    retroAnswers[qIndex] = trait;
    Array.from(retroOptionsContainer.children).forEach((btn, i) => {
        btn.classList.toggle('selected', i === optionIndex);
    });
    retroNavHint.textContent = 'Option selected. Moving to next question...';
    setTimeout(() => {
        if (qIndex + 1 < retroQuestions.length) {
            loadRetroQuestion(qIndex + 1);
        } else {
            showRetroResult();
        }
    }, 400);
}

function retroGoBack() {
    if (retroCurrentQuestion > 0) {
        loadRetroQuestion(retroCurrentQuestion - 1);
    }
}

function calculateRetroResult() {
    const traitCount = {};
    retroAnswers.forEach(trait => {
        traitCount[trait] = (traitCount[trait] || 0) + 1;
    });

    const userTopTraits = Object.entries(traitCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(e => e[0]);

    let bestSeason = retroSeasonResults[0];
    let bestScore = -1;

    retroSeasonResults.forEach(season => {
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

function showRetroResult() {
    const season = calculateRetroResult();
    retroCurrentSeason = season;
    retroResultYear.textContent = season.year;
    retroResultName.textContent = season.name;
    retroResultTagline.textContent = season.tagline;
    retroResultDesc.textContent = season.desc;

    retroResultTraits.innerHTML = '';
    season.traits.forEach((t, index) => {
        const tag = document.createElement('span');
        tag.className = 'retro-trait-tag';
        const colorClasses = ['yellow', 'orange', 'green'];
        tag.classList.add(colorClasses[index % 3]);
        tag.textContent = '#' + t.replace(/-/g, ' ');
        retroResultTraits.appendChild(tag);
    });

    drawUserRadarChart(true);

    showScreen(retroResultScreen);
}

function backToMainQuiz() {
    showScreen(resultScreen);
}

// ---- Easter Egg Logic ----
let clickCount = 0;
let clickTimer = null;

easterEggZone.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 3) {
        startRetroQuiz();
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
        startRetroQuiz();
        yearClickCount = 0;
        if (yearClickTimer) clearTimeout(yearClickTimer);
    } else {
        if (yearClickTimer) clearTimeout(yearClickTimer);
        yearClickTimer = setTimeout(() => { yearClickCount = 0; }, 2000);
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

// Retro Quiz Events
retroBtnBack.addEventListener('click', retroGoBack);
btnRetroBack.addEventListener('click', backToMainQuiz);

// ---- Initialize ----
showScreen(startScreen);