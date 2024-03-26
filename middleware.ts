import createMiddleware from "next-intl/middleware";

import { availableLocaleCodes, defaultLocale } from "@/next.locales.mjs";

function convertArrayToString(array: any) {
	// Joining array elements with ' | ' to form a regular expression pattern
	var regexPattern = "(" + array.join(" | ") + ")";
	// Creating the string "/(pattern)/:path*"
	var resultString = `/${regexPattern}/:path*`;
	return resultString;
}

const localesMatch = convertArrayToString(availableLocaleCodes);

export default createMiddleware({
	// A list of all locales that are supported
	locales: availableLocaleCodes,

	// Used when no locale matches
	defaultLocale: defaultLocale.code,
});

// We only want the middleware to run on the `/` route
// to redirect users to their preferred locale

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", localesMatch],
};
