function printInventory(poules, vaches) {
    let count_poules = poules.toString()
    while (count_poules.length < 3) {
        count_poules = "0" + count_poules
    }
    console.log(`${count_poules} poules`)

    let count_vaches = vaches.toString()
    while (count_vaches.length < 3) {
        count_vaches = "0" + count_vaches
    }
    console.log(`${count_vaches} vaches`)
}

printInventory(8, 14)
