<template>
  <div class="spinners" v-show="$store.state.alert.loading">
    <div class="spinners2">
      <div>
        <p class="mb-3">Loading ...</p>
        <div
          v-for="n in 5"
          :key="n"
          class="spinner-grow text-danger me-2"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.spinners {
  position: absolute;
  z-index: 9999;
  background-color: rgba(22, 22, 22, 0.365);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.spinners2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: rgb(36, 36, 36);
}

.spinners2 p {
  color: #fff;
}
</style>
