import Character from "../character";
import Bowerman from "../bowerman";
import Daemon from "../daemon";
import Zombie from "../zombie";
import Undead from "../undead";
import Magician from "../magician";

test("test unvalid type", () => {
  expect(() => {
    const player1 = new Character("alex", "player");
    console.log(player1);
  }).toThrow("Невалидный тип игрока");
});

test("test Undead", () => {
  const player1 = new Undead("stiv");
  player1.damage(1000);
  expect(() => {
    player1.levelup();
  }).toThrow("Нельзя повысить левел умершего");
});

test("test Bowerman", () => {
  const player1 = new Bowerman("stiv");
  player1.levelup();
  expect(player1.attack).toBe(30);
  player1.levelup();
  expect(player1.attack).toBe(36);
});

test("test Daemon", () => {
  const player1 = new Daemon("stiv");
  player1.damage(100);
  expect(player1.health).toBe(40);
  player1.damage(100);
  expect(() => {
    player1.damage(100000);
  }).toThrow("Нельзя помочь умершему");
});

test("test Zombie", () => {
  const player1 = new Zombie("stiv");
  player1.levelup();
  expect(player1.health).toBe(100);
  expect(player1.attack).toBe(48);
  expect(player1.defence).toBe(12);
  player1.damage(10000);
  expect(() => {
    player1.levelup();
  }).toThrow("Нельзя повысить левел умершего");
});

test("test unvalid name", () => {
  expect(() => {
    const _player1 = new Undead("stivvvvvvvvvvvv");
    console.log(_player1);
  }).toThrow("Некорректная длина имени");
});

test("test Magician", () => {
  const player1 = new Magician("stiv");
  player1.levelup();
  player1.levelup();
  expect(player1.level).toBe(3);
});
