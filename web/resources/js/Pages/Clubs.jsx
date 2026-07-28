import { Head, Link, router } from '@inertiajs/react'
import { useState } from 'react'

export default function Clubs({ clubs, search }) {
    const [searchTerm, setSearchTerm] = useState(search || '')

    function handleSearch(e) {
        e.preventDefault()
        router.get('/clubs', { search: searchTerm })
    }

    return (
        <div>
            <Head>
                <title>Clubs</title>
                <meta head-key="description" name="description" content="Find Clubs" />
            </Head>

            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">Find Clubs</h1>

                <form onSubmit={handleSearch} className="flex gap-x-2">
                    <input
                        type="text"
                        placeholder="Search for clubs"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                    >
                        Search
                    </button>
                </form>

                <p className="mt-2 text-sm text-gray-600">
                    {clubs.length} {clubs.length === 1 ? 'club' : 'clubs'} found
                </p>

                {search && (
                    <Link href="/clubs" className="text-sm text-blue-600 hover:underline">
                        Clear search
                    </Link>
                )}
            </div>

            {clubs.length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                    {search ? `No clubs found matching "${search}"` : 'No clubs found.'}
                </p>
            ) : (
                <ul role="list" className="divide-y divide-gray-200">
                    {clubs.map((club) => (
                        <li
                            key={club.id}
                            className="flex justify-between gap-x-6 py-5 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            {/* Left side: club logo and details */}
                            <div className="flex min-w-0 gap-x-4">
                                {club.image_url ? (
                                    <img
                                        src={club.image_url}
                                        alt={club.name}
                                        className="h-12 w-12 flex-none rounded-full bg-gray-100 object-cover"
                                    />
                                ) : (
                                    <div className="h-12 w-12 flex-none rounded-full bg-gray-100" aria-hidden="true" />
                                )}

                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{club.name}</p>
                                    <p className="mt-1 text-xs leading-5 text-gray-500">{club.category}</p>
                                    <p className="mt-1 text-sm leading-5 text-gray-600">{club.description}</p>
                                </div>
                            </div>

                            {/* Right side: membership, hidden on small screens */}
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{club.member_count} members</p>
                                <button className="mt-2 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                                    Join Club
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
