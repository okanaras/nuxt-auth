<template>
  <div class="min-h-screen flex items-center">
    <div class="w-full">
      <div class="card p-10 md:w-3/4 mx-auto lg:w-1/3">
        <div class="hero min-h-screen bg-base-200">
          <div class="text-center hero-content">
            <div class="max-w-md">
              <h1 class="text-3xl font-bold">This is Home Page</h1>
              <p class="py-6">Welcome to the Home Page</p>
              <button class="btn btn-primary">Get Started</button>
              <br>
              <button class="btn btn-primary" @click="counter.increment()">
                Counter, {{ counter.count }} - {{ counter.doubleCount }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useCounterStore} from "~/stores/counter.js";

const counter = useCounterStore();
</script>
