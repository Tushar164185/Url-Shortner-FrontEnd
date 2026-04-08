import { useState } from 'react';
import { shortenUrl } from '../api/shorturl.api';

const UrlShortenerPage = ({ onLogout }) => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');
    setLoading(true);

    try {
      const response = await shortenUrl(longUrl);
      setShortUrl(response);
    } catch (err) {
      setError('TimeOut. You need to login again.');
      // setTimeout(() => {
      //   onLogout();
      // }, 1500);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setError('');
    } catch {
      setError('Unable to copy URL.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-[32px] shadow-2xl p-8 sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">URL Shortener</h1>
            <p className="mt-2 text-slate-600">Transform long links into short, shareable URLs instantly.</p>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex items-center justify-center rounded-full border border-red-300 bg-red-50 px-5 py-3 text-sm font-semibold text-red-700 transition hover:bg-red-100"
          >
            Logout
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-slate-700 mb-2">
              Enter your URL
            </label>
            <input
              type="url"
              id="url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="https://example.com/very/long/url/that/needs/shortening"
              className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-3xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {loading ? 'Shortening...' : 'Shorten URL'}
          </button>
        </form>

        {error && (
          <div className="mt-6 rounded-3xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        {shortUrl && (
          <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4">
            <p className="text-sm font-semibold text-emerald-900">Your shortened URL</p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                value={shortUrl}
                readOnly
                className="flex-1 rounded-3xl border border-emerald-300 bg-white px-4 py-3 text-sm font-mono outline-none"
              />
              <button
                type="button"
                onClick={copyToClipboard}
                className="rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Copy
              </button>
            </div>
          </div>
        )}

        <div className="mt-10 text-center text-sm text-slate-500">
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default UrlShortenerPage;