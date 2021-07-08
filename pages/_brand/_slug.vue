<template>
  <div>
    <h1>{{ this.name }}</h1>
    <ul>
      <li>{{ this.bridge.name }} ({{ this.bridge.type }})</li>
      <li>{{ this.ownership }}</li>
    </ul>
  </div>
</template>

<script>
import myGuitars from "../../assets/js/guitars.js";

export default {
  async asyncData({ params, redirect }) {
    const slug = params.slug;

    const guitars = myGuitars;

    const filteredGuitar = guitars.find(
      (el) => el.brandSlug === params.brand && el.modelSlug === params.slug
    );
    if (filteredGuitar) {
      return {
        name: filteredGuitar.name,
        brand: filteredGuitar.brand,
        model: filteredGuitar.model,
        bridge: filteredGuitar.bridge,
        ownership: filteredGuitar.ownership,
        slug: slug,
      };
    } else {
      redirect("/");
    }
  },
};
</script>
