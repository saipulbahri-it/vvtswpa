const Home = () => import("../pages/Home.vue");
const NotFound = () => import("../pages/NotFound.vue");

const Votes = () => import("../pages/Votes.vue");

export default [
  {
    path: "/",
    component: Home,
    name: "home",
    meta: { title: "Filter Frameworks", pretitle: "Test Rxjs" },
  },
  {
    path: "/v/:kode(\\d+)?",
    component: Votes,
    name: "votes",
    // meta: { title: "Kab/Kota", pretitle: "Votes" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "NotFound",
  },
];
