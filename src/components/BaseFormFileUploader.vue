<script setup>
import { ref } from "vue";

import BaseButton from "@components/BaseButton.vue";

const fileInput = ref(null);
const selectedFile = ref(null);
const filePreviewURL = ref(null);

const handleFileInputChange = () => {
  const file = fileInput.value.files[0];
  selectedFile.value = file;

  console.log(selectedFile);

  const reader = new FileReader();
  reader.onload = () => (filePreviewURL.value = reader.result);
  reader.readAsDataURL(file);
};
</script>

<template>
  <div class="file-uploader">
    <div
      class="file-uploader__upload-preview"
      :style="{ backgroundImage: `url(${filePreviewURL})` }"
    >
      <div class="file-uploader__upload-empty-message">
        <img src="@assets/icons/file.svg" alt="file icon" />
        <p>Upload a supplier logo</p>
      </div>
    </div>
    <div class="file-uploader__upload-button">
      <BaseButton stretch="fit-content" @click.prevent="fileInput.click()"
        >Choose a file</BaseButton
      >
      <p v-if="selectedFile">{{ selectedFile.name }}</p>
    </div>
    <input
      type="file"
      ref="fileInput"
      class="file-uploader__input"
      @change="handleFileInputChange"
      accept="image/*"
    />
  </div>
</template>

<style lang="scss" scoped>
.file-uploader {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  &__upload-preview {
    min-width: var(--input-width-lg);
    width: 100%;
    padding-block: var(--space-2xl);
    background-color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &__upload-empty-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);

    & > img {
      filter: invert(93%) sepia(1%) saturate(0%) hue-rotate(214deg)
        brightness(95%) contrast(90%);
      height: 4rem;
      width: fit-content;
    }
  }

  &__upload-button {
    display: flex;
    align-items: center;
    gap: var(--space-md);
  }

  &__input {
    display: none;
  }
}
</style>
