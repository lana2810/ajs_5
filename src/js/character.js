export default class Character {
  constructor(name, type) {
    const availableType = [
      "Bowman",
      "Swordsman",
      "Magician",
      "Daemon",
      "Undead",
      "Zombie",
    ];
    if (!availableType.includes(type)) {
      throw new Error("Невалидный тип игрока");
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error("Некорректная длина имени");
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
  levelup() {
    if (this.health === 0 || this.health < 0) {
      throw new Error("Нельзя повысить левел умершего");
    }
    this.level++;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }
  damage(points) {
    if (this.health < 0 || this.health === 0) {
      throw new Error("Нельзя помочь умершему");
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
