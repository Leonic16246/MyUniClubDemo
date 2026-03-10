import { Head } from '@inertiajs/react'

export default function Clubs() {
    const clubs = [
        {
            id: 1,
            name: "Computer Science Club",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=256&h=256&fit=crop",
            description: "Learn coding, build projects, and connect with tech enthusiasts.",
            members: 156,
            category: "Technology"
        },
        {
            id: 2,
            name: "Photography Society",
            image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=256&h=256&fit=crop",
            description: "Capture moments, improve your skills, and explore creative photography.",
            members: 89,
            category: "Arts"
        },
        {
            id: 3,
            name: "Debate Club",
            image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=256&h=256&fit=crop",
            description: "Sharpen your argumentation skills and engage in intellectual discussions.",
            members: 67,
            category: "Academic"
        },
        {
            id: 4,
            name: "Entrepreneurship Club",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=256&h=256&fit=crop",
            description: "Turn ideas into reality. Network with founders and learn business skills.",
            members: 124,
            category: "Business"
        },
        {
            id: 5,
            name: "Environmental Action Group",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=256&h=256&fit=crop",
            description: "Make a difference. Join campus sustainability initiatives and activism.",
            members: 93,
            category: "Community"
        },
        {
            id: 6,
            name: "Drama Society",
            image: "https://images.unsplash.com/photo-1503095396549-807759245b35?w=256&h=256&fit=crop",
            description: "Perform, direct, and create theatrical productions with fellow artists.",
            members: 78,
            category: "Arts"
        }
    ];

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
                                src={club.image} 
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
                            <p className="text-sm leading-6 text-gray-900">{club.members} members</p>
                            <button className="mt-2 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                                Join Club
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}