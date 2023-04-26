<template>
  <div>
    <HeaderComponent />
    <!-- Conteúdo da página -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HeaderComponent,
  },
});
</script>
