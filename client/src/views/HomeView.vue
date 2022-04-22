<template>
  <header>
    <nav>
      <ul class="department-nav">
        <li @click="changeDepartment('ALL')" class="department-item">ALL</li>
        <li @click="changeDepartment('EECS')" class="department-item">EECS</li>
        <li @click="changeDepartment('OTHER')" class="department-item">
          OTHER
        </li>
      </ul>
    </nav>
  </header>

  <main>{{ selected }}</main>
</template>

<script setup>
import { ref } from "vue";

const selected = ref("");
const changeDepartment = (department) => {
  selected.value = department;
};
</script>

<style>
.department-nav {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
}
.department-item {
  flex: 1 1 100%;
  text-align: center;
}
</style>
