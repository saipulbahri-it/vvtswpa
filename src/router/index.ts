import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";
// import { trackRouter } from "vue-gtag-next";
// import store from "./store";
// import middlewarePipeline from "../middleware/middlewarePipeline";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  // Extract the metadata from the route
  const { title, description } = to.meta as {
    title?: string;
    description?: string;
  };

  // Set default title and description
  const defaultTitle = "Default Title";
  const defaultDescription = "Default Description";

  // Update the document title
  document.title = title || defaultTitle;

  // Update the meta description
  const descriptionElement = document.querySelector(
    'head meta[name="description"]'
  );
  if (descriptionElement) {
    descriptionElement.setAttribute(
      "content",
      description || defaultDescription
    );
  }

  // If there is no middleware, proceed to the next route
  if (!to.meta.middleware) {
    return next();
  }

  // Uncomment and adapt the middleware logic as needed
  // const context = {
  //   to,
  //   from: _from,
  //   // store,
  //   next,
  // };

  // return middleware[0]({
  //   ...context,
  //   next: middlewarePipeline(context, to.meta.middleware, 1),
  // });

  return next();
});

// Uncomment to track router if using vue-gtag-next
// trackRouter(router);

export default router;
