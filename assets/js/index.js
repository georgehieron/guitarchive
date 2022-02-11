import {
    guitars,
    orderedGtrs,
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
} from "../js/guitars";

export default {
    head() {
        return {
            title: this.title,
        };
    },
    data() {
        return {
            title: "Guitarchive",

            guitars: guitars,
            filteredGuitars: guitars,
            orderedGtrs: orderedGtrs,

            bodies: bodies,
            selectedBody: "",

            brands: brands,
            selectedBrand: "",

            bridges: bridges,
            selectedBridge: "",

            colours: colours,
            selectedColour: "",

            constructions: constructions,
            selectedConstruction: "",

            fretboards: fretboards,
            selectedFretboard: "",

            frets: frets,
            selectedFrets: "",

            origins: origins,
            selectedOrigin: "",

            ownerships: ownerships,
            selectedOwnership: "",

            pickups: pickups,
            selectedPickups: "",

            scales: scales,
            selectedScale: "",

            strings: strings,
            selectedStrings: "",

            search: "",

            isDisabled: false,
        };
    },
    watch: {
        search: "filterGuitars",
    },
    computed: {
        bodyFiltered() {
            return this.setFilteredState(this.selectedBody);
        },
        brandFiltered() {
            return this.setFilteredState(this.selectedBrand);
        },
        bridgeFiltered() {
            return this.setFilteredState(this.selectedBridge);
        },
        colourFiltered() {
            return this.setFilteredState(this.selectedColour);
        },
        constructionFiltered() {
            return this.setFilteredState(this.selectedConstruction);
        },
        fretboardFiltered() {
            return this.setFilteredState(this.selectedFretboard);
        },
        fretsFiltered() {
            return this.setFilteredState(this.selectedFrets);
        },
        originFiltered() {
            return this.setFilteredState(this.selectedOrigin);
        },
        ownershipFiltered() {
            return this.setFilteredState(this.selectedOwnership);
        },
        pickupsFiltered() {
            return this.setFilteredState(this.selectedPickups);
        },
        scaleFiltered() {
            return this.setFilteredState(this.selectedScale);
        },
        stringsFiltered() {
            return this.setFilteredState(this.selectedStrings);
        },
    },
    methods: {
        setFilteredState(val) {
            return val != "All" ? true : false;
        },
        clearFilters() {
            (this.filteredGuitars = guitars),
                (this.search = ""),
                (this.selectedBody = "All"),
                (this.selectedBrand = "All"),
                (this.selectedBridge = "All"),
                (this.selectedColour = "All"),
                (this.selectedConstruction = "All"),
                (this.selectedFretboard = "All"),
                (this.selectedFrets = "All"),
                (this.selectedOrigin = "All"),
                (this.selectedOwnership = "All"),
                (this.selectedPickups = "All"),
                (this.selectedScale = "All"),
                (this.selectedStrings = "All");
        },
        filterGuitars() {
            const filteredGtrs = this.guitars.filter(function(g) {
                let filtered = true;
                if (this.search.length) {
                    this.isDisabled = true;
                    filtered = g.name
                        .toLowerCase()
                        .includes(this.search.toLowerCase());
                } else {
                    this.isDisabled = false;
                    // BODY
                    if (this.selectedBody != "All") {
                        filtered = g.body.material == this.selectedBody;
                    }
                    // BRAND
                    if (filtered) {
                        if (this.selectedBrand != "All") {
                            filtered = g.brand == this.selectedBrand;
                        }
                    }
                    // BRIDGE
                    if (filtered) {
                        if (this.selectedBridge != "All") {
                            filtered = g.bridge.type == this.selectedBridge;
                        }
                    }
                    // COLOUR
                    if (filtered) {
                        if (
                            this.selectedColour &&
                            this.selectedColour != "All"
                        ) {
                            filtered =
                                g.colour.primary == this.selectedColour ||
                                g.colour.secondary == this.selectedColour;
                        }
                    }
                    // CONSTRUCTION
                    if (filtered) {
                        if (this.selectedConstruction != "All") {
                            filtered =
                                g.construction.type ==
                                this.selectedConstruction;
                        }
                    }
                    // FRETBOARD
                    if (filtered) {
                        if (this.selectedFretboard != "All") {
                            filtered = g.fretboard == this.selectedFretboard;
                        }
                    }
                    // FRETS
                    if (filtered) {
                        if (this.selectedFrets != "All") {
                            filtered = g.frets == this.selectedFrets;
                        }
                    }
                    // ORIGIN
                    if (filtered) {
                        if (this.selectedOrigin != "All") {
                            filtered = g.origin == this.selectedOrigin;
                        }
                    }
                    // OWNERSHIP
                    if (filtered) {
                        if (this.selectedOwnership != "All") {
                            filtered =
                                g.ownership.status == this.selectedOwnership;
                        }
                    }
                    // PICKUPS
                    if (filtered) {
                        if (this.selectedPickups != "All") {
                            filtered = g.pickups.conf == this.selectedPickups;
                        }
                    }
                    // SCALE
                    if (filtered) {
                        if (this.selectedScale != "All") {
                            filtered = g.scale == this.selectedScale;
                        }
                    }
                    // STRINGS
                    if (filtered) {
                        if (this.selectedStrings != "All") {
                            filtered = g.strings == this.selectedStrings;
                        }
                    }
                }
                return filtered;
            }, this);

            return (this.filteredGuitars = filteredGtrs);
        },
    },
    mounted: function() {
        this.selectedBody = "All";
        this.selectedBrand = "All";
        this.selectedBridge = "All";
        this.selectedColour = "All";
        this.selectedConstruction = "All";
        this.selectedFretboard = "All";
        this.selectedFrets = "All";
        this.selectedOrigin = "All";
        this.selectedOwnership = "All";
        this.selectedPickups = "All";
        this.selectedScale = "All";
        this.selectedStrings = "All";
    },
};
