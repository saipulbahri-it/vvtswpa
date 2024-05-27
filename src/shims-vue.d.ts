// declare module "*.vue" {
//   import type { DefineComponent } from "vue";
//   // eslint-disable-next-line @typescript-eslint/ban-types
//   const component: DefineComponent<object, object, any>;
//   // const component: DefineComponent<{}, {}, any>;
//   export default component;
// }

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module "bootstrap";

// declare module "bootstrap-vue-3";
// import { BNavItemDropdown } from "bootstrap-vue-3/src/components/";
// export { BNavItemDropdown };
