<template>
  <div>
    <h1>{{ this.name }}</h1>
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
      <li v-if="this.origin">{{ this.origin }}</li>
      <li>{{ this.ownership }}</li>
      <li>
        {{ this.pickups.conf }}
        <ul v-if="this.pickups.bridge">
          <li v-if="this.pickups.bridge">Bridge: {{ this.pickups.bridge }}</li>
          <li v-if="this.pickups.middle">Middle: {{ this.pickups.middle }}</li>
          <li v-if="this.pickups.neck">Neck: {{ this.pickups.neck }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { guitars } from "../../assets/js/guitars.js";

export default {
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
        origin: filteredGuitar.origin,
        ownership: filteredGuitar.ownership,
        pickups: filteredGuitar.pickups,
        slug: slug,
      };
    } else {
      redirect("/");
    }
  },
};
</script>
