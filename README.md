# 🐉 Monster Slayer - Vue.js Game

A simple turn-based battle game built with Vue.js 3 using CDN for learning and practice purposes. Battle against a monster using various combat strategies!

## 🎮 Game Overview

Monster Slayer is a browser-based RPG combat game where you face off against a monster in turn-based battles. Use different abilities to defeat your opponent while managing your health strategically.

## ✨ Features

- **Turn-based Combat System**: Strategic gameplay with alternating turns
- **Health Management**: Monitor both player and monster health with visual health bars
- **Multiple Actions**:
  - **Attack**: Deal 5-12 damage to monster
  - **Special Attack**: Powerful attack dealing 10-25 damage (available every 3 rounds)
  - **Heal**: Restore 8-20 health points
  - **Surrender**: Give up the battle
- **Dynamic Health Bars**: Visual representation of remaining health
- **Game State Management**: Track rounds, winner, and battle progression
- **Responsive Design**: Clean, modern UI with CSS animations

## 🚀 Technologies Used

- **Vue.js 3** (via CDN)
- **Vanilla JavaScript**
- **HTML5**
- **CSS3**
- **Google Fonts** (Jost)

## 📁 Project Structure

```
monster-slayer-vue-basic/
├── index.html          # Main HTML file with game structure
├── app.js             # Vue.js application logic and game mechanics
├── styles.css         # Game styling and animations
└── README.md          # This file
```

## 🛠️ Setup & Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Quick Start
1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Start Playing** immediately!

### Alternative Setup (Local Server)
If you prefer to run on a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have it installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 🎯 How to Play

### Game Controls
- **ATTACK**: Basic attack against the monster
- **SPECIAL ATTACK**: Powerful attack (available every 3 rounds)
- **HEAL**: Restore your health (monster attacks after healing)
- **SURRENDER**: Give up the current battle

### Game Rules
1. **Health**: Both player and monster start with 100 HP
2. **Turns**: Each action counts as a turn
3. **Special Attack**: Available every 3rd round
4. **Healing**: Monster always attacks after you heal
5. **Victory**: Reduce monster health to 0 or below
6. **Defeat**: Your health reaches 0 or below

### Strategy Tips
- Use Special Attack when available for maximum damage
- Heal strategically when your health is low
- Monitor the round counter for Special Attack timing
- Balance offense and defense based on health levels

## 🔧 Customization

### Modifying Game Values
Edit `app.js` to adjust:
- Health points (default: 100)
- Damage ranges for attacks
- Healing amounts
- Special attack frequency

### Styling Changes
Modify `styles.css` to customize:
- Colors and themes
- Button styles
- Health bar appearance
- Layout and spacing

## 📚 Learning Objectives

This project demonstrates:
- **Vue.js 3 Composition API** concepts
- **Reactive data** and computed properties
- **Event handling** and user interactions
- **Conditional rendering** with `v-if`
- **Dynamic styling** with `:style` binding
- **Watchers** for reactive state changes
- **Component lifecycle** management

## 🌟 Future Enhancements

Potential improvements for learning:
- Add sound effects and animations
- Implement different monster types
- Add inventory and equipment system
- Create multiple difficulty levels
- Add save/load game functionality
- Implement multiplayer features

## 🤝 Contributing

This is a learning project, but feel free to:
- Fork the repository
- Experiment with new features
- Improve the code structure
- Add new game mechanics
- Enhance the UI/UX

## 📄 License

This project is created for educational purposes. Feel free to use, modify, and learn from it!

## 🙏 Acknowledgments

- Built with Vue.js 3 for learning purposes
- Inspired by classic RPG combat systems
- Designed for Vue.js beginners and intermediate developers

---

**Happy Coding! 🎮✨**

*Practice makes perfect - keep building awesome projects with Vue.js!*
