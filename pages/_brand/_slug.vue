<template>
  <div>
    <h1>{{ this.brand }} {{ this.name }}</h1>
    <ul>
      <li>{{ this.bridge.name }} ({{ this.bridge.type }})</li>
    </ul>
  </div>
</template>

<script>
import myGuitars from "../../static/guitars.js";

export default {
  async asyncData({ params, redirect }) {
    const slug = params.slug;

    const guitars = myGuitars;

    const filteredGuitar = guitars.find(
      (el) =>
        el.brand.toLowerCase() === params.brand &&
        el.name.toLowerCase() === params.slug
    );
    if (filteredGuitar) {
      return {
        brand: filteredGuitar.brand,
        name: filteredGuitar.name,
        bridge: filteredGuitar.bridge,
        slug: slug,
      };
    } else {
      redirect("/");
    }
  },
};
</script>
