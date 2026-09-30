/**
 * SSR entry for prerender (Phase 2b). Built with `vite build --ssr`.
 * Uses renderToPipeableStream + onAllReady so React.lazy routes resolve fully.
 */
import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { App } from "./App";

const ABORT_DELAY_MS = 15_000;

export async function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let settled = false;
    const { pipe, abort } = renderToPipeableStream(<App url={url} />, {
      onAllReady() {
        if (settled) return;
        const chunks: Buffer[] = [];
        const stream = new PassThrough();
        stream.on("data", (chunk: Buffer) => chunks.push(chunk));
        stream.on("end", () => {
          settled = true;
          resolve(Buffer.concat(chunks).toString("utf-8"));
        });
        stream.on("error", (err) => {
          if (settled) return;
          settled = true;
          reject(err);
        });
        pipe(stream);
      },
      onError(err) {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        abort();
        reject(err);
      },
    });

    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      abort();
      reject(new Error(`SSR timed out for ${url}`));
    }, ABORT_DELAY_MS);
  });
}
