<template>
  <main>
    <div class="wrapper padded">
      <h1>{{ this.title }}</h1>
    </div>
    <div class="guitar-filter-wrap">
      <form class="guitar-filter wrapper padded">
        <div class="search-wrapper">
          <label
            >Search brand/model:
            <input
              type="search"
              list="guitar-list"
              v-model="search"
              v-on:keydown.enter="noDefault"
              placeholder="Search..."
            />
            <datalist id="guitar-list">
              <option v-for="(gtr, index) in guitars" v-bind:key="index">
                {{ gtr.name }}
              </option>
            </datalist>
          </label>
        </div>

        <label :data-filtered="bodyFiltered == 1"
          >Body material
          <select
            name="body"
            id="body"
            v-model="selectedBody"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(body, index) in bodies"
              v-bind:value="body"
              v-bind:key="index"
            >
              {{ body }}
            </option>
          </select>
        </label>

        <label :data-filtered="brandFiltered == 1"
          >Brand
          <select
            name="brand"
            id="brand"
            v-model="selectedBrand"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(brand, index) in brands"
              v-bind:value="brand"
              v-bind:key="index"
            >
              {{ brand }}
            </option>
          </select>
        </label>

        <label :data-filtered="bridgeFiltered == 1"
          >Bridge type
          <select
            name="bridge"
            id="bridge"
            v-model="selectedBridge"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(bridge, index) in bridges"
              v-bind:value="bridge"
              v-bind:key="index"
            >
              {{ bridge }}
            </option>
          </select>
        </label>

        <label :data-filtered="colourFiltered == 1"
          >Colour
          <select
            name="colour"
            id="colour"
            v-model="selectedColour"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(colour, index) in colours"
              v-bind:value="colour"
              v-bind:key="index"
            >
              {{ colour }}
            </option>
          </select>
        </label>

        <label :data-filtered="constructionFiltered == 1"
          >Construction
          <select
            name="construction"
            id="construction"
            v-model="selectedConstruction"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(construction, index) in constructions"
              v-bind:value="construction"
              v-bind:key="index"
            >
              {{ construction }}
            </option>
          </select>
        </label>

        <label :data-filtered="fretboardFiltered == 1"
          >Fretboard
          <select
            name="fretboard"
            id="fretboard"
            v-model="selectedFretboard"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(fretboard, index) in fretboards"
              v-bind:value="fretboard"
              v-bind:key="index"
            >
              {{ fretboard }}
            </option>
          </select>
        </label>

        <label :data-filtered="fretsFiltered == 1"
          >No. Frets
          <select
            name="frets"
            id="frets"
            v-model="selectedFrets"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(frets, index) in frets"
              v-bind:value="frets"
              v-bind:key="index"
            >
              {{ frets }}
            </option>
          </select>
        </label>

        <label :data-filtered="originFiltered == 1"
          >Origin
          <select
            name="origin"
            id="origin"
            v-model="selectedOrigin"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(origin, index) in origins"
              v-bind:value="origin"
              v-bind:key="index"
            >
              {{ origin }}
            </option>
          </select>
        </label>

        <label :data-filtered="ownershipFiltered == 1"
          >Ownership
          <select
            name="ownership"
            id="ownership"
            v-model="selectedOwnership"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(ownership, index) in ownerships"
              v-bind:value="ownership"
              v-bind:key="index"
            >
              {{ ownership }}
            </option>
          </select>
        </label>

        <label :data-filtered="pickupsFiltered == 1"
          >Pickup config.
          <select
            name="pickups"
            id="pickups"
            v-model="selectedPickups"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(pickups, index) in pickups"
              v-bind:value="pickups"
              v-bind:key="index"
            >
              {{ pickups }}
            </option>
          </select>
        </label>

        <label :data-filtered="scaleFiltered == 1"
          >Scale length
          <select
            name="scale"
            id="scale"
            v-model="selectedScale"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(scale, index) in scales"
              v-bind:value="scale"
              v-bind:key="index"
            >
              {{ scale }}
            </option>
          </select>
        </label>

        <label :data-filtered="stringsFiltered == 1"
          >Strings
          <select
            name="strings"
            id="strings"
            v-model="selectedStrings"
            :disabled="disabled == 1"
          >
            <option value="All">All</option>
            <option
              v-for="(strings, index) in strings"
              v-bind:value="strings"
              v-bind:key="index"
            >
              {{ strings }}
            </option>
          </select>
        </label>

        <input
          type="reset"
          class="btn reset-filters"
          v-on:click="clearFilters"
        />
      </form>
    </div>

    <ul class="guitar-list wrapper padded">
      <li v-for="(gtr, index) in filteredGuitars" v-bind:key="index">
        <NuxtLink :to="`${gtr.brandSlug}/${gtr.modelSlug}`">
          <span>{{ gtr.name }}</span>
          <ul>
            <li>{{ gtr.bridge.name }}</li>
            <li>{{ gtr.colour.name }}</li>
            <li>{{ gtr.construction.type }}</li>
            <li>{{ gtr.fretboard }}</li>
            <li>{{ gtr.frets }}</li>
            <li v-if="gtr.origin">{{ gtr.origin }}</li>
            <li>{{ gtr.ownership.status }}</li>
            <li>{{ gtr.pickups.conf }}</li>
            <li v-if="gtr.scale">{{ gtr.scale }}</li>
            <li>{{ gtr.strings }}</li>
          </ul>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
