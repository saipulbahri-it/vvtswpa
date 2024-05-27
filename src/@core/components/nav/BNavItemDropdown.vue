<template>
    <li class="nav-item dropdown">
        <b-dropdown v-bind="props" :isNav="true">
            <template v-for="(_, slot, index) in $slots" :key="index" #[slot]="scope">
                <slot :name="slot" v-bind="scope || {}" />
            </template>
        </b-dropdown>
    </li>
</template>

<script setup lang="ts">
// @ts-ignore  
import type { ButtonVariant, ClassValue, Size } from '/node_modules/bootstrap-vue-3/src/types'
import { BDropdown } from '../dropdown'

// Unsure of how to include booleanish here
interface BNavItemDropdownProps {
    id?: string
    text?: string
    toggleClass?: ClassValue
    size?: Size
    offset?: string
    autoClose?: boolean | 'inside' | 'outside'
    dark?: boolean
    dropdownLink?: boolean,
    dropleft?: boolean
    dropright?: boolean
    dropup?: boolean
    right?: boolean
    left?: boolean | string
    // offsetParent?: boolean // Breaks tests, does not exist on BDropdown
    split?: boolean
    splitVariant?: ButtonVariant
    noCaret?: boolean
    variant?: ButtonVariant
}

const props = withDefaults(defineProps<BNavItemDropdownProps>(), {
    autoClose: true,
    dark: false,
    dropdownLink: false,
    dropleft: false,
    dropright: false,
    dropup: false,
    right: false,
    left: false,
    // offsetParent: false,
    split: false,
    noCaret: false,
    variant: 'link',
})
</script>