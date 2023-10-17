class Character{
    constructor(name, type, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;

        if(name.length < 2) {
            throw new Error ('too short name');
        } else if (name.length > 10) {
            throw new Error('too long name');
        }

        levelUp() {
            this.level++;
            this.health = 100;
            (this.attack / 100) * 0.2;
            (this.defence / 100) * 0.2;
        }
    };
};

const bowerman = new Character('name', 'Bowman', this.health, this.level, 25, 25);
const swordsman = new Character('name', 'Swordsman', this.health, this.level, 40, 10);
const magician = new Character('name', 'Magician', this.health, this.level, 10, 40);
const daemon = new Character('name', 'Daemon', this.health, this.level, 10, 40);
const undead = new Character('', 'Undead', this.health, this.level, 25, 25);
const zombie = new Character('', 'Zombie', this.health, this.level, 40, 10);
const deamon = new Character('', 'Deamon', this.health, this.level, 10, 40);