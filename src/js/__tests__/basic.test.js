import Character from "../character.js";
import bowman from "../bowman.js";
import daemon from "../daemon.js";
import magician from "../magician.js";
import swordsman from "../swordsman.js";
import undead from "../undead.js";
import zombie from "../zombie.js";
// import { at } from "core-js/core/string";

test('should show bowman correctly', () => {
    const bowman = new Character('User', 'Bowman', 100, 1, 25, 25);;
    const correctResult = {
            name: 'User',
            type: 'Bowman',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25
        }
    expect(bowman).toEqual(correctResult);
})

test('should show daemon correctly', () => {
    const daemon = new Character('User', 'Daemon', 100, 1, 10, 40);
    const correctResult = {
        name: 'User',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }
    expect(daemon).toEqual(correctResult);
})

test('should show magician correctly', () => {
    const magician = new Character('User', 'Magician', 100, 1, 10, 40);;
    const correctResult = {
        name: 'User',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }
    expect(magician).toEqual(correctResult);
})

test('should show swordsman correctly', () => {
    const swordsman = new Character('User', 'Swordsman', 100, 1, 40, 10);
    const correctResult = {
        name: 'User',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    expect(swordsman).toEqual(correctResult);
})

test('should show undead correctly', () => {
    const undead = new Character('User', 'Undead', 100, 1, 25, 25);
    const correctResult = {
        name: 'User',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
    expect(undead).toEqual(correctResult);
})

test('should show zombie correctly', () => {
    const zombie = new Character('User', 'Zombie', 100, 1, 40, 10);
    const correctResult = {
        name: 'User',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    expect(zombie).toEqual(correctResult);
})

test.each([
    ['U', 'Bowman'],
    ['Uuuuuuuuuuu', 'Bowman'],
])('should throw error if name is too short or too long', (name, type) => {
    expect(() => {new Character(name, type)}).toThrow(Error);  
})

test.each([
    ['User', 'Bowwnam'],
    ['User', 'Deamon'],
    ['User', 'Magisian'],
    ['User', 'Sworsman'],
    ['User', 'Unreal'],
    ['User', 'Crombie'],
])('should throw error if type is not correct', (name, type) => {
    expect(() => {new Character(name, type)}).toThrow(Error);
});

test.each([
    [123456, 'Bowman'],
    [undefined, 'Bowman'],
    [NaN, 'Bowman'],
    [null, 'Bowman'],
])('should throw error if name is not string', (name, type) => {
    expect(() => {new Character(name, type)}).toThrow(Error);
})

test.each([
    ['User', 123456],
    ['User', undefined],
    ['User', NaN],
    ['User', null],
])('should throw error if type is not string', (name, type) => {
    expect(() => {new Character(name, type)}).toThrow(Error);
})

test.each([
    ['User', 'Bowman', 0],
    ['User', 'Daemon', 0],
    ['User', 'Magician', 0],
    ['User', 'Swordsman', -10],
    ['User', 'Undead', -10],
    ['User', 'Zombie', -10],
])('should throw error if health of character lower or equal to 0', (name, type, health) => {
    const result = new Character(name, type);
    result.health = health;
    expect(() => result.levelUp()).toThrow(Error)
});

test.each([
    ['User', 'Bowman', 100, 1, 25, 25],
  ])('should add +1 to level, increase attack and defence up to 20% and make health = 100', (name, type, health, level, attack, defence) => {
    const result = new Character(name, type, health, level, attack, defence);
    result.levelUp();
  
    const correctResult = {
      name: 'User',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    }
    expect(result).toEqual(correctResult);
  });

  test.each([
    ['User', 'Bowman', 25, 25, 5],
  ])('should calculate total value of health after damage', (name, type, attack, defence, points) => {
    const result = new Character(name, type, health, 1, attack, defence);
    result.damage(points);

    const health = 100 - (points * (1 - defence / 100));
    const changedHealth = health;

    const correctResult = {
        name: 'User',
        type: 'Bowman',
        health: changedHealth,
        level: 1,
        attack: 25,
        defence: 25,
    }
    expect(result).toEqual(correctResult);
  });

  test.each([
    ['User', 'Bowman', 25, 25, 5], 
  ])('should stop game if health lower then zero', (name, type, attack, defence, points) => {
    const result = new Character(name, type, -1, 1, attack, defence);
    result.health = -1;
    result.damage(points);

    const correctResult = {
        name: 'User',
        type: 'Bowman',
        health: -1,
        level: 1,
        attack: attack,
        defence: defence,
    }
    expect(result).toEqual(correctResult);
  })