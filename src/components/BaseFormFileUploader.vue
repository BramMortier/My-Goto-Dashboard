<script setup>
import { ref } from "vue";
import { useField } from "vee-validate";

import BaseButton from "@components/BaseButton.vue";

const props = defineProps({
  name: String,
  emptyMessage: String,
});

const fileInput = ref(null);
const selectedFile = ref(null);
const filePreviewURL = ref(null);

const { value, errorMessage } = useField(props.name);

const handleFileInputChange = () => {
  const file = fileInput.value.files[0];
  selectedFile.value = file;
  value.value = file;

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
      :class="{ 'file-uploader__error-feedback': errorMessage }"
      :style="{ backgroundImage: `url(${filePreviewURL})` }"
    >
      <div v-if="!selectedFile" class="file-uploader__upload-empty-message">
        <img src="@assets/icons/upload.svg" alt="file icon" />
        <p>{{ props.emptyMessage }}</p>
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
    <p v-if="errorMessage" class="file-uploader__error-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.file-uploader {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  &__upload-preview {
    min-width: var(--input-width-lg);
    border: 1px solid transparent;
    width: 100%;
    height: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
    gap: var(--space-xs);

    & > img {
      filter: invert(93%) sepia(1%) saturate(0%) hue-rotate(214deg)
        brightness(95%) contrast(90%);
      width: 4rem;
      height: fit-content;
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

  &__error-message {
    font-size: var(--fs-sm);
    color: var(--clr-red-400);
    line-height: var(--lh-xs);
  }

  &__error-feedback {
    border: 1px solid var(--clr-red-400);
  }
}
</style>
