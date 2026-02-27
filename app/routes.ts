import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
route("/plans/:plan?", "Pages/Plans.tsx"), route("/explore/:plan?", "Pages/Explore.tsx")] satisfies RouteConfig;
