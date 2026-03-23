import { NextResponse } from "next/server";
import { createRedirectionIoMiddleware } from "@redirection.io/vercel-middleware/next";

const myExistingMiddleware = () => {
  return NextResponse.next();
};

const middleware = createRedirectionIoMiddleware({
  nextMiddleware: myExistingMiddleware,
});

export default middleware;

export const config = {
  unstable_allowDynamic: ["/node_modules/@redirection.io/**"],
};
