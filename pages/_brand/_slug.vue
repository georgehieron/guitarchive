<template>
  <div class="wrapper">
    <div class="padded">
      <h1>{{ this.name }}</h1>
    </div>
    <div class="padded">
      <ul>
        <li>{{ this.bridge.name }} ({{ this.bridge.type }})</li>
        <li>
          {{ this.construction.type
          }}<span v-if="this.construction.detail">
            ({{ this.construction.detail }})</span
          >
        </li>
        <li>{{ this.colour.name }}</li>
        <li>{{ this.fretboard }}</li>
        <li>{{ this.frets }}</li>
        <li v-if="this.origin">{{ this.origin }}</li>
        <li>
          {{ this.ownership.status }}
          <ul v-if="this.ownership.year_bought">
            <li>Year bought: {{ this.ownership.year_bought }}</li>
            <li v-if="this.ownership.year_sold">
              Year sold: {{ this.ownership.year_sold }}
            </li>
          </ul>
        </li>
        <li>
          {{ this.pickups.conf }}
          <ul v-if="this.pickups.bridge">
            <li v-if="this.pickups.bridge">
              Bridge: {{ this.pickups.bridge }}
            </li>
            <li v-if="this.pickups.middle">
              Middle: {{ this.pickups.middle }}
            </li>
            <li v-if="this.pickups.neck">Neck: {{ this.pickups.neck }}</li>
          </ul>
        </li>
        <li v-if="this.scale">{{ this.scale }}</li>
        <li>{{ this.strings }}</li>
        <li v-if="this.year">{{ this.year }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { guitars } from "../../assets/js/guitars.js";

export default {
  data: function () {
    return {
      title: "Guitarchive",
    };
  },

  async asyncData({ params, redirect }) {
    const slug = params.slug;

    const filteredGuitar = guitars.find(
      (g) => g.brandSlug === params.brand && g.modelSlug === params.slug
    );
    if (filteredGuitar) {
      return {
        name: filteredGuitar.name,
        brand: filteredGuitar.brand,
        model: filteredGuitar.model,
        bridge: filteredGuitar.bridge,
        colour: filteredGuitar.colour,
        construction: filteredGuitar.construction,
        fretboard: filteredGuitar.fretboard,
        frets: filteredGuitar.frets,
        origin: filteredGuitar.origin,
        ownership: filteredGuitar.ownership,
        pickups: filteredGuitar.pickups,
        scale: filteredGuitar.scale,
        strings: filteredGuitar.strings,
        year: filteredGuitar.year,
        slug: slug,
      };
    } else {
      redirect("/");
    }
  },

  head() {
    return {
      title: this.name + " | " + this.title,
    };
  },
};
</script>
