<template>
  <button class="list-title-button">
    <img class="icon-list" :src="imageSrc" alt="liste">
    <p class="button-text">{{ title }}</p>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
import listClassic from '../../assets/list-classic-not-complete.svg'
import listClassicComplete from '../../assets/list-classic-complete.svg'
import listDaily from '../../assets/list-daily-not-complete.svg'
import listDailyComplete from '../../assets/list-daily-complete.svg'
import listAnalytics from '../../assets/list-analytics-not-complete.svg'
import listAnalyticsComplete from '../../assets/list-analytics-complete.svg'

const props = defineProps({
  title: {
    type: String,
    required: true,
      },
  isComplete: {
    type: Boolean,
    default: false
  },
  type: {
    type: String, // 
    required: true,
    validator: (value) => {
      return ['analytics', 'daily', 'classic'].includes(value)
    }
  }
})

const imageSrc = computed(() => {
  if (props.type === 'daily') {
    return props.isComplete
      ? listDailyComplete
      : listDaily
  } else if (props.type === 'analytics') {
    return props.isComplete
      ? listAnalyticsComplete
      : listAnalytics
  }
  // classique par défaut
  return props.isComplete
    ? listClassicComplete
    : listClassic
})
</script>

