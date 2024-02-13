
const setSuperHero = (heroes)=>{

    const filteredHeroes = heroes.filter((hero)=>hero.name !== "Junkpile");

    const randomHeroIndex = Math.floor(Math.random()*(filteredHeroes.length));

    const randomHero = filteredHeroes[randomHeroIndex];
    const hero = {
        name: randomHero.name,
        intelligence: randomHero.powerstats.intelligence,
        strength: randomHero.powerstats.strength,
        speed: randomHero.powerstats.speed,
        durability: randomHero.powerstats.durability,
        power: randomHero.powerstats.power,
        combat: randomHero.powerstats.combat,
    }

    return hero;
}

const setVillainZarate = (heroes)=>{

    const villain = heroes.filter((hero)=>hero.name === "Junkpile");
    

    const villainObject = {
        name: villain[0].name,
        intelligence: villain[0].powerstats.intelligence,
        strength: villain[0].powerstats.strength,
        speed: villain[0].powerstats.speed,
        durability: villain[0].powerstats.durability,
        power: villain[0].powerstats.power,
        combat: villain[0].powerstats.combat,
    }

    return villainObject;
}

module.exports = {
    setSuperHero,
    setVillainZarate
}