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
    };

    levelUp(health, level, attack, defence) {
        if(this.health !== 0) {
        this.level++;
        this.health = 100;
        (this.attack / 100) * 0.2;
        (this.defence / 100) * 0.2;
        } else {
            throw new Error('you are dead :(')
        }
    };
    
    damage(points) {
        if(this.health !== 0) {
            this.health -= points * (1 - this.defence / 100)
        }
    };
  }