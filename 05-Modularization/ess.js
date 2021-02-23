// module.exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

// const { setGlobalCssModule } = require("reactstrap/es/utils");

//import node modules with the required  keyword

const essentials ={
    drink: "water",
    food: "fruit",
    fun: "phone",
};

const niceToHave ={
    gear: ["Flashlight", "Knife/Blade", "ligther"],
};

const nonEssentials ={
    electronic: "Tv"
};

//Module.export is essentially an oject that we can add data or variables to 
//access them trough other files

module.exports ={
    essentials: essentials,
    niceToHave: niceToHave,
    nonEssentials: nonEssentials
};