import {
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
} from "../assets/js/guitars.js";

export default {
  data: function () {
    return {
      title: "Guitarchive",

      guitars: guitars,

      bodies: bodies,
      selectedBody: "",
      bodyFiltered: 0,

      brands: brands,
      selectedBrand: "",
      brandFiltered: 0,

      bridges: bridges,
      selectedBridge: "",
      bridgeFiltered: 0,

      colours: colours,
      selectedColour: "",
      colourFiltered: 0,

      constructions: constructions,
      selectedConstruction: "",
      constructionFiltered: 0,

      fretboards: fretboards,
      selectedFretboard: "",
      fretboardFiltered: 0,

      frets: frets,
      selectedFrets: "",
      fretsFiltered: 0,

      origins: origins,
      selectedOrigin: "",
      originFiltered: 0,

      ownerships: ownerships,
      selectedOwnership: "",
      ownershipFiltered: 0,

      pickups: pickups,
      selectedPickups: "",
      pickupsFiltered: 0,

      scales: scales,
      selectedScale: "",
      scaleFiltered: 0,

      strings: strings,
      selectedStrings: "",
      stringsFiltered: 0,

      search: "",

      disabled: 0,
    };
  },

  head() {
    return {
      title: this.title,
    };
  },

  methods: {
    clearFilters: function () {
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
    noDefault: function (event) {
      if (event) {
        event.preventDefault();
      }
    },
  },

  mounted: function () {
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

  computed: {
    filteredGuitars: function () {
      let bodyFilter = this.selectedBody,
        brandFilter = this.selectedBrand,
        bridgeFilter = this.selectedBridge,
        colourFilter = this.selectedColour,
        constructionFilter = this.selectedConstruction,
        fretboardFilter = this.selectedFretboard,
        fretsFilter = this.selectedFrets,
        originFilter = this.selectedOrigin,
        ownershipFilter = this.selectedOwnership,
        pickupsFilter = this.selectedPickups,
        scaleFilter = this.selectedScale,
        stringsFilter = this.selectedStrings,
        search = this.search;
      return this.guitars.filter(function (g) {
        let filtered = true;
        if (search != "") {
          this.disabled = 1;
          filtered = g.name.toLowerCase().includes(search.toLowerCase());
        } else {
          this.disabled = 0;
          // BODY
          if (bodyFilter != "All") {
            filtered = g.body.material == bodyFilter;
          }
          bodyFilter != "All"
            ? (this.bodyFiltered = 1)
            : (this.bodyFiltered = 0);
          // BRAND
          if (filtered) {
            if (brandFilter != "All") {
              filtered = g.brand == brandFilter;
            }
          }
          brandFilter != "All"
            ? (this.brandFiltered = 1)
            : (this.brandFiltered = 0);
          // BRIDGE
          if (filtered) {
            if (bridgeFilter != "All") {
              filtered = g.bridge.type == bridgeFilter;
            }
          }
          bridgeFilter != "All"
            ? (this.bridgeFiltered = 1)
            : (this.bridgeFiltered = 0);
          // COLOUR
          if (filtered) {
            if (colourFilter && colourFilter != "All") {
              filtered = g.colour.primary == colourFilter;
            }
          }
          colourFilter != "All"
            ? (this.colourFiltered = 1)
            : (this.colourFiltered = 0);
          // CONSTRUCTION
          if (filtered) {
            if (constructionFilter != "All") {
              filtered = g.construction.type == constructionFilter;
            }
          }
          constructionFilter != "All"
            ? (this.constructionFiltered = 1)
            : (this.constructionFiltered = 0);
          // FRETBOARD
          if (filtered) {
            this.fretboardFiltered = 0;
            if (fretboardFilter != "All") {
              filtered = g.fretboard == fretboardFilter;
              this.fretboardFiltered = 1;
            }
          }
          // FRETS
          if (filtered) {
            if (fretsFilter != "All") {
              filtered = g.frets == fretsFilter;
            }
          }
          fretsFilter != "All"
            ? (this.fretsFiltered = 1)
            : (this.fretsFiltered = 0);
          // ORIGIN
          if (filtered) {
            if (originFilter != "All") {
              filtered = g.origin == originFilter;
            }
          }
          originFilter != "All"
            ? (this.originFiltered = 1)
            : (this.originFiltered = 0);
          // OWNERSHIP
          if (filtered) {
            if (ownershipFilter != "All") {
              filtered = g.ownership.status == ownershipFilter;
            }
          }
          ownershipFilter != "All"
            ? (this.ownershipFiltered = 1)
            : (this.ownershipFiltered = 0);
          // PICKUPS
          if (filtered) {
            if (pickupsFilter != "All") {
              filtered = g.pickups.conf == pickupsFilter;
            }
          }
          pickupsFilter != "All"
            ? (this.pickupsFiltered = 1)
            : (this.pickupsFiltered = 0);
          // SCALE
          if (filtered) {
            if (scaleFilter != "All") {
              filtered = g.scale == scaleFilter;
            }
          }
          scaleFilter != "All"
            ? (this.scaleFiltered = 1)
            : (this.scaleFiltered = 0);
          // STRINGS
          if (filtered) {
            if (stringsFilter != "All") {
              filtered = g.strings == stringsFilter;
            }
          }
          stringsFilter != "All"
            ? (this.stringsFiltered = 1)
            : (this.stringsFiltered = 0);
        }
        return filtered;
      }, this);
    },
  },
};
</script>
