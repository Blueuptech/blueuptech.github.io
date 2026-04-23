---
layout: home
title: BlueUP
titleTemplate: false

hero:
  name: BlueUP
  text: Redirecting...
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

onMounted(() => {
  const lang = navigator.language?.startsWith('en') ? '/en/' : '/es/'
  window.location.replace(lang)
})
</script>
