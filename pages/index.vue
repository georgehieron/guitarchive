<template>
    <main>
        <form>
            <label
                >Brand
                <select name="brand" id="brand" v-model="selectedBrand">
                    <option value="All">All</option>
                    <option
                        v-for="(brand, index) in brands"
                        v-bind:value="brand.name"
                        v-bind:key="index"
                    >
                        {{ brand.name }}
                    </option>
                </select>
            </label>
            <br /><br />

            <label
                >Bridge
                <select name="bridge" id="bridge" v-model="selectedBridge">
                    <option value="All">All</option>
                    <option
                        v-for="(bridge, index) in bridges"
                        v-bind:value="bridge.name"
                        v-bind:key="index"
                    >
                        {{ bridge.name }}
                    </option>
                </select>
            </label>
            <br /><br />
        </form>

        <ul>
            <li v-for="(item, index) in filteredItems" v-bind:key="index">
                {{ item.brand }} {{ item.name }}
                <ul>
                    <li>{{ item.bridge }}</li>
                </ul>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    data: function() {
        return {
            brands: [
                { name: "Ibanez" },
                { name: "Jackson" },
                { name: "Solar" },
            ],

            bridges: [
                { name: "Tremolo" },
                { name: "Fixed" },
                { name: "Evertune" },
            ],

            guitars: [
                {
                    name: "PGM",
                    brand: "Ibanez",
                    bridge: "Fixed",
                },
                {
                    name: "JEM",
                    brand: "Ibanez",
                    bridge: "Tremolo",
                },
                {
                    name: "RG",
                    brand: "Ibanez",
                    bridge: "Tremolo",
                },
                {
                    name: "Dinky",
                    brand: "Jackson",
                    bridge: "Tremolo",
                },
                {
                    name: "S1.6",
                    brand: "Solar",
                    bridge: "Evertune",
                },
            ],

            selectedBrand: "",

            selectedBridge: "",
        };
    },

    mounted: function() {
        this.selectedBrand = "All";
        this.selectedBridge = "All";
    },

    computed: {
        filteredItems: function() {
            let brandFilter = this.selectedBrand,
                bridgeFilter = this.selectedBridge;
            return this.guitars.filter(function(g) {
                let filtered = true;
                if (
                    brandFilter &&
                    brandFilter.length > 0 &&
                    brandFilter != "All"
                ) {
                    filtered = g.brand == brandFilter;
                }
                if (filtered) {
                    if (
                        bridgeFilter &&
                        bridgeFilter.length > 0 &&
                        bridgeFilter != "All"
                    ) {
                        filtered = g.bridge == bridgeFilter;
                    }
                }
                return filtered;
            }, this);
        },
    },
};
</script>
