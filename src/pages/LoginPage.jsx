import LoginForm from '../components/loginForm.jsx';

const LoginPage = ({ onBack, onSwitch, onSuccess }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <button
          type="button"
          onClick={onBack}
          className="mb-6 inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          ← Back to shortener
        </button>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] rounded-[32px] bg-white p-8 shadow-xl">
          <div className="flex flex-col justify-center rounded-3xl bg-slate-900 p-8 text-white lg:p-12">
            <h1 className="text-4xl font-semibold leading-tight">Welcome back</h1>
            <p className="mt-4 max-w-xl text-slate-200">
              Log in to manage your shortened URLs and keep track of click analytics from one place.
            </p>
            <div className="mt-8 space-y-4 rounded-3xl border border-slate-700 bg-slate-800 p-6">
              <div>
                <p className="text-sm font-medium text-slate-300">Quick access</p>
                <p className="mt-1 text-sm text-slate-400">Sign in and start shortening links immediately.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-300">Safe session</p>
                <p className="mt-1 text-sm text-slate-400">Our app uses secure authentication for your account.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onSwitch}
              className="mt-8 inline-flex items-center rounded-full border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Need a new account? Sign up
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm lg:p-10">
            <LoginForm onSuccess={onSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
