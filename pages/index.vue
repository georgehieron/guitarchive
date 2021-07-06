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
        <NuxtLink
          :to="`${item.brand.toLowerCase()}/${item.name.replace(/ /g, '-').toLowerCase()}`"
        >
          <span>{{ item.brand }} {{ item.name }}</span>
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
    };
  },

  mounted: function () {
    this.selectedBrand = "All";
    this.selectedBridge = "All";
  },

  computed: {
    filteredItems: function () {
      let brandFilter = this.selectedBrand,
        bridgeFilter = this.selectedBridge;
      return this.guitars.filter(function (g) {
        let filtered = true;
        if (brandFilter && brandFilter != "All") {
          filtered = g.brand == brandFilter;
        }
        if (filtered) {
          if (bridgeFilter && bridgeFilter != "All") {
            filtered = g.bridge.type == bridgeFilter;
          }
        }
        return filtered;
      }, this);
    },
  },
};
</script>
