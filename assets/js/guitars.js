const guitars = [
    {
        brand: "Ibanez",
        model: "RG565EG Genesis",
        body: {
            material: "Basswood",
            detail: "",
        },
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
        frets: "24",
        img: 'https://source.unsplash.com/720x960/?wood',
        neck: {
            material: "Maple / Walnut",
            pcs: "5",
        },
        origin: "Japan",
        ownership: {
            status: "Own",
            year_bought: "2021",
            year_sold: "",
        },
        pickups: {
            conf: "H/S",
            bridge: "Ibanez V8",
            middle: "",
            neck: "Ibanez Infinity R",
        },
        scale: "25.5\"",
        strings: "6",
        year: "2020",
        mods: "None",
    },
    {
        brand: "Ibanez",
        model: "RG8420ZE",
        body: {
            material: "Mahogany",
            detail: "African w/ AAA flamed maple top & binding",
        },
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
        frets: "24",
        neck: {
            material: "Maple / Walnut",
            pcs: "5",
        },
        origin: "Japan",
        ownership: {
            status: "Own",
            year_bought: "2020",
            year_sold: "",
        },
        pickups: {
            conf: "H/H",
            bridge: "EMG 81",
            middle: "",
            neck: "EMG 85",
        },
        scale: "25.5\"",
        strings: "6",
        year: "2009",
        mods: "None",
    },
    {
        brand: "Solar",
        model: "S1.6LB",
        body: {
            material: "Mahogany",
            detail: "",
        },
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
        frets: "24",
        neck: {
            material: "Maple / Jatoba",
            pcs: "5",
        },
        origin: "Indonesia",
        ownership: {
            status: "Own",
            year_bought: "2019",
            year_sold: "",
        },
        pickups: {
            conf: "H/H",
            bridge: "Seymour Duncan Solar Bridge",
            middle: "",
            neck: "Seymour Duncan Solar Neck",
        },
        scale: "25.5\"",
        strings: "6",
        year: "2018",
        mods: "None",
    },
    {
        brand: "Ibanez",
        model: "RG8FM",
        body: {
            material: "Basswood",
            detail: "w/ flamed maple top",
        },
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
        frets: "24",
        neck: {
            material: "Maple / Walnut",
            pcs: "5",
        },
        origin: "Indonesia",
        ownership: {
            status: "Sold",
            year_bought: "2018",
            year_sold: "2019",
        },
        pickups: {
            conf: "H/H",
            bridge: "Ibanez IBZ-8",
            middle: "",
            neck: "EMG 808X",
        },
        scale: "27\"",
        strings: "8",
        year: "2014",
        mods: "Neck pickup",
    },
    {
        brand: "Ibanez",
        model: "PGM301",
        body: {
            material: "Basswood",
            detail: "",
        },
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
        frets: "24",
        neck: {
            material: "Maple / Walnut",
            pcs: "5",
        },
        origin: "Japan",
        ownership: {
            status: "Own",
            year_bought: "2018",
            year_sold: "",
        },
        pickups: {
            conf: "H/S/H",
            bridge: "DiMarzio PAF Pro",
            middle: "DiMarzio JEM Single",
            neck: "DiMarzio PAF Pro",
        },
        scale: "25.5\"",
        strings: "6",
        year: "2008",
        mods: "None",
    },
    {
        brand: "Ibanez",
        model: "JEM777DY",
        body: {
            material: "Basswood",
            detail: "American",
        },
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
        frets: "24",
        neck: {
            material: "Maple",
            pcs: "1",
        },
        origin: "Japan",
        ownership: {
            status: "Own",
            year_bought: "2017",
            year_sold: "",
        },
        pickups: {
            conf: "H/S/H",
            bridge: "DiMarzio PAF Pro",
            middle: "DiMarzio JEM Single",
            neck: "DiMarzio PAF Pro",
        },
        scale: "25.5\"",
        strings: "6",
        year: "1990",
        mods: "None",
    },
    {
        brand: "Ibanez",
        model: "RG1527M",
        body: {
            material: "Basswood",
            detail: "",
        },
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
        frets: "24",
        neck: {
            material: "Maple / Wenge",
            pcs: "5",
        },
        origin: "Japan",
        ownership: {
            status: "Own",
            year_bought: "2016",
            year_sold: "",
        },
        pickups: {
            conf: "H/H",
            bridge: "DiMarzio Crunch Lab",
            middle: "",
            neck: "DiMarzio Liquifire",
        },
        scale: "25.5\"",
        strings: "7",
        year: "2009",
        mods: "Pickups",
    },
    {
        brand: "Ibanez",
        model: "S470FOF",
        body: {
            material: "Mahogany",
            detail: "",
        },
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
        frets: "22",
        neck: {
            material: "Maple",
            pcs: "3",
        },
        origin: "South Korea",
        ownership: {
            status: "Sold",
            year_bought: "2016",
            year_sold: "~2018",
        },
        pickups: {
            conf: "H/S/H",
            bridge: "Ibanez PSND2",
            middle: "Ibanez PSNDS",
            neck: "Ibanez PSND1",
        },
        scale: "25.5\"",
        strings: "6",
        year: "2003",
        mods: "None",
    },
    {
        brand: "Ibanez",
        model: "RG1527RB",
        body: {
            material: "Basswood",
            detail: "",
        },
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
        frets: "24",
        neck: {
            material: "Maple / Wenge",
            pcs: "5",
        },
        origin: "Japan",
        ownership: {
            status: "Sold",
            year_bought: "~2015",
            year_sold: "2017",
        },
        pickups: {
            conf: "H/H",
            bridge: "Ibanez V87",
            middle: "",
            neck: "Ibanez V77",
        },
        scale: "25.5\"",
        strings: "7",
        year: "2007",
        mods: "None",
    },
    {
        brand: "Schecter",
        model: "C-7 Diamond Series",
        body: {
            material: "Ash",
            detail: "",
        },
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
        frets: "24",
        neck: {
            material: "Maple",
            pcs: "1",
        },
        origin: "",
        ownership: {
            status: "Sold",
            year_bought: "~2010",
            year_sold: "2013",
        },
        pickups: {
            conf: "H/H",
            bridge: "Duncan Designed",
            middle: "",
            neck: "Duncan Designed",
        },
        scale: "25.5\"",
        strings: "7",
        year: "1999",
        mods: "None",
    },
    {
        brand: "ESP",
        model: "LTD Alexi-600 SE",
        body: {
            material: "Alder",
            detail: "",
        },
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
        frets: "24",
        neck: {
            material: "Maple",
            pcs: "3",
        },
        origin: "South Korea",
        ownership: {
            status: "Sold",
            year_bought: "2008",
            year_sold: "2019",
        },
        pickups: {
            conf: "H",
            bridge: "EMG HZ-H4",
            middle: "",
            neck: "",
        },
        scale: "25.5\"",
        strings: "6",
        year: "2008",
        mods: "None",
    },
    {
        brand: "Vintage",
        model: "V100BB",
        body: {
            material: "Mahogany",
            detail: "",
        },
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
        frets: "22",
        neck: {
            material: "Mahogany",
            pcs: "1",
        },
        origin: "China",
        ownership: {
            status: "Sold",
            year_bought: "~2007",
            year_sold: "~2016",
        },
        pickups: {
            conf: "H/H",
            bridge: "Wilkinson MWVC",
            middle: "",
            neck: "Wilkinson MWVC",
        },
        scale: "24.75\"",
        strings: "6",
        year: "",
        mods: "None",
    },
    {
        brand: "Jackson",
        model: "Dinky Fusion EX Professional",
        body: {
            material: "Basswood",
            detail: "",
        },
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
        frets: "24",
        neck: {
            material: "Eastern Maple",
            pcs: "1",
        },
        origin: "Japan",
        ownership: {
            status: "Own",
            year_bought: "~2006",
            year_sold: "",
        },
        pickups: {
            conf: "H/S/S",
            bridge: "DiMarzio Super Distortion",
            middle: "DiMarzio FS-40",
            neck: "DiMarzio Air Norton S",
        },
        scale: "24.75\"",
        strings: "6",
        year: "1994",
        mods: "Tremolo, Pickups, Pots, Knobs, Switch tip",
    },
    {
        brand: "Crafter",
        model: "Cruiser RG600",
        body: {
            material: "Basswood",
            detail: "",
        },
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
        frets: "22",
        neck: {
            material: "Maple",
            pcs: "1",
        },
        origin: "China",
        ownership: {
            status: "Sold",
            year_bought: "2005",
            year_sold: "~2008",
        },
        pickups: {
            conf: "H/H",
            bridge: "",
            middle: "",
            neck: "",
        },
        scale: "25.5\"",
        strings: "6",
        year: "",
        mods: "None",
    },
];

