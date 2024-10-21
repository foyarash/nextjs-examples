import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { createRedirectionIoMiddleware } from "@redirection.io/vercel-middleware/next";
import { routing } from "./i18n/routing";

async function i18nMiddleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware(routing);

  const response = handleI18nRouting(request);

  return response;
}

const middleware = createRedirectionIoMiddleware({
  previousMiddleware: i18nMiddleware,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};

export default middleware;
