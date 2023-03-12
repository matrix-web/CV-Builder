import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import App from './App';

const root:Root = createRoot(
  document.getElementById('root') as HTMLElement
);

const insert2body = (html: string): void => {
  const div: HTMLDivElement = document.createElement("div");
  div.innerHTML = html;
  div.style.display = "none";
  const body: HTMLBodyElement | null = document.querySelector("body");

  if (body) {
    body.prepend(div);
  }
}

(async () => {
  if ("caches" in window) {
    const spriteLink: string = "/sprite.svg";
    const newCache: Cache = await caches.open("sprite");
    const options = {
      method: "GET",
      headers: new Headers({
        "Content-Type": "image/svg+xml"
      })
    }
    let response = await newCache.match(spriteLink);
    let html: string | undefined;

    if (!response) {
      const req = new Request(spriteLink, options);
      await newCache.add(req);
      response = await newCache.match(spriteLink);

      html = await response?.text();
      if (html) {
        insert2body(html);
        return;
      }
    }
  }
})();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
