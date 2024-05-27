import { RouteLocationNormalized } from "vue-router";

export default function middlewarePipeline(context: { to?: RouteLocationNormalized; from?: RouteLocationNormalized; next: any; }, middleware: { [x: string]: any; }, index: number) {
  const nextMiddleware = middleware[index];

  if (!nextMiddleware) {
    return context.next;
  }

  return (params: any) => {
    if (params) {
      return context.next(params);
    }

    nextMiddleware({
      ...context,
      next: middlewarePipeline(context, middleware, index + 1),
    });
  };
}
