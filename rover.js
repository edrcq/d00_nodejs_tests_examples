/*

class MarsRover {
    public MarsRover(Grid grid);
    public string Execute(string command);
}


Contexte:
- On init la position du robot a x=0,y=0, direction N
- directions: N, S, E, W
- 
*/
const dirs = ['N', 'E', 'S', 'W']

function GetDirIndex(dir) {
    return dirs.indexOf(dir)
}

const theGrid = {
    x: 10,
    y: 10
}

class MarsRover {
    constructor (grid) {
        this.grid = grid
        this.x = 0
        this.y = 0
        this.dir = 'N'
    }

    Execute(command = "") {
        for (let cmd of command) {
            switch(cmd) {
                case "L": {
                    this.Rotate(cmd)
                    break;
                }
                case "R": {
                    this.Rotate(cmd)
                    break;
                }
                case "M": {
                    this.Move()
                }
            }
        }
    }

    Rotate(dir) {
        if (dir === 'L') {
            console.log(GetDirIndex(this.dir))
            if (GetDirIndex(this.dir) == 0) {
                this.dir = dirs[3]
            }
            else {
                this.dir = dirs[GetDirIndex(this.dir) - 1]
            }
        }
        else {
            if (GetDirIndex(this.dir) == 3) {
                this.dir = dirs[0]
            }
            else {
                this.dir = dirs[GetDirIndex(this.dir) + 1]
            }
        }
    }

    Move() {
        switch (this.dir) {
            case "N": {
                this.y++
                break;
            }
            case "S": {
                this.y--
                break;
            }
            case "E": {
                this.x++
                break;
            }
            case "W": {
                this.x--
                break;
            }
        }

        this.x = (this.x + this.grid.x) % this.grid.x
        this.y = (this.y + this.grid.y) % this.grid.y
    }


}

// test *4: command L and R
const rover = new MarsRover(theGrid)
console.log(rover)
rover.Execute("MMMMMMMMMM") // 2,1 N
console.log(rover)
