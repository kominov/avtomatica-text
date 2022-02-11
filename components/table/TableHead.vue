<template>
  <div class="flex justify-between p-3 bg-white rounded-md mt-2 items-center shaddow">
    <div class>
      <span class="text-2xl text-[#6C757D]">Плавка:{{value}}</span>
    </div>
    <div class="flex">
      <div
        @click="counterDown()"
        class="cursor-pointer w-9 h-9 flex justify-center items-center text-white bg-[#727CF4] rounded-l mr-0.5"
      >&larr;</div>
      <div
        @click="counterUp()"
        class="cursor-pointer w-9 h-9 flex justify-center items-center text-white bg-[#727CF4] rounded-r"
      >&rarr;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableHead",

  props: {
    value: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    counterUp() {
      this.$emit("counterUp");
    },

    counterDown() {
      this.$emit("counterDown");
    },
  },
};
</script>

<style>
</style>