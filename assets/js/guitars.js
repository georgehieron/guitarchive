const guitars = [
    {
        brand: "Ibanez",
        model: "RG565EG Genesis",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge",
        },
        colour: {
            primary: "Green",
            secondary: "",
            name: "Emerald Green",
        },
        construction: {
            type: "Bolt-on",
            detail: "Tilt Joint",
        },
        ownership: "Own",
    },
    {
        brand: "Ibanez",
        model: "RG8420ZE",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge Zero tremolo w/ ZPS3 stabilizer",
        },
        colour: {
            primary: "Red",
            secondary: "",
            name: "Red Spinel",
        },
        construction: {
            type: "Bolt-on",
            detail: "J.Custom AANJ",
        },
        ownership: "Own",
    },
    {
        brand: "Solar",
        model: "S1.6LB",
        bridge: {
            type: "Evertune",
            name: "Evertune F6",
        },
        colour: {
            primary: "Green",
            secondary: "",
            name: "Lime Burst Matte",
        },
        construction: {
            type: "Neck-through",
            detail: "",
        },
        ownership: "Own",
    },
    {
        brand: "Ibanez",
        model: "RG8FM",
        bridge: {
            type: "Fixed",
            name: "Generic",
        },
        colour: {
            primary: "Blue",
            secondary: "",
            name: "Sapphire Blue Burst",
        },
        construction: {
            type: "Bolt-on",
            detail: "AANJ",
        },
        ownership: "Sold",
    },
    {
        brand: "Ibanez",
        model: "PGM301",
        bridge: {
            type: "Fixed",
            name: "Gotoh GTC101",
        },
        colour: {
            primary: "White",
            secondary: "",
            name: "White",
        },
        construction: {
            type: "Bolt-on",
            detail: "AANJ",
        },
        ownership: "Own",
    },
    {
        brand: "Ibanez",
        model: "JEM777DY",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge",
        },
        colour: {
            primary: "Yellow",
            secondary: "",
            name: "Desert Sun Yellow",
        },
        construction: {
            type: "Bolt-on",
            detail: "Cutaway Heel",
        },
        ownership: "Own",
    },
    {
        brand: "Ibanez",
        model: "RG1527M",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge Pro 7",
        },
        colour: {
            primary: "White",
            secondary: "",
            name: "Galaxy White",
        },
        construction: {
            type: "Bolt-on",
            detail: "AANJ",
        },
        ownership: "Own",
    },
    {
        brand: "Ibanez",
        model: "S470FOF",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez ZR tremolo w/ ZPS2 stabilizer",
        },
        colour: {
            primary: "Orange",
            secondary: "",
            name: "Flare Orange Flat",
        },
        construction: {
            type: "Bolt-on",
            detail: "AANJ",
        },
        ownership: "Sold",
    },
    {
        brand: "Ibanez",
        model: "RG1527RB",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge Pro 7",
        },
        colour: {
            primary: "Blue",
            secondary: "",
            name: "Royal Blue",
        },
        construction: {
            type: "Bolt-on",
            detail: "AANJ",
        },
        ownership: "Sold",
    },
    {
        brand: "Schecter",
        model: "Diamond Series 7",
        bridge: {
            type: "Tune-O-Matic",
            name: "Generic",
        },
        colour: {
            primary: "Black",
            secondary: "",
            name: "Black",
        },
        construction: {
            type: "Bolt-on",
            detail: "",
        },
        ownership: "Sold",
    },
    {
        brand: "ESP",
        model: "LTD Alexi-600 SE",
        bridge: {
            type: "Floating Tremolo",
            name: "Floyd Rose Original",
        },
        colour: {
            primary: "Black",
            secondary: "Pink",
            name: "Black / Pink",
        },
        construction: {
            type: "Neck-through",
            detail: "",
        },
        ownership: "Sold",
    },
    {
        brand: "Vintage",
        model: "V100BB",
        bridge: {
            type: "Tune-O-Matic",
            name: "Wilkinson",
        },
        colour: {
            primary: "Black",
            secondary: "",
            name: "Black",
        },
        construction: {
            type: "Set neck",
            detail: "",
        },
        ownership: "Sold",
    },
    {
        brand: "Jackson",
        model: "Dinky Fusion EX Professional",
        bridge: {
            type: "Floating Tremolo",
            name: "Gotoh",
        },
        colour: {
            primary: "Black",
            secondary: "",
            name: "Black",
        },
        construction: {
            type: "Bolt-on",
            detail: "",
        },
        ownership: "Own",
    },
    {
        brand: "Crafter",
        model: "Cruiser RG600",
        bridge: {
            type: "Tune-O-Matic",
            name: "Generic",
        },
        colour: {
            primary: "Black",
            secondary: "",
            name: "Black",
        },
        construction: {
            type: "Bolt-on",
            detail: "",
        },
        ownership: "Sold",
    },
];

const brands = [];
const bridges = [];
const colours = [];
const constructions = [];
const ownerships = [];

guitars.forEach((g) => {
    g.name = g.brand + " " + g.model;
    g.brandSlug = g.brand.replace(/ /g, "-").toLowerCase();
    g.modelSlug = g.model.replace(/ /g, "-").toLowerCase();
    if (brands.indexOf(g.brand) === -1) {
        brands.push(g.brand);
    }
    if (bridges.indexOf(g.bridge.type) === -1) {
        bridges.push(g.bridge.type);
    }
    if (colours.indexOf(g.colour.primary) === -1) {
        colours.push(g.colour.primary);
    }
    if (constructions.indexOf(g.construction.type) === -1) {
        constructions.push(g.construction.type);
    }
    if (ownerships.indexOf(g.ownership) === -1) {
        ownerships.push(g.ownership);
    }
});

brands.sort();
bridges.sort();
colours.sort();
constructions.sort();
ownerships.sort();

export { guitars, brands, bridges, colours, constructions, ownerships };
