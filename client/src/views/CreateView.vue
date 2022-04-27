<template>
  <div class="form-div">
    <form>
      <h2>課程資訊</h2>
      <div class="form-row">
        <div class="input-field">
          <label>學年度</label>
          <select id="semester" v-model="review.semesterYear">
            <option value="10801">10801</option>
            <option value="10802">10802</option>
            <option value="10901">10901</option>
            <option value="10902">10902</option>
            <option value="11101" selected>11001</option>
          </select>
        </div>
        <div class="input-field">
          <label>開課系所</label>
          <input placeholder="開課系所" v-model="review.department" />
        </div>
        <div class="input-field">
          <label>學分數</label>
          <input placeholder="學分數" v-model="review.credits" />
        </div>
      </div>
      <div class="form-row">
        <div class="input-field">
          <label>課名</label>
          <input placeholder="課名" v-model="review.courseName" />
        </div>
        <div class="input-field">
          <label>授課教師</label>
          <input placeholder="教授名字" v-model="review.instructor" />
        </div>
      </div>
      <h2>課程心得</h2>
      <div class="form-row">
        <div class="input-field">
          <label>心得標題</label>
          <input placeholder="標題" v-model="review.title" />
        </div>
        <div class="input-field">
          <label>心得作者</label>
          <input placeholder="作者" v-model="review.author" />
        </div>
      </div>
      <div class="form-row">
        <div class="input-field">
          <label>甜度</label>
          <input placeholder="甜度" v-model="review.sweetness" />
        </div>
        <div class="input-field">
          <label>涼度</label>
          <input placeholder="涼度" v-model="review.coolness" />
        </div>
      </div>
      <div class="form-row">
        <textarea
          class="input-field"
          placeholder="心得內容"
          v-model="review.body"
        ></textarea>
      </div>
      <div class="form-row">
        <input type="submit" value="上傳" @click.prevent="submitForm()" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import ReviewService from "../services/review";

const router = useRouter();
const review = reactive({
  semesterYear: "11001",
  department: "EE",
  courseName: "",
  instructor: "",
  credits: "3",
  title: "",
  sweetness: "",
  coolness: "",
  body: "",
  author: "Rex.C",
});
const submitForm = async () => {
  console.table(review);
  review.credits = parseInt(review.credits);
  review.sweetness = parseInt(review.sweetness);
  review.coolness = parseInt(review.coolness);
  console.table(review);
  if (await ReviewService.createReview(review)) router.push({ name: "Home" });
};
</script>

<style>
h2 {
  text-align: center;
}

.form-div {
  width: 80%;
  margin: 50px auto;
}

.form-row {
  display: flex;
  justify-content: center;
}

.form-row > div {
  flex: 1 1 100%;
}

.input-field {
  display: flex;
  align-items: center;
}

input,
textarea,
select {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 22px;
  background-color: transparent;
  border: 2px solid #66cc66;
  transition: all 0.3s;
  padding: 13px;
  margin: 13px;
  margin-bottom: 15px;
  flex-grow: 1;
  box-sizing: border-box;
  outline: 0;
}

input:focus,
textarea:focus {
  border: 2px solid #66cc66;
}

textarea {
  height: 35vw;
  line-height: 150%;
  resize: vertical;
}

[type="submit"] {
  font-family: "Montserrat", Arial, Helvetica, sans-serif;
  width: 100%;
  background: #2b832b;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
}
[type="submit"]:hover {
  background: #cc4949;
}
</style>
