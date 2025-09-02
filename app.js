function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        },
        specialAtackAvailable() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        playerAtack() {
            const atackValue = getRandomValue(5, 12);
            this.monsterHealth -= atackValue;
            this.monsterAtack();
            this.currentRound++;
            this.addLogMessage('player', 'attack', atackValue);
        },
        monsterAtack() {
            const atackValue = getRandomValue(8, 15);
            this.playerHealth -= atackValue;
            this.currentRound++;
            this.addLogMessage('monster', 'attack', atackValue);
        },
        specialAtack() {
            this.currentRound++;
            const atackValue = getRandomValue(10, 25);
            this.monsterHealth -= atackValue;
            this.monsterAtack();
            this.addLogMessage('player', 'special-attack', atackValue);
        },
        healplayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.monsterAtack();
            this.addLogMessage('player', 'heal', healValue);
        },
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = [];
        },
        surrender() {
            this.playerHealth = 0;
            this.winner = 'Monster wins';
        },
        addLogMessage(person, action, value) {
            this.logMessages.unshift({
                actionBy: person,
                actionType: action,
                actionValue: value
            });
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // draw
                this.winner = 'Drawn';
            } else if (value <= 0) {
                // player lost
                this.winner = 'Monster wins';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // monster lost
                this.winner = 'You win';
            }
        }
    }
});
app.mount("#game");