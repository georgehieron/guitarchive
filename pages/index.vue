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
        <select
          name="bridge"
          id="bridge"
          v-model="selectedBridge"
          :disabled="disabled == 1"
        >
          <option value="All">All</option>
          <option
            v-for="(bridge, index) in bridges"
            v-bind:value="bridge.type"
            v-bind:key="index"
          >
            {{ bridge.type }}
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
            v-bind:value="ownership.name"
            v-bind:key="index"
          >
            {{ ownership.name }}
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
            <li>{{ item.ownership }}</li>
          </ul>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
import myGuitars from "../assets/js/guitars.js";
import brands from "../assets/js/brands.js";
import bridges from "../assets/js/bridges.js";
import ownerships from "../assets/js/ownerships.js";

export default {
  data: function () {
    return {
      guitars: myGuitars,

      brands: brands,
      selectedBrand: "",

      bridges: bridges,
      selectedBridge: "",

      ownerships: ownerships,
      selectedOwnership: "",

      search: "",

      disabled: 0,
    };
  },

  mounted: function () {
    this.selectedBrand = "All";
    this.selectedBridge = "All";
    this.selectedOwnership = "All";
  },

  computed: {
    filteredItems: function () {
      let brandFilter = this.selectedBrand,
        bridgeFilter = this.selectedBridge,
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
            if (ownershipFilter && ownershipFilter != "All") {
              console.log("dfsd");
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
