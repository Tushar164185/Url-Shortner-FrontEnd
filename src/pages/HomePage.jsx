import { useEffect, useState } from 'react';

const HomePage = ({ onLogin, onSignup }) => {
  const [typedText, setTypedText] = useState('');
  const text = 'url shortner';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((current) => {
        if (index >= text.length) {
          clearInterval(intervalId);
          return current;
        }
        const nextText = current + text[index];
        index += 1;
        return nextText;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-wide">URL Shortener</div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onLogin}
              className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/15"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={onSignup}
              className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Sign up
            </button>
          </div>
        </nav>

        <main className="mt-20 flex min-h-[calc(100vh-120px)] items-center">
          <div className="max-w-3xl space-y-8">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/20 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300/90">Smart link management</p>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                The easiest way to create a <span className="text-sky-300">{typedText}</span>
                <span className="inline-block w-1 animate-blink bg-white align-middle ml-1 h-10"></span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                Shorten long URLs, share them in seconds, and keep track of usage. Get more done with fewer clicks.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={onSignup}
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Get started
                </button>
                <button
                  type="button"
                  onClick={onLogin}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/15"
                >
                  Log in
                </button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Simple</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">Start shortening URLs right away with a clean, intuitive interface.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Secure</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">Your links and credentials are handled safely with the backend auth system.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <style>{
        `@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
         .animate-blink { animation: blink 1s step-end infinite; }`
      }</style>
    </div>
  );
};

export default HomePage;
