export default class Character {
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
        } else if(typeof name !== 'string') {
            throw new Error('Name is not string');
        } else if(typeof type !== 'string') {
            throw new Error('Type is not string');
        }
  
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
  
    levelUp() {
        if(this.health <= 0) {
            throw new Error('You are dead :(')
        } else{
            this.level ++;
            this.attack = Math.ceil(this.attack * 1.2);
            this.defence = Math.ceil(this.defence * 1.2);
            this.health = 100;
        }
    }
  
    damage(points) {
        if(this.health >= 0) {
            this.health -= points * (1 - this.defence / 100)
        }
    }
}