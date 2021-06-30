import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Why not to join BLAHAJGang</title>
      </Head>

      <main>
        <h1 className="title">
          Welcome! Today I will answer the biggest question.
        </h1>
        <h2 className="question">
          Why you should not join BLAHAJGang🦈?
        </h2>
        <a className="btn" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click here to know the answer</a>
      </main>

      <footer>
          Developed by <a href="http://github.com/mayank-kr" target="_blank" rel="noreferrer"> Mayank Kumar</a>
      </footer>

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
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .btn {
          font-size: 1.2rem;
          padding:10px;
          margin: 10px;
          background-color: white;
          color: black;
          border-radius: 8px;
          border: 5px solid #0070f3;
        }

        .btn:hover{
          cursor: pointer;
          background-color: #0070f3;
          color: white;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        a {
          color: #0070f3;
          text-decoration: none;
          padding:5px;
        }

        .title, .question {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          padding: 20px;
        }

        .title,
        .description, .question {
          text-align: center;
        }

        .question{
          color: #0070f3;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
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
  )
}
