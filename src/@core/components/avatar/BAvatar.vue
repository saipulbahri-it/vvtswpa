<template>
  <span class="avatar" :class="computedClasses" :style="computedStyle" @click="clicked">
    <img v-if="src" :src="src" class="avatar-img" :alt="alt" />
  </span>
</template>
<script lang="ts" setup>
import { computed, type CSSProperties } from "vue";

interface BAvatarProps {
  alt?: string,
  size?: 'sm' | 'md' | 'lg' | string,
  src?: string,
  image?: string
}

const props = withDefaults(defineProps<BAvatarProps>(), {
  alt: 'avatar',
  badge: false,
  badgeLeft: false,
  badgeTop: false,
  badgeVariant: 'primary',
  button: false,
  buttonType: 'button',
  disabled: false,
  rounded: 'circle',
  square: false,
  variant: 'secondary',
  size: undefined,
  src: undefined,
  image: undefined
})

const computedStyle = computed<CSSProperties>(() => {
  const image = props.image ? { backgroundImage: `url(${props.image})` } : null
  const styles = { ...image }
  return styles;
})

const computedClasses = computed(() => [
  { [`avatar-${props.size}`]: props.size }
]);

const clicked = (e: MouseEvent): void => {
  // if (!disabledBoolean.value && buttonBoolean.value) emit('click', e)
  console.log(e);
};
</script>
