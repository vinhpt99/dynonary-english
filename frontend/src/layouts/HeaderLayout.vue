<template>
  <v-app-bar :elevation="2">
    <v-container class="max-w-[75%] h-[100%]">
      <v-row class="px-9 flex justify-items-center">
        <v-col cols="6" class="p-0">
          <v-img :src="logoImg" class="w-12 h-12"></v-img>
        </v-col>
        <v-col cols="6" class="flex gap-4 pr-0 mt-[-3px]">
          <v-text-field density="compact" variant="outlined" :border="true" prepend-inner-icon="mdi-magnify"
            placeholder="Nhập từ khóa...">
          </v-text-field>
          <v-btn color="white" height="40" class="bg-forest-green min-w-[110px] ml-auto normal-case btn-login">
            Đăng nhập
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script setup lang="ts">
import logoImg from "@/assets/images/logo.png"
</script>
<style lang="scss">
.btn-login {
  .v-btn__content {
    font-weight: bold;
  }
}
</style>
