import { diceRoller, tableRoller } from "./funcs.js";


export let attributeTable = [
    -3,-3,-3,-3,-3, //1-4 
    -2,-2,          //5-6
    -1,-1,          //7-8
    0,0,0,0,        //9-12
    +1,+1,          //13-14
    +2,+2,          //15-16
    +3,+3,+3,+3,+3  //17-20
]

export let cyberTable = {
    1: 'Retracting cyberclaws',
    2: 'Mule pocket',
    3: 'Subdermal Shockers',
    4: 'Autocamo',
    5:'Additional joints',
    6: 'Buzzeyes',
    7: 'Strangler',
    8: 'Skinhard',
    9: 'Deserter fangs',
    10: 'SmartJack',
    11: 'Muscle-ups',
    12: 'PulseWires',
    13: 'BodyGun',
    14: 'Taurs',
    15: 'Sonic blaster',
    16: 'Handy bot',
    17: 'Smarthair',
    18: 'Skinslot',
    19: 'Skeleplating',
    20: 'Brainbox'
}


export let gearTable = {
1:'Mirrorshades',
2: 'CWPC Metro card, d8 trips left.',
3 :'Hangover.',
4: 'Pack of realTobacco™ smokes.',
5: `${diceRoller(4,1,1)} flashbangs, test Toughness DR14 or +4DR on everything for d4 rounds.`,
6: `${diceRoller(4)} hand grenades,d6 damage to up to d3 targets.`,
7: 'Old-school motorcycle. Fuel is hard to come by. ',
8: 'Stolen taxi. Faked or removed transponders. May trigger alarms when entering high-sec areas.'

}

export let gearTable2 = {
    1: 'Paracord, 30m.',
    2: `Micro torch cutter, power for ${diceRoller(4)} uses.`,
    3: 'Bio/ID scanner, can track a person within 50m.',
    4: 'Breathing mask,provides oxygen in gas or underwater.',
    5: 'Collapsible ladder, 5m.',
    6 :`First aid kit, ${3} uses. Stops bleeding/infection and heals d6 HP`,
    7 :'Crowbar, d4 damage.',
    8: 'Superlube.',
    9: 'Grappling-hook crossbow, d4 damage ', 
    10: 'Small bottle of pulverized acid.',
    11 :'Crime scene kit.',
    12:  `${tableRoller(cyberTable, 10)}` //random cybertech, ref other table
}

export let gearTable3 = {
1 : `Red-juice stimjector, ${diceRoller(4)} doses. Heals d10 HP.`,
2: `Adrenachrome_HST, ${diceRoller(3)} doses. Heals d6 HP, +1 on all abilities for d6 rounds, then -1 until rest.` ,
3: 'Drone suit. Slow but quiet flight. Attack and defense tests are +4DR while flying.',
4: `Small but jailbroken Robo-K9. ${diceRoller(6,1,2)} HP, bite d4, only obeys you*`, //d6+2
5: 'Tiny surveillance drone, 300m range.',
6: 'Optic camo suit.' ,
7: `Noisemaker. Floods 20m area with fake data for ${diceRoller(4)} minutes, making remote communication and surveillance impossible.`, 
8: 'Fake ID. Good enough to pass a random check, might not work if they are looking for you.' ,
9: 'Visionvisor.Zoom, camera, heat/night vision, ultrasound.' ,
10: `${tableRoller(cyberTable, 10)}`,
11: `Cyberdeck with d3 slots and 2 random Apps.` , //roller
12: `A random Nano power.` //roller
}

export let armorTable = [
    'No armor',
    'StyleGuard T1 - Looks just like clothes!',
    'Rough T2 - Heavy jacket or kevlar',
    'SmartWear T2 - Autoinjector fires Adrenachrome_HST if wearer is Battered ',
    'Combat Armor T3 - Autoinjector fires Adrenachrome_HST if wearer is Battered. +2DR Agility (not Defense)',
    'EndGame-Class ExoSuit T4 - All the goodies.'
]

export let weaponTable = [
    'Absolute trash - d3',
    'Machete - d6',
    '(too many) throwing knives - d4, two attacks/round',
    'Ancient revolver - d8',
    'SmartGun - d6a, d10a with SmartJack',
    'Two small SMGs - d6a, only autofire',
    'Shotgun - d8',
    'Monosword - d8',
    'Assault Rifle - d8a',
    'Assault Rifle with Grenade launcher - d8a / d6 to d3 targets',
    'Pulse Rifle - d10a',
    'Sniper Rifle - 2d10, x3 crit damage. If aiming 2 rounds: -4DR +2 DMG'
]

// export let classTable = {}

// export let nanoTable []