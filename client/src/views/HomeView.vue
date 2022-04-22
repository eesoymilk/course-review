<template>
  <header>
    <nav>
      <ul class="department-nav">
        <li class="department-item">ALL</li>
        <li class="department-item">EECS</li>
        <li class="department-item">OTHER</li>
      </ul>
    </nav>
  </header>

  <main>Hello World!</main>
</template>

<script setup></script>

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
