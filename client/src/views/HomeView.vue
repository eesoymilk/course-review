<template>
  <nav class="department-nav">
    <div
      v-for="d in Departments"
      :key="d"
      :class="[
        'department-item',
        { 'department-item-seleted': d === selected },
      ]"
      @click="selected = d"
      v-text="d.toUpperCase()"
    ></div>
  </nav>
  <ReviewOverview :reviews="filteredReviews" />
</template>

<script setup>
import { computed, ref } from "vue";
import ReviewService from "../services/review";
import ReviewOverview from "../components/ReviewOverview.vue";

const Departments = ["All", "EECS", "Other"];
const selected = ref("All");
const reviews = ref(await ReviewService.getReviews());
const filteredReviews = computed(() => {
  if (selected.value === "EECS")
    return reviews.value.filter(
      (r) => r.department.includes("EE") || r.department.includes("CS")
    );
  if (selected.value === "Other")
    return reviews.value.filter(
      (r) => !r.department.includes("EE") && !r.department.includes("CS")
    );
  return reviews.value;
});
</script>

<style>
.nav-bar {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

.nav-links > span {
  font-size: 1.5rem;
  margin: 1rem;
}

.department-nav {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}

.department-item {
  flex: 1 1 100%;
  text-align: center;
}

.department-item:hover {
  background-color: rgb(115, 115, 115);
  color: white;
}

.department-item-seleted {
  background-color: antiquewhite;
}
</style>
