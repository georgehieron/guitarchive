<template>
  <main>
    <form class="guitar-filter">
      <div class="search-wrapper">
        <label
          >Search brand/model:
          <input type="search" v-model="search" placeholder="Search..." />
        </label>
      </div>

      <label
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

      <label
        >Bridge
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

      <label
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

      <label
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

      <label
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

      <label
        >Frets
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

      <label
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

      <label
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

      <label
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

      <label
        >Scale
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

      <label
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
    </form>

    <ul class="guitar-list">
      <li v-for="(item, index) in filteredItems" v-bind:key="index">
        <NuxtLink :to="`${item.brandSlug}/${item.modelSlug}`">
          <span>{{ item.name }}</span>
          <ul>
            <li>{{ item.bridge.name }}</li>
            <li>{{ item.colour.name }}</li>
            <li>{{ item.construction.type }}</li>
            <li>{{ item.fretboard }}</li>
            <li>{{ item.frets }}</li>
            <li v-if="item.origin">{{ item.origin }}</li>
            <li>{{ item.ownership.status }}</li>
            <li>{{ item.pickups.conf }}</li>
            <li v-if="item.scale">{{ item.scale }}</li>
            <li>{{ item.strings }}</li>
          </ul>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
import {
  guitars,
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
      guitars: guitars,

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

      fretboards: fretboards,
      selectedFretboard: "",

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

      disabled: 0,
    };
  },

  mounted: function () {
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
    filteredItems: function () {
      let brandFilter = this.selectedBrand,
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
          if (brandFilter && brandFilter != "All") {
            filtered = g.brand == brandFilter;
          }
          if (filtered) {
            if (bridgeFilter && bridgeFilter != "All") {
              filtered = g.bridge.type == bridgeFilter;
            }
          }
          if (filtered) {
            if (colourFilter && colourFilter != "All") {
              filtered = g.colour.primary == colourFilter;
            }
          }
          if (filtered) {
            if (constructionFilter && constructionFilter != "All") {
              filtered = g.construction.type == constructionFilter;
            }
          }
          if (filtered) {
            if (fretboardFilter && fretboardFilter != "All") {
              filtered = g.fretboard == fretboardFilter;
            }
          }
          if (filtered) {
            if (fretsFilter && fretsFilter != "All") {
              filtered = g.frets == fretsFilter;
            }
          }
          if (filtered) {
            if (originFilter && originFilter != "All") {
              filtered = g.origin == originFilter;
            }
          }
          if (filtered) {
            if (ownershipFilter && ownershipFilter != "All") {
              filtered = g.ownership.status == ownershipFilter;
            }
          }
          if (filtered) {
            if (pickupsFilter && pickupsFilter != "All") {
              filtered = g.pickups.conf == pickupsFilter;
            }
          }
          if (filtered) {
            if (scaleFilter && scaleFilter != "All") {
              filtered = g.scale == scaleFilter;
            }
          }
          if (filtered) {
            if (stringsFilter && stringsFilter != "All") {
              filtered = g.strings == stringsFilter;
            }
          }
        }
        return filtered;
      }, this);
    },
  },
};
</script>
