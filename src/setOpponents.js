
const setSuperHero = (heroes)=>{

    const filteredHeroes = heroes.filter((hero)=>hero.name !== "Junkpile");

    const randomHeroIndex = Math.floor(Math.random()*(filteredHeroes.length));

    return filteredHeroes[randomHeroIndex];
}

const setVillainZarate = (heroes)=>{

    const villain = heroes.filter((hero)=>hero.name === "Junkpile");
    return villain[0];
}

module.exports = {
    setSuperHero,
    setVillainZarate
}