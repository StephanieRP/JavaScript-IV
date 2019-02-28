/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

  class GameObject {
      constructor(attr) {
        this.createdAt = attr.createdAt;
        this.name = attr.name;
        this.dimensions = attr.dimensions;
      }
      destroy() {
        return `${this.name} was removed from the game.`
      }
  }
  

  class CharacterStats extends GameObject {
      constructor(attrCharacter) {
        super(attrCharacter)
        this.healthPoints = attrCharacter.healthPoints;
      }
      takeDamage() {
        return `${this.name} took damage.`
      }
  }

  class Humanoid extends CharacterStats {
    constructor(attrHumanoid) {
        super(attrHumanoid)
    this.team = attrHumanoid.team;
    this.weapons = attrHumanoid.weapons;
    this.language = attrHumanoid.language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`
      }
  }
   
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama'
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    

    // Stretch 

    class Villain extends Humanoid{
        constructor(attrVillain){
            super(attrVillain);
            this.special_skill = attrVillain.special_skill;
        }
        villainWinner() {
            theHero.healthPoints = 0;
            return `The Hero, ${theHero.name}, has ${theHero.healthPoints} points. ${this.name} is the winner!! he world is doomed!!!`
          }
    }

    class Hero extends Humanoid{
        constructor(attrHero){
            super(attrHero);
        }
        heroWinner () {
            theVillain.healthPoints = 0;
            return `The Villain, ${theVillain.name}, has ${theVillain.healthPoints} points. ${this.name} is the winner!! The world is saved!!!`
          }
          
    }

    
    
    //// Hero and Villain Objects: 
    
    
      const theVillain = new Villain({
        createdAt: new Date(),
        dimensions: {
          length: 5,
          width: 2,
          height: 5,
        },
        healthPoints: 1000,
        name: 'World Ruler',
        team: 'What\'s a team?',
        weapons: [
          'Giant Hammer',
          'Bare Fist',
        ],
        language: 'Fire Dagger',
      });
    
      const theHero = new Hero({
        createdAt: new Date(),
        dimensions: {
          length: 4,
          width: 3,
          height: 6,
        },
        healthPoints: 1000,
        name: 'Helper',
        team: 'Hero\'s Only',
        weapons: [
          'Heavy Sword',
          'Giant Shield',
        ],
        language: 'Whisper',
      });

      console.log(theVillain.createdAt); 
      console.log(theHero.dimensions); 
      console.log(theVillain.healthPoints); 
      console.log(theHero.name);
      console.log(theHero.team);
      console.log(theVillain.team);
      console.log(theVillain.weapons); 
      console.log(theVillain.language);
      console.log(theVillain.greet()); 
      console.log(theVillain.takeDamage());
      console.log(theHero.heroWinner());