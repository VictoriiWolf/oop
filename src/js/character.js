export class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
  
        if (name.length < 2) {
            throw new Error('Too short name');
        } else if (name.length > 10) {
            throw new Error('Too long name');
        };
  
        switch (this.type) {
            case 'Bowman':
                break;
            case 'Swordsman':
                break;
            case 'Magician':
                break;
            case 'Undead':
                break;
            case 'Zombie':
                break;
            case 'Daemon':
                break;
  
            default:
                throw new Error('This type is not correct');
        }
    }
  }