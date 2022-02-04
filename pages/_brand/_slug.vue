<template>
  <div class="guitar-single wrapper">
    <div class="guitar-info">
      <div class="padded">
        <h1>{{ this.name }}</h1>
      </div>
      <div class="padded">
        <table class="guitar-info">
          <tr>
            <th scope="row">Body:</th>
            <td>
              {{ this.body.material
              }}<span v-if="this.body.detail">, {{ this.body.detail }}</span>
            </td>
          </tr>
          <tr>
            <th scope="row">Bridge:</th>
            <td>{{ this.bridge.name }} ({{ this.bridge.type }})</td>
          </tr>
          <tr>
            <th scope="row">Colour:</th>
            <td>{{ this.colour.name }}</td>
          </tr>
          <tr>
            <th scope="row">Construction:</th>
            <td>
              {{ this.construction.type
              }}<span v-if="this.construction.detail">
                ({{ this.construction.detail }})</span
              >
            </td>
          </tr>
          <tr>
            <th scope="row">Fretboard:</th>
            <td>{{ this.fretboard }}</td>
          </tr>
          <tr>
            <th scope="row">Frets:</th>
            <td>{{ this.frets }}</td>
          </tr>
          <tr>
            <th scope="row">Neck:</th>
            <td>{{ this.neck.material }}, {{ this.neck.pcs }} pc.</td>
          </tr>
          <tr v-if="this.origin">
            <th scope="row">Origin:</th>
            <td>Made in {{ this.origin }}</td>
          </tr>
          <tr>
            <th scope="row">Pickups:</th>
            <td>
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
            </td>
          </tr>
          <tr>
            <th scope="row">Scale length:</th>
            <td>{{ this.scale }}</td>
          </tr>
          <tr>
            <th scope="row">Strings:</th>
            <td>{{ this.strings }}</td>
          </tr>
          <tr v-if="this.year">
            <th scope="row">Year:</th>
            <td>{{ this.year }}</td>
          </tr>
          <tr v-if="this.mods">
            <th scope="row">Mods:</th>
            <td>{{ this.mods }}</td>
          </tr>
          <tr>
            <th scope="row">Ownership:</th>
            <td>
              {{ this.ownership.status }}
              <ul v-if="this.ownership.year_bought">
                <li>Year bought: {{ this.ownership.year_bought }}</li>
                <li v-if="this.ownership.year_sold">
                  Year sold: {{ this.ownership.year_sold }}
                </li>
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- <div
      class="guitar-img"
      :style="{ backgroundImage: `url(${this.img})` }"
    ></div> -->
    <div
      class="guitar-img"
      :style="{ backgroundImage: `url(https://www.levytukku.fi/images/products/rg550-dy-00-03_orig.png)` }"
    ></div>
  </div>
</template>

<style>
table {
  border-collapse: collapse;
}

table tr {
  vertical-align: top;
  padding-top: 0.5em;
}

table tr + tr {
  border-top: 1px solid var(--color-primary);
}

table th,
table td {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}

table th {
  padding-left: 0.5em;
  padding-right: 0.75em;
  text-align: right;
}

table td {
  padding-left: 0.75em;
  padding-right: 0.5em;
  border-left: 1px solid var(--color-primary);
}

.guitar-single {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
}

.guitar-info {
  margin-left: auto;
  margin-right: auto;
}

.guitar-img {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-position: top right;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

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
        body: filteredGuitar.body,
        bridge: filteredGuitar.bridge,
        colour: filteredGuitar.colour,
        construction: filteredGuitar.construction,
        fretboard: filteredGuitar.fretboard,
        frets: filteredGuitar.frets,
        img: filteredGuitar.img,
        mods: filteredGuitar.mods,
        neck: filteredGuitar.neck,
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
