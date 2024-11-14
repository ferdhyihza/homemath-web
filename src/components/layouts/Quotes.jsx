import quotes from '../data/QuotesContent.js';

export default function Quotes() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <section className="text-center bg-blue-subtle rounded-2 px-2 pb-2 px-sm-5 mb-4">
        {randomQuote.arab && (
          <p className=" p-2 m-0 pb-0 fw-light">
            <em>{randomQuote.arab}</em>
          </p>
        )}
        <p className=" p-2 m-0 pb-0 fw-light">{randomQuote.quote}</p>
        {randomQuote.author && <p className=" p-2 m-0">- {randomQuote.author} -</p>}
      </section>
    </>
  );
}
