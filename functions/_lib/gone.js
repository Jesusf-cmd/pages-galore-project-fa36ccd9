/**
 * Shared 410 Gone handler for retired GC trade URLs.
 * Serves public/404.html body so the response matches the site's not-found page.
 */
export async function gone(context) {
  const notFoundUrl = new URL("/404.html", context.request.url);
  const asset = await context.env.ASSETS.fetch(notFoundUrl);
  const body = await asset.text();

  return new Response(body, {
    status: 410,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}
