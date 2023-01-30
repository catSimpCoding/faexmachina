export class playerClass {
    
    constructor() {

        //used as base mods to dice rolls to begin with
        this.agility = 0
        this.knowledge = 0
        this.presence = 0
        this.strength = 0
        this.toughness = 0
        this.hp = 8
        this.glitches = 0
        this.wpn = 12
        this.arm = 3
    }


    present() {
        return {
            'Agility: ':this.agility,
            'Knowledge: ':this.knowledge,
            'Presence:': this.presence,
            'Strength: ': this.strength,
            'Toughness: ': this.toughness,
            'HP :': this.hp,
            'Glitches: ':this.glitches,
            'Starting armor: ': this.arm,
            'Starting weapon: ': this.wpn

        }
    }



}