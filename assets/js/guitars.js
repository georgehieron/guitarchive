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
        fretboard: "Maple",
        origin: "Japan",
        ownership: "Own",
        pickups: {
            conf: "H/S",
            bridge: "Ibanez V8",
            middle: "",
            neck: "Ibanez Infinity R",
        }
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
        fretboard: "Rosewood",
        origin: "Japan",
        ownership: "Own",
        pickups: {
            conf: "H/H",
            bridge: "EMG 81",
            middle: "",
            neck: "EMG 85",
        }
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
        fretboard: "Ebony",
        origin: "Indonesia",
        ownership: "Own",
        pickups: {
            conf: "H/H",
            bridge: "Seymour Duncan Solar Bridge",
            middle: "",
            neck: "Seymour Duncan Solar Neck",
        }
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
        fretboard: "Rosewood",
        origin: "Indonesia",
        ownership: "Sold",
        pickups: {
            conf: "H/H",
            bridge: "Ibanez IBZ-8",
            middle: "",
            neck: "EMG 808X",
        }
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
        fretboard: "Maple",
        origin: "Japan",
        ownership: "Own",
        pickups: {
            conf: "H/S/H",
            bridge: "DiMarzio PAF Pro",
            middle: "DiMarzio JEM Single",
            neck: "DiMarzio PAF Pro",
        }
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
        fretboard: "Maple",
        origin: "Japan",
        ownership: "Own",
        pickups: {
            conf: "H/S/H",
            bridge: "DiMarzio PAF Pro",
            middle: "DiMarzio JEM Single",
            neck: "DiMarzio PAF Pro",
        }
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
        fretboard: "Maple",
        origin: "Japan",
        ownership: "Own",
        pickups: {
            conf: "H/H",
            bridge: "DiMarzio Crunch Lab",
            middle: "",
            neck: "DiMarzio Liquifire",
        }
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
        fretboard: "Rosewood",
        origin: "South Korea",
        ownership: "Sold",
        pickups: {
            conf: "H/S/H",
            bridge: "Ibanez PSND2",
            middle: "Ibanez PSNDS",
            neck: "Ibanez PSND1",
        }
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
        fretboard: "Rosewood",
        origin: "Japan",
        ownership: "Sold",
        pickups: {
            conf: "H/H",
            bridge: "Ibanez V87",
            middle: "",
            neck: "Ibanez V77",
        }
    },
    {
        brand: "Schecter",
        model: "Omen-7 Diamond Series",
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
        fretboard: "Rosewood",
        origin: "",
        ownership: "Sold",
        pickups: {
            conf: "H/H",
            bridge: "",
            middle: "",
            neck: "",
        }
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
        fretboard: "Ebony",
        origin: "South Korea",
        ownership: "Sold",
        pickups: {
            conf: "H",
            bridge: "EMG HZ-H4",
            middle: "",
            neck: "",
        }
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
        fretboard: "Rosewood",
        origin: "",
        ownership: "Sold",
        pickups: {
            conf: "H/H",
            bridge: "Wilkinson MWVC",
            middle: "",
            neck: "Wilkinson MWVC",
        }
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
        fretboard: "Rosewood",
        origin: "Japan",
        ownership: "Own",
        pickups: {
            conf: "H/S/S",
            bridge: "DiMarzio Super Distortion",
            middle: "DiMarzio FS-40",
            neck: "DiMarzio Air Norton S",
        }
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
        fretboard: "Rosewood",
        origin: "",
        ownership: "Sold",
        pickups: {
            conf: "H/H",
            bridge: "",
            middle: "",
            neck: "",
        }
    },
];

const brands = [];
const bridges = [];
const colours = [];
const constructions = [];
const fretboards = [];
const origins = [];
const ownerships = [];
const pickups = [];

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
    if (fretboards.indexOf(g.fretboard) === -1) {
        fretboards.push(g.fretboard);
    }
    if (g.origin != "" && origins.indexOf(g.origin) === -1) {
        origins.push(g.origin);
    }
    if (ownerships.indexOf(g.ownership) === -1) {
        ownerships.push(g.ownership);
    }
    if (pickups.indexOf(g.pickups.conf) === -1) {
        pickups.push(g.pickups.conf);
    }
});

brands.sort();
bridges.sort();
colours.sort();
constructions.sort();
fretboards.sort();
origins.sort();
ownerships.sort();
pickups.sort();

export {
    guitars,
    brands,
    bridges,
    colours,
    constructions,
    fretboards,
    origins,
    ownerships,
    pickups,
};
