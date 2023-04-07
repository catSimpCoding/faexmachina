export class playerClass {
    
    constructor() {

        //used as base mods to dice rolls to begin with
        this.agility = 0
        this.knowledge = 0
        this.presence = 0
        this.strength = 0
        this.toughness = 0
        this.hp = 8
        this.glitches = 2
        this.wpn = 12
        this.arm = 3
    }


    present(ability = false, special = false) {

        let stats = {
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

        if (ability) {
            stats[this.tag] = ability
        }
        if (special != false) {
            stats['Special: '] = special
        }

        return stats

    }


}

export class nanomancer extends playerClass{
    constructor() {
        super()
        this.presence = 2
        this.toughness = -2
        this.wpn = 6
        this.arm = 2
        this.hp = 4

        this.abilites = [
            "A strange leaf-looking knife.Deals d4 damage, and victims have to test Toughness or bleed 1 HP for d6 rounds." ,
            "Milkwhite eyes that see through lies. Once per day, Once per day, when you believe you've been when you believe you've been lied to, test Presence DR8. lied to, test Presence DR8. On a success, you can tell whenever the target lies for the rest of the day",
            "Burnt orange, stone-like skin. -d4 damage taken, not subject to being reduced on a defense fumble. Instead, you take an additional d8 damage as part of your skin is ripped off",
            " A second mouth where your navel used to be. Any food or drugs consumed with your navel-mouth are twice as effective.",
            "An elongated, pointed and semi-translucent skull. Your brain shines underneath, emitting light like that of a candle.",
            "Scales cover most of your body. Any roll to resist cold, heat or radiation is -4DR"
        ]

        this.tag = "You have also been blessed with: "
    }

    

}

export class hacker extends playerClass{
    constructor() {
        super()
        this.knowledge = 2
        this.strength = -1
        this.toughness = -1
        this.hp = 6
        this.wpn = 8
        this.arm = 2
        this.abilites = [
            '[Borgtrigga-0.5] Provoke a Cy-rage test for one nearby target.',
            '[Law1] Parallaxes imagery around you, making you invisible to all tech (except true AI) for 10 minutes.',
            '[BoomBoom]  d4 nearby simple devices (lamps, monitors, cameras, etc.) explode. d6 damage to up to d4 targets.',
            '[CopySwappy]  For d10 rounds, all tech will mistake you for another person within 30m and vice versa.',
            '[tERROR]  Target’s RCD renders subliminal, personalized nightmare imagery that distorts reality. Test Presence DR14 or unable to act for d4 rounds.',
            '[DvG-sling] Deal damage to a cybered target or drone/vehicle/mech based on their size. Dog-sized targets take d6 damage, human d10, car 2d8, and larger targets take 2d12.' 
        ]
        this.tag = 'You built an App :'
    }
}


export class corpKiller extends playerClass{
    constructor() {
        super()
        this.knowledge = -1
        this.presence = -1
        this.toughness = 2
        this.arm = 4
        this.abilites = [
            "Old-school heavy machine gun. d12a damage, but breaks down after a damage roll of 1. You can fix it if you get 10 minutes of quiet time",
            "Prototype Smart™ assault rifle (d10a damage). Around-the-corner shooting, camera sight, grenade launcher, the works",
            "Toughness+5 hand grenades and 5 flashbangs. You throw grenades with -2DR.",
            "Heavy laser cannon. d12 damage, Presence DR14 against people, bots and animals. 3d12 damage, Presence DR10 against vehicles, turrets or similar targets.",
            "Crowd-control air cannon. d6 damage, can hit up to d3 targets close to each other",
            "Incendiary shotgun. d10 damage and test Agility DR12 or flammable materials are ignited for +d6 damage the following round"
        ]
        this.tag = "You took something from your employer when you left the force: "
    }
}

export class gearhead extends playerClass{
    constructor() {
        super()
        this.knowledge = 2
        this.presence = -2
        this.glitches = 4
        this.abilites = [
            "A SEMI-AUTONOMOUS QUAD-BOT with tools including a health scanner and torch. Loyal but with an attitude. Bites for d4 damage, Knowledge+d8 HP and -d2 Armor" ,
            "A FLYING DRONE . Follows basic commands. Knowledge+d12 HP, −d6 Armor, and an assault rifle (d8a)",
            "THREE FLY- SIZED SURVEILL ANCE DRONES equipped with a camera, 3D scanner and heat sensor respectively. Incredibly fragile. An expected corporate espionage tool",
            "A PROTOTYPE CRAWLER DRONE with a laser turret (d12a). Knowledge+d10 HP, -d6 Armor. Can follow advanced commands. Needs a hard reboot after dealing max damage",
            "AN ARMORED VAN.Five seats and lined with junk. Has a smuggler’s hatch underneath it all. Once a day, test Knowledge DR8 to find the spare part you need to fix any broken tech",
            "A WALKING WEAPONS PLATFORM. Nigh-indestructible, large enough to ride and janky as hell. Anti-materiel battery (2d10) destroys most walls, doors and vehicles with a shot. Has a 2-in-6 chance of breaking down after firing. Takes d4 hours to repair"
        ]
        this.tag = 'You pilot: '
    }
}

export class slasher extends playerClass{
    constructor() {
        super()
        this.presence = 1
        this.strength = 1
        this.knowledge = -2
        this.glitches = 3
        this.hp = 10
        this.special = ''
        this.abilites = [
            'Ancient blade (d8) that has claimed 1,000 souls. Or so you say. If you are the first to strike in combat, you deal double damage',
            "Steelcutter chainsaw (d8). Absolutely not made for combat. When hitting for maximum damage, it gets stuck for d3 rounds, dealing damage automatically as long as it remains there",
            "Filament zweihänder (d10) that makes everyone around you nervous. Crits hit with such a force that your target is thrown up in the air, making them an easy target (-2DR) for anyone else",
            "Wire-wrapped baseball bat (d8) hooked up to a battery. You can supercharge it, dealing +d4 damage to your target and to yourself",
            "Dual logans (d8) that makes that sound when you pop 'em out. Once per fight, you can surprise a vicitm by popping out feet claws as well, attacking at DR8",
            "GodDAMN flail (d8). Spiked. Absolutely medieval. Crumples and shreds enemy armor a tier when you hit for 6+ damage"
        ]

        this.tag = "Your trenchcoat hides most of your: "
    }
}

export class ganger extends playerClass{
    constructor(){
        super()
        this.strength = -2
        this.hp = 6
        this.glitches = 3
        this.wpn = 6
        this.arm = 2
        this.special = 'Stealthy - -2DR Presence and Agility tests'
        this.abilites = [
            "HITS. When attacking from surprise, test Agility DR10. On a success, you hit once with a melee weapon, dealing normal damage +3",
            "BRAWLS. Test Agility DR14 to sucker punch an opponent in melee. Deal normal damage and give all allies -2DR on their next attack against the same enemy",
            "BnE. You have a talent for opening doors and getting inside buildings. Test Agility DR10 to pick any mechanical lock or Knowledge DR10 for any electronic lock. You begin with toolsets for borth mechanical and electronic lockpicking",
            "FENCING. You know potential buyers for almost anything. Once per day, you can test Presence DR12 to remember the mane of a person in Cy who might be willing and able to buy whatever illicit goods have fallen into your hands",
            "CLEANUP. You know how to clean up evidence from a crime scene. Start with two DRNA bomvs and a large bottle of acid",
            "ASSAULTS. You always liked it old school: both hands raised, running straight at the enemy. Whatever weapon you begin with, you start with one for each hand. You can use it to make a second attack each round at DR14"
        ]
        this.tag = "Your specialty was: "
    }
}
