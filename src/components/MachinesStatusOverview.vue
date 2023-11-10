<script setup></script>

<template>
  <div class="machines-status-overview">
    <div class="machines-status-overview__percentage">
      <p>86%</p>
      <span>Meals available</span>
    </div>
    <ul class="machines-status-overview__legend">
      <li class="machines-status-overview__legend-entry">
        <div class="machines-status-overview__legend-entry-color"></div>
        <p>Full</p>
        <span>3 machines</span>
      </li>
      <li class="machines-status-overview__legend-entry">
        <div class="machines-status-overview__legend-entry-color"></div>
        <p>Optional refill</p>
        <span>2 machines</span>
      </li>
      <li class="machines-status-overview__legend-entry">
        <div class="machines-status-overview__legend-entry-color"></div>
        <p>Urgent refill</p>
        <span>5 machines</span>
      </li>
      <li class="machines-status-overview__legend-entry">
        <div class="machines-status-overview__legend-entry-color"></div>
        <p>Empty</p>
        <span>1 machine</span>
      </li>
    </ul>
    <div class="machines-status-overview__status-bar">
      <div
        class="machines-status-overview__status-bar-full"
        :style="{ width: `30%` }"
      ></div>
      <div
        class="machines-status-overview__status-bar-optional-refill"
        :style="{ width: `30%` }"
      ></div>
      <div
        class="machines-status-overview__status-bar-urgent-refill"
        :style="{ width: `20%` }"
      ></div>
      <div class="machines-status-overview__status-bar-empty"></div>
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
        background-color: var(--clr-gray-100);
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
}
</style>
