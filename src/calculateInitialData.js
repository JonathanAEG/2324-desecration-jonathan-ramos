
const calculateInitiative = (hero)=>{

    return hero.powerstats.intelligence + hero.powerstats.power;
}

const calculateHP = (hero)=>{

    let hp = hero.powerstats.strength * 10;

    if(hp > 666){
        hp = 666;
    }   

    return hp;
}

 setInitialData = (hero)=>{

    const initiative = calculateInitiative(hero);
    const hitPoints = calculateHP(hero);
    
    const newHero = hero;

    newHero.powerstats.initiative = initiative;
    newHero.powerstats.hitPoints = hitPoints;

    return newHero;
}

module.exports = setInitialData

