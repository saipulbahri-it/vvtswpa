const Home = () => import("../pages/Home.vue");
const NotFound = () => import("../pages/NotFound.vue");

const WilayahTps = () => import("../pages/WilayahTps.vue");

export default [
  {
    path: "/",
    component: Home,
    name: "home",
    meta: { title: "Filter Frameworks", pretitle: "Test Rxjs" },
  },
  {
    path: "/wilayah",
    component: WilayahTps,
    name: "wilayah",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "NotFound",
  },
];
