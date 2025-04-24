const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },

  getInfo() {
    return `Username: ${this.username}, Playtime: ${this.playTime}`;
  }
};

// Перевірка
const profile = {
    username: "Jacob",
  playTime: 300,
};