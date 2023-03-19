function roll(max) {
    return Math.floor(Math.random() * max) + 1
}
/**
 * 
 * @param {} table - object or array
 * @returns a random value from table
 */
export function tableRoller(table, cap = table.length) {
    function roll(max) {
        return Math.floor(Math.random() * max)
    }
    // på något sätt så tar den IBLAND sträng som cap, hur?
    if (Array.isArray(table)) {
        let diceRoll = roll(cap)
        console.log(diceRoll, cap, table)
        return table[diceRoll]
    }

    else {
        return table[tableRoller(Object.keys(table))]
    }
}



export function diceRoller(max, amount = 1, mod = 0, dropLowest = false){

    function roll(max) {
        return Math.floor(Math.random() * max) + 1
    }

    let result = 0
    let rolls = []
    if (amount > 1) {
            for (let c = 0; c < amount; c++) {
                result = roll(max)
                rolls.push(result)
            }
            if (dropLowest == true) { //simple hack for charcreation, if we drop lowest we add one here
            //remove smallest number
            rolls.push(roll(max))
            rolls.sort( (a,b) => b - a)
            rolls.pop()
            }
            // make a number out of it
            console.log(rolls, dropLowest)
            return rolls.reduce( (start, a) => start + a) + mod
        }
    else {
        return roll(max) + mod
    }

}
