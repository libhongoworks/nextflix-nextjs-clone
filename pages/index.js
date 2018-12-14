import Head from "next/head";
import Link from "next/link";

export default () => (
  <div className="indexBody">
    <Head>
      <title>Netfix</title>
      <meta name="viewport" content="initial-scale=1.0 width=device-width" />
      <link
        rel="stylesheet"
        type="text/css"
        href="../static/bootstrap.min.css"
      />
      <link rel="stylesheet" type="text/css" href="../static/index.css" />
    </Head>

    <main>
      {/* navigation bar */}
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand">
          <img src="../static/netflixlogo.png" height="128" width="227" />
        </a>
      </nav>

      {/* page body content */}
      <div className="container">
        <h1>See what's next.</h1>
        <p>WATCH ANYWHERE. CANCEL ANYTIME.</p>
        <button>
          <Link href="/login">Sign in</Link>
        </button>
      </div>
    </main>
  </div>
);
