<script setup>
import { ref, onMounted, computed } from "vue";
import {
  getMachinesStatusOverview,
  getMachinesMaxCapcity,
} from "@services/locationService";
import { getMealsCountTotal } from "@services/mealService";

const machinesStatusOverview = ref(null);
const availableMealsPercentage = ref(null);

onMounted(async () => {
  const {
    data: getMachinesStatusOverviewData,
    error: getMachinesStatusOverviewError,
  } = await getMachinesStatusOverview();

  machinesStatusOverview.value = getMachinesStatusOverviewData;

  const { data: getMealsCountTotalData, error: getMealsCountTotalError } =
    await getMealsCountTotal();

  const { data: getMachinesMaxCapcityData, error: getMachinesMaxCapcityError } =
    await getMachinesMaxCapcity();

  availableMealsPercentage.value =
    (getMealsCountTotalData / getMachinesMaxCapcityData) * 100;
});

const totalAmountOfMachines = computed(() => {
  if (machinesStatusOverview.value) {
    return Object.values(machinesStatusOverview.value).reduce(
      (sum, value) => sum + value,
      0
    );
  }
});
</script>

<template>
  <div class="machines-status-overview">
    <div class="machines-status-overview__percentage">
      <p>
        {{ availableMealsPercentage && Math.floor(availableMealsPercentage) }}%
      </p>
      <span>Meals available</span>
    </div>
    <ul class="machines-status-overview__legend">
      <li class="machines-status-overview__legend-entry">
        <div class="machines-status-overview__legend-entry-color"></div>
        <p>Full</p>
        <span>
          {{ machinesStatusOverview && machinesStatusOverview["full"] }}
          machine{{
            machinesStatusOverview &&
            (machinesStatusOverview["full"] > 1 ||
              machinesStatusOverview["full"] === 0)
              ? "s"
              : ""
          }}
        </span>
      </li>
      <li class="machines-status-overview__legend-entry">
        <div class="machines-status-overview__legend-entry-color"></div>
        <p>Optional refill</p>
        <span>
          {{
            machinesStatusOverview && machinesStatusOverview["optional refill"]
          }}
          machine{{
            machinesStatusOverview &&
            (machinesStatusOverview["optional refill"] > 1 ||
              machinesStatusOverview["optional refill"] === 0)
              ? "s"
              : ""
          }}
        </span>
      </li>
      <li class="machines-status-overview__legend-entry">
        <div class="machines-status-overview__legend-entry-color"></div>
        <p>Urgent refill</p>
        <span>
          {{
            machinesStatusOverview && machinesStatusOverview["urgent refill"]
          }}
          machine{{
            machinesStatusOverview &&
            (machinesStatusOverview["urgent refill"] > 1 ||
              machinesStatusOverview["urgent refill"] === 0)
              ? "s"
              : ""
          }}
        </span>
      </li>
      <li class="machines-status-overview__legend-entry">
        <div class="machines-status-overview__legend-entry-color"></div>
        <p>Empty</p>
        <span>
          {{ machinesStatusOverview && machinesStatusOverview["empty"] }}
          machine{{
            machinesStatusOverview &&
            (machinesStatusOverview["empty"] > 1 ||
              machinesStatusOverview["empty"] === 0)
              ? "s"
              : ""
          }}
        </span>
      </li>
    </ul>
    <div class="machines-status-overview__status-bar">
      <div
        class="machines-status-overview__status-bar-full"
        :style="{
          width: `${
            machinesStatusOverview &&
            (machinesStatusOverview['full'] / totalAmountOfMachines) * 100
          }%`,
        }"
      ></div>
      <div
        class="machines-status-overview__status-bar-optional-refill"
        :style="{
          width: `${
            machinesStatusOverview &&
            (machinesStatusOverview['optional refill'] /
              totalAmountOfMachines) *
              100
          }%`,
        }"
      ></div>
      <div
        class="machines-status-overview__status-bar-urgent-refill"
        :style="{
          width: `${
            machinesStatusOverview &&
            (machinesStatusOverview['urgent refill'] / totalAmountOfMachines) *
              100
          }%`,
        }"
      ></div>
      <div
        class="machines-status-overview__status-bar-empty"
        :style="{
          width: `${
            machinesStatusOverview &&
            (machinesStatusOverview['empty'] / totalAmountOfMachines) * 100
          }%`,
        }"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.machines-status-overview {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  &__percentage {
    display: flex;
    align-items: flex-end;
    gap: var(--space-xs);

    & > p {
      font-size: var(--fs-2xl);
      color: var(--clr-black);
      line-height: var(--lh-xs);
    }

    & > span {
      color: var(--clr-black);
      line-height: var(--lh-xs);
      margin-bottom: var(--space-2xs);
    }
  }

  &__legend {
    display: flex;
    justify-content: space-between;
    padding-right: var(--space-4xl);
  }

  &__legend-entry {
    display: flex;
    align-items: center;
    gap: var(--space-sm);

    & > span {
      color: var(--clr-gray-700);
    }

    &:nth-child(1) {
      .machines-status-overview__legend-entry-color {
        background-color: var(--clr-green-500);
      }
    }

    &:nth-child(2) {
      .machines-status-overview__legend-entry-color {
        background-color: var(--clr-green-400);
      }
    }

    &:nth-child(3) {
      .machines-status-overview__legend-entry-color {
        background-color: var(--clr-yellow-400);
      }
    }

    &:nth-child(4) {
      .machines-status-overview__legend-entry-color {
        background-color: var(--clr-red-400);
      }
    }
  }

  &__legend-entry-color {
    height: 1.5rem;
    width: 24px;
    border-radius: var(--border-radius-md);
  }

  &__status-bar {
    display: flex;
    height: 2rem;
    width: 100%;
    background-color: var(--clr-gray-100);
    border-radius: var(--border-radius-md);
    overflow: hidden;
  }

  &__status-bar-full {
    background-color: var(--clr-green-500);
  }

  &__status-bar-optional-refill {
    background-color: var(--clr-green-400);
  }

  &__status-bar-urgent-refill {
    background-color: var(--clr-yellow-400);
  }

  &__status-bar-empty {
    background-color: var(--clr-red-400);
  }
}
</style>
