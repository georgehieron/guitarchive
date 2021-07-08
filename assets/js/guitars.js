const guitars = [
    {
        brand: "Ibanez",
        model: "PGM301",
        bridge: {
            type: "Fixed",
            name: "Gotoh GTC101"
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
        ownership: "Own"
    },
    {
        brand: "Ibanez",
        model: "RG1527M",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge Pro 7"
        },
        ownership: "Own"
    },
    {
        brand: "Ibanez",
        model: "RG565EG Genesis",
        bridge: {
            type: "Floating Tremolo",
            name: "Ibanez Edge"
        },
        ownership: "Own"
    },
    {
        brand: "Jackson",
        model: "Dinky Fusion EX Professional",
        bridge: {
            type: "Floating Tremolo",
            name: "Gotoh"
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
        ownership: "Own"
    },
    {
        brand: "ESP",
        model: "LTD Alexi-600 SE",
        bridge: {
            type: "Floating Tremolo",
            name: "Floyd Rose Original"
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
