/*
Afficher un inventaire ligne par ligne
8 poules
14 vaches

printInventory(8, 14);
--> result
008 poules
014 vaches
*/

function printWithZeroAndName(nb, name) {
    let count = nb.toString()
    while (count.length < 3) {
        count = "0" + count
    }
    console.log(`${count} ${name}`)
}

function withZero(nb, width = 3) {
    let count = nb.toString()
    while (count.length < width) {
        count = "0" + count
    }
    return count
}

function printInventory(poules, vaches, porcs) {
    console.log(`${withZero(poules, 3)} poules`)
    console.log(`${withZero(vaches, 3)} vaches`)
    console.log(`${withZero(porcs, 3)} porcs`)
}

printInventory(8, 14, 23)