const bodies = [];
const brands = [];
const bridges = [];
const colours = [];
const constructions = [];
const fretboards = [];
const frets = [];
const origins = [];
const ownerships = [];
const pickups = [];
const scales = [];
const strings = [];

guitars.forEach((g) => {
    g.name = g.brand + " " + g.model;
    g.brandSlug = g.brand.replace(/ /g, "-").toLowerCase();
    g.modelSlug = g.model.replace(/ /g, "-").toLowerCase();
    if (bodies.indexOf(g.body.material) === -1) {
        bodies.push(g.body.material);
    }
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
    if (frets.indexOf(g.frets) === -1) {
        frets.push(g.frets);
    }
    if (g.origin != "" && origins.indexOf(g.origin) === -1) {
        origins.push(g.origin);
    }
    if (ownerships.indexOf(g.ownership.status) === -1) {
        ownerships.push(g.ownership.status);
    }
    if (pickups.indexOf(g.pickups.conf) === -1) {
        pickups.push(g.pickups.conf);
    }
    if (g.scale != "" && scales.indexOf(g.scale) === -1) {
        scales.push(g.scale);
    }
    if (strings.indexOf(g.strings) === -1) {
        strings.push(g.strings);
    }
});

bodies.sort();
brands.sort();
bridges.sort();
colours.sort();
constructions.sort();
fretboards.sort();
frets.sort();
origins.sort();
ownerships.sort();
pickups.sort();
scales.sort();
strings.sort();

export {
    guitars,
    bodies,
    brands,
    bridges,
    colours,
    constructions,
    fretboards,
    frets,
    origins,
    ownerships,
    pickups,
    scales,
    strings,
};
