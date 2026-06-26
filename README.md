# 🏆 Which FRC Season Are You? — Personality Quiz

An entertainment-style personality quiz built for the **FIRST Robotics Competition (FRC)** community. Answer 20 questions with robotics-themed scenarios to find out which FRC season (2000–2026) best matches your personality. Includes a hidden 1992 easter egg for true pioneers.

**Made by team FRC11019 Xplore** 🧡

![Screenshot](res/screenshot.png) *(optional, add your own screenshot)*

---

## ✨ Features

- 🎨 **Deep-space UI** with red, white, and blue accents — like a futuristic FRC dashboard.
- 🧠 **20 personality questions** inspired by FRC culture: pits, robots, strategy, teamwork, and more.
- 📊 **Dynamic result generation** based on trait matching — you get a unique season from 2000 to 2026.
- 🔗 **Learn More** button opens a modal with official season artwork and a link to the official FRC events page (e.g., `https://frc-events.firstinspires.org/2026`).
- 🥚 **Easter egg** — Discover the hidden **1992 "Maize Craze"** season (the very first FRC).
- 📱 Fully responsive and works offline (just a static site).
- 🇺🇸 All English content, easy to share internationally.

---

## 🚀 How to Run

1. **Download or clone the repository**.
2. Open `index.html` in any modern web browser.
3. Click **“Begin the Quiz”** and answer all questions.
4. View your result and click **“Learn About This Season”** for artwork and the official season page.

> No build tools or installation required. All assets are plain HTML, CSS, and JavaScript.
Or visit the website https://carywang1234.github.io/FRCpersonalityquiz/

---

## 📁 Project Structure

├── index.html # Main page (start, quiz, result screens)
├── style.css # All styling, responsive layout
├── script.js # Quiz logic, season matching, modals, easter eggs
├── res/ # Season artwork images (optional but recommended)
│ ├── 2026.png
│ ├── 2025.png
│ ├── ...
│ └── 2000.png
└── README.md

### Image Guidelines

- Season artwork files should be placed inside the `res/` folder.
- File naming: `YYYY.png` (e.g., `2024.png`).
- If an image is missing, the modal will gracefully show a placeholder.
- Images are displayed on a **light background** (suitable for transparent PNGs).

---

## 🧪 How It Works

Each of the 20 questions has four options, each assigned a **personality trait** (e.g., `strategic`, `collaborative`, `energetic`). After the quiz, the script:

1. Counts how many times each trait was chosen.
2. Compares your top traits with each FRC season’s “trait signature”.
3. Returns the season with the highest similarity score.

Seasons from 2000 to 2026 are covered. The **1992 Maize Craze** season is only shown through an easter egg (click the hidden corner or rapidly click the result year).

---

## 🥚 Easter Egg

Two ways to reveal the hidden 1992 season:

- **Result screen**: Click the transparent circular zone in the bottom-right corner 3 times quickly (within 1.5 seconds).
- **Year badge**: Rapidly click the large year number on the result card 5 times (within 2 seconds).

The easter egg modal shows a special description of the original 1992 FRC season.

---

## 🙌 Credits

- **Quiz concept, design, and development** by team **FRC11019 Xplore**.
- Built with ❤️ for the FIRST community.
- Season artwork sourced from official FIRST resources (used for educational & entertainment purposes).

---

## 📄 License

This project is shared under the [MIT License](LICENSE). Feel free to fork, remix, and share with your team!