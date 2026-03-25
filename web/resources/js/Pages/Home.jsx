import { Head } from '@inertiajs/react'

export default function Home({ posts }) {
    return (
        <div>
            <Head>
                <title>Home</title>
                <meta head-key="description" name="description" content="Home Page" />
            </Head>

            <h1 className="text-2xl font-bold mb-6">Recent Club Events</h1>
            
            <ul role="list" className="divide-y divide-gray-200">
                {posts.map((post) => (
                    <li key={post.id} className="flex justify-between gap-x-6 py-5 hover:bg-gray-50 px-4 rounded-lg transition-colors">
                        <div className="flex min-w-0 gap-x-4">
                            <img 
                                src={post.club.image_url} 
                                alt={post.club.name} 
                                className="h-12 w-12 flex-none rounded-full bg-gray-100 object-cover" 
                            />
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {post.title}
                                </p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    {post.club.name}
                                </p>
                                <p className="mt-1 text-sm leading-5 text-gray-600">
                                    {post.description}
                                </p>
                                {post.event_date && (
                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                        {new Date(post.event_date).toLocaleDateString()} 
                                        {post.location && ` @ ${post.location}`}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            {post.is_upcoming ? (
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <p className="text-xs leading-5 text-gray-500">Upcoming</p>
                                </div>
                            ) : (
                                <p className="text-xs leading-5 text-gray-500">Past event</p>
                            )}
                            <p className="mt-1 text-xs leading-5 text-gray-400">
                                Posted {new Date(post.created_at).toLocaleDateString()}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            {posts.length === 0 && (
                <p className="text-center text-gray-500 py-8">No posts yet.</p>
            )}
        </div>
    );
}