import { Head } from '@inertiajs/react'

export default function Clubs({ clubs }) {
    return (
        <div>
            <Head>
                <title>Clubs</title>
                <meta head-key="description" name="description" content="Find Clubs" />
            </Head>
            
            <h1 className="text-2xl font-bold mb-6">Find Clubs</h1>
            
            <ul role="list" className="divide-y divide-gray-200">
                {clubs.map((club) => (
                    <li key={club.id} className="flex justify-between gap-x-6 py-5 hover:bg-gray-50 px-4 rounded-lg transition-colors cursor-pointer">
                        <div className="flex min-w-0 gap-x-4">
                            <img 
                                src={club.image_url || 'https://via.placeholder.com/48'} 
                                alt={club.name} 
                                className="h-12 w-12 flex-none rounded-full bg-gray-100 object-cover" 
                            />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {club.name}
                                </p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    {club.category}
                                </p>
                                <p className="mt-1 text-sm leading-5 text-gray-600">
                                    {club.description}
                                </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-gray-900">{club.member_count} members</p>
                            <button className="mt-2 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                                Join Club
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {clubs.length === 0 && (
                <p className="text-center text-gray-500 py-8">No clubs found.</p>
            )}
        </div>
    );
}