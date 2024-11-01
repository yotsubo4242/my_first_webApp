/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Hono } from "hono";

const app = new Hono();
// new Hono() で Hono インスタンスを作成. 

app.get("/", (c) => c.text("Hello 🔥"));
// `c`はContextオブジェクト. 

export default app;
// `app`というHonoインスタンスを公開する. 
// これにより, Workersがリクエストを受け取れる. 
// ここがアプリケーションのエントリーポイント. 