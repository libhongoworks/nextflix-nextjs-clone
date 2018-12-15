import Head from "next/head";
import Link from "next/link";

export default () => (
  <div className="loginBody">
    <Head>
      <title>Netfix</title>
      <meta name="viewport" content="initial-scale=1.0 width=device-width" />
      <link
        rel="stylesheet"
        type="text/css"
        href="../static/bootstrap.min.css"
      />
      <link rel="stylesheet" type="text/css" href="../static/login.css" />
    </Head>

    <article className="signInForm container">
      <div className="container">
        <br />
        <h3>Sign in</h3>
        <br />
        <form>
          <input
            type="email"
            placeholder="Email address"
            className="form-control"
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
          />
          <br />
          <Link href="/browse">
            <button className="btn">Sign in</button>
          </Link>
        </form>
      </div>
    </article>
  </div>
);
