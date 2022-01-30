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
              @keydown.enter.prevent
              placeholder="Search..."
            />
            <datalist id="guitar-list">
              <option v-for="gtr in orderedGtrs" :key="gtr.modelSlug">
                {{ gtr.name }}
              </option>
            </datalist>
          </label>
        </div>

        <label :data-filtered="bodyFiltered"
          >Body material
          <select
            name="body"
            id="body"
            v-model="selectedBody"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option v-for="body in bodies" :value="body" :key="body.material">
              {{ body }}
            </option>
          </select>
        </label>

        <label :data-filtered="brandFiltered"
          >Brand
          <select
            name="brand"
            id="brand"
            v-model="selectedBrand"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option v-for="brand in brands" :value="brand" :key="brand">
              {{ brand }}
            </option>
          </select>
        </label>

        <label :data-filtered="bridgeFiltered"
          >Bridge type
          <select
            name="bridge"
            id="bridge"
            v-model="selectedBridge"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option
              v-for="bridge in bridges"
              :value="bridge"
              :key="bridge.type"
            >
              {{ bridge }}
            </option>
          </select>
        </label>

        <label :data-filtered="colourFiltered"
          >Colour
          <select
            name="colour"
            id="colour"
            v-model="selectedColour"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option
              v-for="colour in colours"
              :value="colour"
              :key="colour.primary"
            >
              {{ colour }}
            </option>
          </select>
        </label>

        <label :data-filtered="constructionFiltered"
          >Construction
          <select
            name="construction"
            id="construction"
            v-model="selectedConstruction"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option
              v-for="construction in constructions"
              :value="construction"
              :key="construction.type"
            >
              {{ construction }}
            </option>
          </select>
        </label>

        <label :data-filtered="fretboardFiltered"
          >Fretboard
          <select
            name="fretboard"
            id="fretboard"
            v-model="selectedFretboard"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option
              v-for="fretboard in fretboards"
              :value="fretboard"
              :key="fretboard"
            >
              {{ fretboard }}
            </option>
          </select>
        </label>

        <label :data-filtered="fretsFiltered"
          >Frets
          <select
            name="frets"
            id="frets"
            v-model="selectedFrets"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option v-for="fretNo in frets" :value="fretNo" :key="fretNo">
              {{ fretNo }}
            </option>
          </select>
        </label>

        <label :data-filtered="originFiltered"
          >Origin
          <select
            name="origin"
            id="origin"
            v-model="selectedOrigin"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option v-for="origin in origins" :value="origin" :key="origin">
              {{ origin }}
            </option>
          </select>
        </label>

        <label :data-filtered="ownershipFiltered"
          >Ownership
          <select
            name="ownership"
            id="ownership"
            v-model="selectedOwnership"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option
              v-for="ownership in ownerships"
              :value="ownership"
              :key="ownership.status"
            >
              {{ ownership }}
            </option>
          </select>
        </label>

        <label :data-filtered="pickupsFiltered"
          >Pickup config.
          <select
            name="pickups"
            id="pickups"
            v-model="selectedPickups"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option
              v-for="pickups in pickups"
              :value="pickups"
              :key="pickups.conf"
            >
              {{ pickups }}
            </option>
          </select>
        </label>

        <label :data-filtered="scaleFiltered"
          >Scale length
          <select
            name="scale"
            id="scale"
            v-model="selectedScale"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option v-for="scale in scales" :value="scale" :key="scale">
              {{ scale }}
            </option>
          </select>
        </label>

        <label :data-filtered="stringsFiltered"
          >Strings
          <select
            name="strings"
            id="strings"
            v-model="selectedStrings"
            @change="filterGuitars"
            :disabled="isDisabled"
          >
            <option value="All">All</option>
            <option v-for="strings in strings" :value="strings" :key="strings">
              {{ strings }}
            </option>
          </select>
        </label>

        <input type="reset" class="btn reset-filters" @click="clearFilters" />
      </form>
    </div>

    <ul class="guitar-list wrapper padded">
      <li v-for="gtr in filteredGuitars" :key="gtr.modelSlug">
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
          <img :src="`${gtr.img}`" :alt="`${gtr.name} image`" />
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
  orderedGtrs,
} from "../assets/js/guitars.js";

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
      orderedGtrs: orderedGtrs,
      filteredGuitars: guitars,

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

      isDisabled: false,
    };
  },
  watch: {
    search: "filterGuitars",
  },
  methods: {
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
      const filteredGtrs = this.guitars.filter(function (g) {
        let filtered = true;
        if (this.search.length) {
          this.isDisabled = true;
          filtered = g.name.toLowerCase().includes(this.search.toLowerCase());
        } else {
          this.isDisabled = false;
          // BODY
          if (this.selectedBody != "All") {
            filtered = g.body.material == this.selectedBody;
          }
          this.selectedBody != "All"
            ? (this.bodyFiltered = 1)
            : (this.bodyFiltered = 0);
          // BRAND
          if (filtered) {
            if (this.selectedBrand != "All") {
              filtered = g.brand == this.selectedBrand;
            }
          }
          this.selectedBrand != "All"
            ? (this.brandFiltered = 1)
            : (this.brandFiltered = 0);
          // BRIDGE
          if (filtered) {
            if (this.selectedBridge != "All") {
              filtered = g.bridge.type == this.selectedBridge;
            }
          }
          this.selectedBridge != "All"
            ? (this.bridgeFiltered = 1)
            : (this.bridgeFiltered = 0);
          // COLOUR
          if (filtered) {
            if (this.selectedColour && this.selectedColour != "All") {
              filtered = g.colour.primary == this.selectedColour;
            }
          }
          this.selectedColour != "All"
            ? (this.colourFiltered = 1)
            : (this.colourFiltered = 0);
          // CONSTRUCTION
          if (filtered) {
            if (this.selectedConstruction != "All") {
              filtered = g.construction.type == this.selectedConstruction;
            }
          }
          this.selectedConstruction != "All"
            ? (this.constructionFiltered = 1)
            : (this.constructionFiltered = 0);
          // FRETBOARD
          if (filtered) {
            if (this.selectedFretboard != "All") {
              filtered = g.fretboard == this.selectedFretboard;
            }
          }
          this.selectedFretboard != "All"
            ? (this.fretboardFiltered = 1)
            : (this.fretboardFiltered = 0);
          // FRETS
          if (filtered) {
            if (this.selectedFrets != "All") {
              filtered = g.frets == this.selectedFrets;
            }
          }
          this.selectedFrets != "All"
            ? (this.fretsFiltered = 1)
            : (this.fretsFiltered = 0);
          // ORIGIN
          if (filtered) {
            if (this.selectedOrigin != "All") {
              filtered = g.origin == this.selectedOrigin;
            }
          }
          this.selectedOrigin != "All"
            ? (this.originFiltered = 1)
            : (this.originFiltered = 0);
          // OWNERSHIP
          if (filtered) {
            if (this.selectedOwnership != "All") {
              filtered = g.ownership.status == this.selectedOwnership;
            }
          }
          this.selectedOwnership != "All"
            ? (this.ownershipFiltered = 1)
            : (this.ownershipFiltered = 0);
          // PICKUPS
          if (filtered) {
            if (this.selectedPickups != "All") {
              filtered = g.pickups.conf == this.selectedPickups;
            }
          }
          this.selectedPickups != "All"
            ? (this.pickupsFiltered = 1)
            : (this.pickupsFiltered = 0);
          // SCALE
          if (filtered) {
            if (this.selectedScale != "All") {
              filtered = g.scale == this.selectedScale;
            }
          }
          this.selectedScale != "All"
            ? (this.scaleFiltered = 1)
            : (this.scaleFiltered = 0);
          // STRINGS
          if (filtered) {
            if (this.selectedStrings != "All") {
              filtered = g.strings == this.selectedStrings;
            }
          }
          this.selectedStrings != "All"
            ? (this.stringsFiltered = 1)
            : (this.stringsFiltered = 0);
        }
        return filtered;
      }, this);

      return (this.filteredGuitars = filteredGtrs);
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
};
</script>
