<script setup>
import Copyright from "./components/Copyright.vue";
import { ref } from "vue";

const cal = ref("");

const handleCalculation = () => {
  try {
    const result = eval(cal.value);
    cal.value = result;
  } catch (error) {
    cal.value = "";
  }
};

const appendCalculation = (value) => {
  cal.value += value;
};

const handlePressKey = (e) => {
  if (e.charCode === 13 || e.code === "Enter") {
    handleCalculation();
  }
};
</script>
<template>
  <div class="container py-20">
    <form
      autocomplete="off"
      @submit.prevent="handleCalculation"
      class="max-w-sm py-10 bg-black rounded-lg mx-auto border border-solid border-black p-5 shadow-xl shadow-black"
    >
      <div>
        <input
          type="text"
          name="cal"
          id="cal"
          v-model="cal"
          class="border border-solid border-black w-full h-14 px-4 text-base"
          @keypress="handlePressKey"
        />
      </div>
      <div class="grid grid-cols-4 gap-2 mt-10">
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation(7)"
          >
            7
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation(8)"
          >
            8
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation(9)"
          >
            9
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation('+')"
          >
            +
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation(4)"
          >
            4
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation(5)"
          >
            5
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation(6)"
          >
            6
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation('-')"
          >
            -
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation(1)"
          >
            1
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation(2)"
          >
            2
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation(3)"
          >
            3
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation('*')"
          >
            *
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation(0)"
          >
            0
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation('.')"
          >
            .
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="submit"
          >
            =
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="button"
            @click="appendCalculation('/')"
          >
            /
          </button>
        </div>
        <div class="col-span-1">
          <button
            class="text-center p-4 bg-gray-600 hover:bg-gray-800 transition-all border-solid border border-black rounded-md font-bold text-white w-full h-20 flex items-center justify-center focus:bg-red-600"
            type="reset"
            @click="cal = ''"
          >
            C
          </button>
        </div>
        <div class="col-span-3 flex items-center justify-center text-white">
          <h1 class="text-3xl text-center uppercase font-semibold">
            Calculation
          </h1>
        </div>
      </div>
    </form>
    <Copyright />
  </div>
</template>

<style></style>
