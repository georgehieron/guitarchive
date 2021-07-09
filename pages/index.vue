<template>
  <main>
    <form>
      <div class="search-wrapper">
        <label>Search brand/model:</label>
        <input
          type="text"
          v-model="search"
          placeholder="Search brand/model..."
        />
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
      <br /><br />

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
      <br /><br />

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
      <br /><br />

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
      <br /><br />
    </form>

    <ul>
      <li v-for="(item, index) in filteredItems" v-bind:key="index">
        <NuxtLink :to="`${item.brandSlug}/${item.modelSlug}`">
          <span>{{ item.name }}</span>
          <ul>
            <li>{{ item.bridge.name }}</li>
            <li>{{ item.construction.type }}</li>
            <li>{{ item.ownership }}</li>
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
  constructions,
  ownerships,
} from "../assets/js/guitars.js";

export default {
  data: function () {
    return {
      guitars: guitars,

      brands: brands,
      selectedBrand: "",

      bridges: bridges,
      selectedBridge: "",

      constructions: constructions,
      selectedConstruction: "",

      ownerships: ownerships,
      selectedOwnership: "",

      search: "",

      disabled: 0,
    };
  },

  mounted: function () {
    this.selectedBrand = "All";
    this.selectedBridge = "All";
    this.selectedConstruction = "All";
    this.selectedOwnership = "All";
  },

  computed: {
    filteredItems: function () {
      let brandFilter = this.selectedBrand,
        bridgeFilter = this.selectedBridge,
        constructionFilter = this.selectedConstruction,
        ownershipFilter = this.selectedOwnership,
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
            if (constructionFilter && constructionFilter != "All") {
              filtered = g.construction.type == constructionFilter;
            }
          }
          if (filtered) {
            if (ownershipFilter && ownershipFilter != "All") {
              filtered = g.ownership == ownershipFilter;
            }
          }
        }
        return filtered;
      }, this);
    },
  },
};
</script>
