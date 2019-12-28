function GetRandomNumber(max) {
    return Math.floor(Math.random() * max)
}

function randomProperty(obj) {
    var keys = Object.keys(obj)
    return obj[keys[keys.length * Math.random() << 0]];
};

function GenerateGumballs() {
    let arr = []
    let numToMake = GetRandomNumber(10)
    for (let i = 0; i < numToMake; ++i) {
        arr.push(new Gumball(randomProperty(Colors)))
    }
    return arr;
}

class GumballMachine {
    constructor() {
        this.Gumballs = GenerateGumballs();
    }
    GetGumball() {
        if (this.Gumballs.length > 0) {
            let currBall = this.Gumballs.splice(GetRandomNumber(this.Gumballs.length - 1), 1)[0];
            return currBall.Color.name;
        } else {
            alert('No more!');
            return 0;
        }
        console.log(GenerateGumballs);
    }
    GetNumberOfGumballsLeft() {
        return this.Gumballs.length;
    }
}


let myFavoriteGumballMachine = new GumballMachine();

// write functions and code to pull out a gumball here
// the machine is already full of some number of gumballs
// You will need to add constructors and fields in order to expose the data

function GetGumball() {
    let obtainedGumball = myFavoriteGumballMachine.GetGumball();
    UpdateUI(obtainedGumball);
}

function UpdateUI(gumball) {
    document.getElementById("count").innerHTML =
        myFavoriteGumballMachine.GetNumberOfGumballsLeft();
    document.getElementById("currentGumball").innerHTML = JSON.stringify(gumball);
}

//initialize output values
UpdateUI(null)
