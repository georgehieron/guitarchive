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
    </form>

    <ul>
      <li v-for="(item, index) in filteredItems" v-bind:key="index">
        <NuxtLink :to="`${item.brandSlug}/${item.modelSlug}`">
          <span>{{ item.name }}</span>
          <ul>
            <li>{{ item.bridge.name }}</li>
          </ul>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
import brands from "./../static/brands.js";
import bridges from "./../static/bridges.js";
import myGuitars from "./../static/guitars.js";

export default {
  data: function () {
    return {
      brands: brands,

      bridges: bridges,

      guitars: myGuitars,

      selectedBrand: "",

      selectedBridge: "",

      search: "",

      disabled: 0,
    };
  },

  mounted: function () {
    this.selectedBrand = "All";
    this.selectedBridge = "All";
  },

  computed: {
    filteredItems: function () {
      let brandFilter = this.selectedBrand,
        bridgeFilter = this.selectedBridge,
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
        }
        return filtered;
      }, this);
    },
  },
};
</script>
