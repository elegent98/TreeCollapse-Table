<template>
  <div class="container">
    <div class="datatable">
      <div class="table info">
        <div class="table-header">
          <div
            class="table-header_item"
            v-for="item in headers"
            :key="item"
            :style="{ width: item.width + 'px' }"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="table-body">
          <div class="table-body_item" v-for="item in data" :key="item">
            <p class="name" :style="{ width: data_width[0] + 'px' }">{{ item.name }}</p>
            <p class="age" :style="{ width: data_width[1] + 'px' }">{{ item.age }}</p>
            <p class="address" :style="{ width: data_width[2] + 'px' }">
              {{ item.address }}
            </p>
            <div class="tags" :style="{ width: data_width[3] + 'px' }">
              <p>
                <span :class="item.status == 'loser' ? 'danger' : 'success'">{{
                  item.status
                }}</span>
              </p>
              <p>
                <span class="job" v-show="item.job != ''">{{ item.job }}</span>
              </p>
            </div>
            <div class="action" :style="{ width: data_width[4] + 'px' }">
              <div>Taklif qilish - {{ item.name }}</div>
              <div>O'chirish</div>
              <div @click="editdata(item.id)">Tahrirlash</div>
              <div>Ko'proq</div>
            </div>
          </div>
        </div>
        <RouterLink class="separate" to="/">Bosh Menu</RouterLink>
      </div>
    </div>
    
  </div>
  <div class="editing">
            <div>
              <h6>Name</h6>
              <input type="text" class="border border-gray-500 px-3 py-2" />
            </div>
            <div>
              <h6>Age</h6>
              <input type="Number" class="border border-gray-500 px-3 py-2" />
            </div>
            <div>
              <h6>Address</h6>
              <input type="text" class="border border-gray-500 px-3 py-2" />
            </div>
            <div>
              <h6>Tags</h6>
              <input type="text" class="border border-gray-500 px-3 py-2" />
            </div>
            <div>
              <h6>Action</h6>
              <input type="text" class="border border-gray-500 px-3 py-2" />
            </div>
            <button class="btnout" >
            Save
            </button>
          </div>
</template>
<script setup>
import { defineProps, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
const { headers, data } = defineProps(["headers", "data"]);
const data_width = ref([]);
onMounted(() => {
  let list = [];
  for (let item in headers) {
    list.push(headers[item].width);
  }
  data_width.value = list;
});



</script>

<style></style>
