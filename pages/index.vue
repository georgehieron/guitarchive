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
          <picture>
            <!-- <img :src="`${gtr.img}`" :alt="`${gtr.name} image`" /> -->
            <img
              :src="`https://www.levytukku.fi/images/products/rg550-dy-00-03-cu-body-top_orig.jpg`"
              :alt="`${gtr.name} image`"
            />
          </picture>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<style>
label[data-filtered="true"] {
  background-image: url("~assets/img/icons/filtered.svg");
  background-position: top right 0.4em;
  background-repeat: no-repeat;
  background-size: 1.25em;
}

label[data-filtered="true"] select {
  background-color: var(--color-shade);
  box-shadow: var(--box-shadow) var(--color-accent);
}

input,
select {
  appearance: none;
  padding-left: 0.5em;
  padding-right: 2em;
  border: 2px solid var(--color-text);
  border-radius: var(--border-radius);
  background-color: var(--color-base);
  background-position: center right 0.25em;
  background-repeat: no-repeat;
  background-size: 1.25em;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

input[type="search"] {
  background-image: url("~assets/img/icons/search.svg");
}

.btn,
button,
select,
input[type="reset"] {
  cursor: pointer;
}

select {
  background-image: url("~assets/img/icons/chevron.svg");
}

select:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

label > input,
label > select {
  display: block;
  width: 100%;
}

.guitar-filter-wrap {
  background-color: var(--color-shade);
}

form.guitar-filter,
ul.guitar-list {
  display: grid;
  grid-column-gap: max(3vw, 1.5rem);
  margin-right: auto;
  margin-bottom: max(3vw, 1.5rem);
  margin-left: auto;
}

.guitar-filter {
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
  align-items: end;
}

ul.guitar-list {
  grid-template-columns: 1fr;
  grid-row-gap: var(--space);
  align-items: stretch;
  padding: calc(var(--space) / 2) var(--space);
}

/* ul.guitar-list > li {
  background-color: var(--color-shade);
} */

ul.guitar-list > li > a {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  border: 2px solid var(--color-primary);
  transition: var(--transition) box-shadow, var(--transition) color,
    var(--transition) border-color;
}

ul.guitar-list > li > a:before {
  content: "";
  position: absolute;
  top: -0.85rem;
  right: -0.85rem;
  display: block;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: radial-gradient(var(--color-primary) 15%, transparent 30%);
  background-color: transparent;
  background-position: 0 0, 0.35rem 0.35rem;
  background-size: 0.35rem 0.35rem;
  transition: var(--transition) top, var(--transition) right;
}

ul.guitar-list > li > a:after {
  content: "";
  position: absolute;
  bottom: -0.85rem;
  left: -0.85rem;
  display: block;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: var(--color-primary);
  opacity: .075;
  transition: var(--transition) bottom, var(--transition) left, var(--transition) background-color, var(--transition) opacity;
}

ul.guitar-list > li > a:hover,
ul.guitar-list > li > a:focus {
  border-color: var(--color-accent);
  box-shadow: var(--box-shadow) var(--color-accent);
}

ul.guitar-list > li > a:hover:before,
ul.guitar-list > li > a:focus:before {
  top: -0.6rem;
  right: -0.6rem;
  background-image: radial-gradient(var(--color-text) 15%, transparent 30%);
}

ul.guitar-list > li > a:hover:after,
ul.guitar-list > li > a:focus:after {
  bottom: -0.6rem;
  left: -0.6rem;
  background-color: var(--color-accent);
  opacity: .3;
}

ul.guitar-list > li > a > span {
  flex: 1 0 auto;
  padding: 1rem;
  background-color: var(--color-shade);
}

ul.guitar-list > li > a > picture {
    flex: 0 0 auto;
    aspect-ratio: 2/1;
    overflow: hidden;
}

ul.guitar-list > li > a > picture > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.search-wrapper {
  grid-column: 1/3;
}

.search-wrapper + label {
  grid-column: 1;
}

.reset-filters {
  grid-column: 2;
  margin-top: calc(var(--space) / 2);
}

@media screen and (min-width: 36rem) {
  ul.guitar-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 48rem) {
  .guitar-filter,
  ul.guitar-list {
    grid-template-columns: repeat(3, 1fr);
  }

  .search-wrapper {
    grid-column: 2;
  }

  .reset-filters {
    grid-column: 3;
  }
}
</style>

<script>
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
            if (this.selectedColour && this.selectedColour != "All") {
              filtered =
                g.colour.primary == this.selectedColour ||
                g.colour.secondary == this.selectedColour;
            }
          }
          // CONSTRUCTION
          if (filtered) {
            if (this.selectedConstruction != "All") {
              filtered = g.construction.type == this.selectedConstruction;
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
              filtered = g.ownership.status == this.selectedOwnership;
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
