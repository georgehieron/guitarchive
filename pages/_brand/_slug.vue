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
      <li>{{ this.ownership }}</li>
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
        ownership: filteredGuitar.ownership,
        slug: slug,
      };
    } else {
      redirect("/");
    }
  },
};
</script>
