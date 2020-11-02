class Animal {
    constructor(poids, size) {
        this.poids = poids
        this.size = size || {
            height: 0,
            width: 0,
            z: 0,
        }
    }
}

class Chien extends Animal {
    constructor(name, master, animal_props) {
        const { poids, size } = animal_props
        console.log('size', size)
        super(poids, size)
        this.name = name
        this.master = master
    }
}

const monCh = new Chien('Pango', 'Someone', {
    poids: 10,
})

