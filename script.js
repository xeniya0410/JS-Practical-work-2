let hero = {
  name: prompt("Введите имя героя: "),
  age: Number(prompt("Введите ваш возраст: ")),
  hasSwordLicense: prompt("Есть ли у вас лицензия на меч? (true/false): ") === "true",
  hasArmor: prompt("Есть ли у вас броня? (true/false): ") === "true",
  powerLevel: Number(prompt("Введите уровень вашей силы (1-100): ")),

  canFight: function () {
    return this.age >= 18 && this.hasSwordLicense && this.powerLevel >= 30;
  },

  getBattleResult: function () {
    if (!this.canFight()) {
      return this.name + ", вы слишком слабы и не можете участвовать в бою!";
    }
    if (this.powerLevel > 70) {
      return "Поздравляем! Вы победили дракона!";
    } else {
      return "К сожалению, вы проиграли...";
    }
  },

  calculatePoints: function () {
    let points = this.powerLevel;
    if (this.hasSwordLicense) points += 20;
    if (this.hasArmor) points += 20;
    return points;
  },

  getTitle: function () {
    let points = this.calculatePoints();
    if (points >= 140) return "Легендарный герой";
    if (points >= 100) return "Могучий воин";
    if (points >= 70) return "Опытный боец";
    return "Новичок";
  }
};

if (hero.canFight()) {
  console.log(hero.name + ", вы допущены к бою с драконом!");
  console.log(hero.getBattleResult());
} else {
  console.log(hero.getBattleResult());
}

let heroPoints = hero.calculatePoints();
console.log("Ваши очки героя: " + heroPoints);
console.log("Ваш титул: " + hero.getTitle());
