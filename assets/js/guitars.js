const guitars = [
    {
        brand: "Ibanez",
        model: "RG565EG Genesis",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge"
        },
        construction: {
            type: "Bolt-on",
            detail: "Tilt Joint"
        },
        ownership: "Own"
    },
    {
        brand: "Ibanez",
        model: "RG8420ZE",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge Zero tremolo w/ ZPS3 stabilizer"
        },
        construction: {
            type: "Bolt-on",
            detail: "J.Custom AANJ"
        },
        ownership: "Own"
    },
    {
        brand: "Solar",
        model: "S1.6LB",
        bridge: {
            type: "Evertune",
            name: "Evertune F6"
        },
        construction: {
            type: "Neck-through",
            detail: ""
        },
        ownership: "Own"
    },
    {
        brand: "Ibanez",
        model: "RG8FM",
        bridge: {
            type: "Fixed",
            name: "Generic"
        },
        construction: {
            type: "Bolt-on",
            detail: "AANJ"
        },
        ownership: "Sold"
    },
    {
        brand: "Ibanez",
        model: "PGM301",
        bridge: {
            type: "Fixed",
            name: "Gotoh GTC101"
        },
        construction: {
            type: "Bolt-on",
            detail: "AANJ"
        },
        ownership: "Own"
    },
    {
        brand: "Ibanez",
        model: "JEM777DY",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge"
        },
        construction: {
            type: "Bolt-on",
            detail: "Cutaway Heel"
        },
        ownership: "Own"
    },
    {
        brand: "Ibanez",
        model: "RG1527M",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge Pro 7"
        },
        construction: {
            type: "Bolt-on",
            detail: "AANJ"
        },
        ownership: "Own"
    },
    {
        brand: "Ibanez",
        model: "S470FOF",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez ZR tremolo w/ ZPS2 stabilizer"
        },
        construction: {
            type: "Bolt-on",
            detail: "AANJ"
        },
        ownership: "Sold"
    },
    {
        brand: "Ibanez",
        model: "RG1527RB",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge Pro 7"
        },
        construction: {
            type: "Bolt-on",
            detail: "AANJ"
        },
        ownership: "Sold"
    },
    {
        brand: "Schecter",
        model: "Diamond Series 7",
        bridge: {
            type: "Tune-O-Matic",
            name: "Generic"
        },
        construction: {
            type: "Bolt-on",
            detail: ""
        },
        ownership: "Sold"
    },
    {
        brand: "ESP",
        model: "LTD Alexi-600 SE",
        bridge: {
            type: "Floating Tremolo",
            name: "Floyd Rose Original"
        },
        construction: {
            type: "Neck-through",
            detail: ""
        },
        ownership: "Sold"
    },
    {
        brand: "Vintage",
        model: "V100BB",
        bridge: {
            type: "Tune-O-Matic",
            name: "Wilkinson"
        },
        construction: {
            type: "Set neck",
            detail: ""
        },
        ownership: "Sold"
    },
    {
        brand: "Jackson",
        model: "Dinky Fusion EX Professional",
        bridge: {
            type: "Floating Tremolo",
            name: "Gotoh"
        },
        construction: {
            type: "Bolt-on",
            detail: ""
        },
        ownership: "Own"
    },
    {
        brand: "Crafter",
        model: "Cruiser RG600",
        bridge: {
            type: "Tune-O-Matic",
            name: "Generic"
        },
        construction: {
            type: "Bolt-on",
            detail: ""
        },
        ownership: "Sold"
    },
]

guitars.forEach(g => {
    g.name = g.brand + ' ' + g.model;
    g.brandSlug = g.brand.replace(/ /g, '-').toLowerCase();
    g.modelSlug = g.model.replace(/ /g, '-').toLowerCase();
});

export default guitars;
