import { Head, useForm } from '@inertiajs/react'

const inputStyle =
    'w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none sm:text-sm'

const labelStyle = 'block text-sm font-medium text-gray-700 mb-1'

const errorStyle = 'mt-1 text-sm text-red-600'

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    function handleSubmit(e) {
        e.preventDefault()
        post('/login')
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Login</title>
            </Head>

            <div className="max-w-md w-full space-y-8">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign In</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className={labelStyle}>Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="Email address"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className={inputStyle}
                            required
                        />
                        {errors.email && <div className={errorStyle}>{errors.email}</div>}
                    </div>

                    <div>
                        <label htmlFor="password" className={labelStyle}>Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className={inputStyle}
                            required
                        />
                        {errors.password && <div className={errorStyle}>{errors.password}</div>}
                    </div>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {processing ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>
            </div>
        </div>
    )
}

Login.layout = null
