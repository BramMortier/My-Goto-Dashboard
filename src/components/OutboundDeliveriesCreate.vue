<script setup>
import { Form } from "vee-validate";

import BaseFormFieldset from "@components/BaseFormFieldset.vue";
import BaseFormRow from "@components/BaseFormRow.vue";
import OutboundDeliveriesCreateTruckDriversList from "@components/OutboundDeliveriesCreateTruckDriversList.vue";
import OutboundDeliveriesCreateTrucksList from "@components/OutboundDeliveriesCreateTrucksList.vue";
</script>

<template>
  <Form class="outbound-deliveries-form-create">
    <BaseFormRow>
      <BaseFormFieldset label="Assign a driver">
        <OutboundDeliveriesCreateTruckDriversList
          name="outboundDeliveryTruckDriver"
        />
      </BaseFormFieldset>
      <BaseFormFieldset label="Choose a truck">
        <OutboundDeliveriesCreateTrucksList name="outboundDeliveryTruck" />
      </BaseFormFieldset>
    </BaseFormRow>
    <BaseFormFieldset label="Choose machines to refill"></BaseFormFieldset>
  </Form>
</template>

<style lang="scss" scoped></style>
