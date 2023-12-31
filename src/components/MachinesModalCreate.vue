<script setup>
import { ref } from "vue";
import { Form } from "vee-validate";
import { createLocation } from "@services/locationService";
import { useRouter } from "vue-router";
import { useNotificationStore } from "@stores/NotificationStore";
import { useModalStore } from "@stores/ModalStore";
import * as yup from "yup";

import BaseButton from "@components/BaseButton.vue";
import BaseFormRow from "@components/BaseFormRow.vue";
import BaseFormInput from "@components/BaseFormInput.vue";
import BaseFormFieldset from "@components/BaseFormFieldset.vue";
import BaseMultistepFormProgressBar from "@components/BaseMultistepFormProgressBar.vue";
import MachinesModalCreatePlanStructure from "@components/MachinesModalCreatePlanStructure.vue";

const router = useRouter();
const { closeModal } = useModalStore();
const { addNotification } = useNotificationStore();

const machineLocationFormActiveStep = ref(1);

const machineLocationFormStepsInfo = ["Machine info", "Plan structure"];

const machineLocationValidationSchema = yup.object({
  locationName: yup.string().required("Machine name is required"),
  locationCapacity: yup.number().required("Machine capacity is required"),
  locationStreet: yup.string().required("A street is required"),
  locationStreetNumber: yup.number().required("A street number is required"),
  locationPostalCode: yup.number().required("A postal code is required"),
  locationCity: yup.string().required("A city is required"),
  locationCountry: yup.string().required("A country is required"),
  locationLatitude: yup.number().required("A latitude is required"),
  locationLongitude: yup.number().required("A longitude is required"),
  locationPlan: yup.array().of(
    yup.object().shape({
      dishName: yup.string().required(),
      dishId: yup.string().required(),
      dishQuantity: yup.number().required().integer().positive(),
    })
  ),
});

const handleMachineLocationFormSubmit = async (values) => {
  closeModal();

  const { data: createLocationData, error: createLocationError } =
    await createLocation({
      locationType: "Machine",
      locationCapacity: values.locationCapacity,
      locationName: values.locationName,
      locationStreet: values.locationStreet,
      locationStreetNumber: values.locationStreetNumber,
      locationPostalCode: values.locationPostalCode,
      locationCity: values.locationCity,
      locationCountry: values.locationCountry,
      locationLatitude: values.locationLatitude,
      locationLongitude: values.locationLongitude,
      locationPlan: values.locationPlan,
    });

  if (createLocationError) {
    addNotification({
      title: "Error!",
      message: "Failed to create location",
      type: "error",
      removeDelay: 2000,
    });
  } else {
    addNotification({
      title: "Succes!",
      message: "Created location succesfully",
      type: "succes",
      removeDelay: 2000,
    });

    setTimeout(() => router.go(), 1200);
  }
};

const handleActiveStepChange = (stepIndex) => {
  machineLocationFormActiveStep.value = stepIndex;
};
</script>

<template>
  <Form
    @submit="handleMachineLocationFormSubmit"
    :validation-schema="machineLocationValidationSchema"
    class="machines-form-create"
    v-slot="{ values }"
  >
    <h3>Add a machine</h3>
    <BaseMultistepFormProgressBar
      :steps="machineLocationFormStepsInfo"
      :activeStep="machineLocationFormActiveStep"
      @activeStepChange="handleActiveStepChange"
    >
    </BaseMultistepFormProgressBar>
    <div
      v-show="machineLocationFormActiveStep === 1"
      class="machines-form-create__machine-info"
    >
      <BaseFormFieldset label="General info">
        <BaseFormInput
          name="locationName"
          label="Name"
          placeholder="type machine name"
        />
        <BaseFormInput
          name="locationCapacity"
          label="Capacity"
          placeholder="type machine capacity"
        />
      </BaseFormFieldset>
      <BaseFormFieldset label="Location info">
        <BaseFormRow>
          <BaseFormInput
            name="locationStreet"
            label="Street"
            placeholder="type the machine street"
          />
          <BaseFormInput
            name="locationStreetNumber"
            label="Street number"
            placeholder="type the machine street number"
          />
        </BaseFormRow>
        <BaseFormRow>
          <BaseFormInput
            name="locationPostalCode"
            label="Postal code"
            placeholder="type the machine postal code"
          />
          <BaseFormInput
            name="locationCity"
            label="City"
            placeholder="type the machine city"
          />
        </BaseFormRow>
        <BaseFormRow>
          <BaseFormInput
            name="locationCountry"
            label="Country"
            placeholder="type the machine country"
          />
        </BaseFormRow>
      </BaseFormFieldset>
      <BaseFormFieldset
        label="Geolocation info"
        description="To easily show locations on a map we need the latitude and longitude of the address. Type the address in to google maps and copy the coordinates into the fields below."
      >
        <BaseFormRow>
          <BaseFormInput
            name="locationLatitude"
            label="Latitude"
            placeholder="type the latitude"
          />
          <BaseFormInput
            name="locationLongitude"
            label="Longitude"
            placeholder="type the longitude"
          />
        </BaseFormRow>
      </BaseFormFieldset>
      <div class="machines-form-create__machine-info-action-buttons">
        <BaseButton
          @click.prevent="handleActiveStepChange(2)"
          stretch="fit-content"
        >
          Continue
        </BaseButton>
      </div>
    </div>
    <div
      v-show="machineLocationFormActiveStep === 2"
      class="machines-form-create__plan-structure"
    >
      <BaseFormFieldset
        label="Plan the machines inventory structure"
        description="Select which meals this machines should idealy have in stock. By specifiing a specific structure choosing how to fill up the machines later will easier."
      >
        <MachinesModalCreatePlanStructure
          :machineCapacity="Number(values.locationCapacity) || undefined"
          name="locationPlan"
        />
      </BaseFormFieldset>
      <div class="machines-form-create__plan-structure-action-buttons">
        <BaseButton
          @click.prevent="handleActiveStepChange(1)"
          stretch="fit-content"
          type="outlined"
          variant="tertiary"
        >
          Previous step
        </BaseButton>
        <BaseButton stretch="fit-content"> Add machine </BaseButton>
      </div>
    </div>
  </Form>
</template>

<style lang="scss" scoped>
.machines-form-create {
  display: flex;
  flex-direction: column;

  & > h3 {
    font-size: var(--fs-lg);
    margin-bottom: var(--space-lg);
  }

  &__machine-info-action-buttons,
  &__plan-structure-action-buttons {
    display: flex;
    justify-content: flex-end;
    gap: var(--space-md);
  }
}
</style>
