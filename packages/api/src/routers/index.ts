import { publicProcedure } from "../index";
import type { RouterClient } from "@orpc/server";
import { emailRouter } from "./email";

export const appRouter = {
	healthCheck: publicProcedure.handler(() => {
		return "OK";
	}),
	email: emailRouter,
};
export type AppRouter = typeof appRouter;
export type AppRouterClient = RouterClient<typeof appRouter>;
