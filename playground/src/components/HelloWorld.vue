<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div class="msg">{{ msg }}</div>

  <div class="br"></div>

  <div class="desc">
    See
    <code class="pvi-code">README.md</code>
    for more information.
  </div>

  <p>
    <a href="https://varlet.gitee.io/varlet-ui/#/en-US/home" target="_blank">Varlet Docs</a>
    <span>|</span>
    <a href="https://v3.vuejs.org/" target="_blank">Vue3 Docs</a>
  </p>
</template>

<style scoped>
.msg {
  text-align: center;
  color: #666;
  font-size: 20px;
  margin-top: 10px;
}

a {
  color: #3a7afe;
}

span {
  margin: 0 10px;
  color: #888;
}

.desc {
  margin-top: 10px;
}

.pvi-code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 10px;
  color: #304455;
  margin: 2px 6px;
}

.br {
  width: 50%;
  height: 1px;
  background: #ddd;
  margin-top: 10px;
}
</style>
