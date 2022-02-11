<template>
  <div class="grid grid-cols-4 gap-2 my-3">
    <div class="shaddow bg-white rounded-md col-span-1 p-3 flex flex-col justify-between">
      <div class="mb-4 text-[15px] text-[#A1A6AD]">Дата</div>
      <div
        class="text-[#6C757D] text-[28px]"
      >{{dateFromTs.day}}/{{dateFromTs.month}}/{{dateFromTs.year}}</div>
    </div>

    <div class="shaddow bg-white rounded-md col-span-1 p-3 flex flex-col justify-between">
      <div class="mb-4 text-[15px] text-[#A1A6AD]">Размер</div>
      <div class="text-[#6C757D] text-[28px]">{{size}} мм.</div>
    </div>

    <div class="shaddow bg-white rounded-md col-span-1 p-3 flex flex-col justify-between">
      <div class="mb-4 text-[15px] text-[#A1A6AD]">Выдержка</div>
      <div :class="{'!text-[#14CDB7]': exposure<100}" class="text-[#E73A82] text-[28px]">
        <span class="font-semibold">{{exposure}}</span>&nbsp;мин.
      </div>
    </div>

    <div class="shaddow bg-white rounded-md col-span-1 p-3 flex flex-col justify-between">
      <div class="mb-4 text-[15px] text-[#A1A6AD]">Оборот</div>
      <div :class="{'!text-[#14CDB7]':turn<100}" class="text-[#E73A82] text-[28px]">
        <span class="font-semibold">{{turn}}</span>&nbsp;мин.
      </div>
    </div>
  </div>
</template>

<script>
import tsToDate from "~/helpers/tsToDate";

export default {
  name: "generalInfo",
  data() {
    return {
      dateFromTs: {},
    };
  },
  mounted() {
    this.dateFromTs = tsToDate(this.date);
  },
  props: {
    date: Number,
    exposure: Number,
    size: String,
    turn: Number,
  },
};
</script>

<style>
</style>