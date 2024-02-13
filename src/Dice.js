
module.exports = class Dice {

    static dice1D100() {
        return Math.floor(Math.random()*(100)+1)
    }

    static dice1D20(){
        return Math.floor(Math.random()*(20)+1)
    }

    static dice1D3(){
        return Math.floor(Math.random()*(3)+1)
    }

    static dice2D3(){

        const values = [];

        for(let i = 0; i < 2; i++){
            values.push(Math.floor(Math.random()*(3)+1))
        }

        return values;
    }

    static dice4D3(){

        const values = [];

        for(let i = 0; i < 4; i++){
            values.push(Math.floor(Math.random()*(3)+1))
        }
        
        return values;
    }

    static dice3D5(){

        const values = [];

        for(let i = 0; i < 3; i++){
            values.push(Math.floor(Math.random()*(5)+1))
        }
        
        return values;
    }
}