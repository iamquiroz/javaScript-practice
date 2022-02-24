import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const myLoader = ({ src, width, quality }) => {
    return `https://pbs.twimg.com/profile_images/${src}`;
  };
  return (
    <div className="container">
      <Head>
        <title> Link Tree App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          loader={myLoader}
          src="1468105626320400386/wczyCUHU_400x400.jpg"
          alt="Image Profile"
          className="image"
          width={100}
          height={100}
        />
        <h3 className="description">@Jaasiel Quiroz </h3>

        <div className="grid">
          <a
            href="https://github.com/iamquiroz/"
            className="card"
            target=" _blank"
          >
            <h3>Github</h3>
          </a>
          <a
            href="https://www.twitch.tv/gitquiroz"
            className="card"
            target=" _blank"
          >
            <h3>Twitter</h3>
          </a>
          <a
            href="https://www.linkedin.com/in/jaasiel-q-51b32a121/"
            className="card"
            target=" _blank"
          >
            <h3>LinkedIn</h3>
          </a>
          <a href="https://medium.com/@GITquiroz" className="card" target=" _blank">
            <h3>Medium</h3>
          </a>
          <a href="https://www.twitch.tv" className="card" target=" _blank">
            <h3>Twitch</h3>
          </a>
          <a
            href="https://discord.com/channels/@me/gitiamquiroz#5334/"
            className="card"
            target=" _blank"
          >
            <h3>Discord </h3>
          </a>
        </div>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .image {
          border-radius: 70%;
          height: 100px;
          width: 100px;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .description {
          color: black;
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
          margin: 0.5rem 1rem;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 1rem;
        }
        .card {
          margin: 0.5rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          background: #fafafa;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          min-width: 350px;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 3rem 0 3rem;
          font-size: 1.5rem;
        }
        /** Dark mode */
        @media (prefers-color-scheme: dark) {
          .container {
            background: rgb(53, 53, 53);
          }
          .description {
            color: white;
          }
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        @media (max-width: 350px) {
          .card h3 {
            margin: 0 3rem 0 3rem;
            font-size: 1.25rem;
          }
          .card {
            min-width: 275px;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
