function creatHeros(name, level, emoji, attackName) {
  const hero = {};

  hero.name = name;
  hero.level = level;
  hero.emoji = emoji;
  hero.attackName = attackName;

  hero.attack = function () {
    return `${this.name}, came here to save you with ${this.attackName}!`;
  };

  return hero;
}

const heros = [
  creatHeros("Spider-Man", 10, "🕷️", "Spider web"),
  creatHeros("Gambie", 7, "🂲", "Predict attack")
];

console.log(heros);
