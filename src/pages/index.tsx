import Link from "next/link";

import Nav from "~/components/Nav";

export default function Index() {
  return (
    <main>
      <Nav title="Netlify Workshop" />
      <section className="flex columns">
        <div>
          <h2>Rendering strategies</h2>
          <ul>
            <li>
              <Link href="/rendering-strategies/ssr">
                Server-side rendering (SSR)
              </Link>
            </li>
            <li>
              <Link href="/rendering-strategies/swr">
                Stale-while-revalidate (SWR)
              </Link>
            </li>
            <li>
              <Link href="/rendering-strategies/ssr">
                Static Site Generation (SSG)
              </Link>
            </li>
            <li>
              <Link href="/rendering-strategies/isr">
                Incremental Static Regeneration (ISR)
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Core primitives examples</h2>
          <h3>Functions</h3>
          <ul>
            <li>
              <Link href="/primitives/functions/proxy">Proxy to APIs</Link>
            </li>
            <li>
              <Link href="/primitives/functions/blobs">
                Access blob storage
              </Link>
            </li>
          </ul>
          <h3>Edge functions</h3>
          <ul>
            <li>
              <Link href="/primitives/functions/streams">Streams</Link>
            </li>
            <li>
              <Link href="/primitives/edge-functions/transformations">
                Transformations
              </Link>
            </li>
            <li>
              <Link href="/primitives/edge-functions/ab-testing">
                A/B testing
              </Link>
            </li>
            <li>
              <Link href="/primitives/edge-functions/geolocation">
                Geolocation
              </Link>
            </li>
            <li>
              <Link href="/primitives/edge-functions/localization">
                Localization
              </Link>
            </li>
          </ul>
          <h3>Image CDN</h3>
          <ul>
            <li>
              <Link href="/primitives/image-cdn/same-origin">
                Same-origin images
              </Link>
            </li>
            <li>
              <Link href="/primitives/image-cdn/remote">Remote images</Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
