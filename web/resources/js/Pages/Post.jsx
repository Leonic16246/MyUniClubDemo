import { Head, useForm } from '@inertiajs/react'
import { useEffect } from 'react'

export default function Post({ clubs }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        club_id: '',
        title: '',
        description: '',
        event_type: '',
        event_date: '',
        location: '',
        is_upcoming: true,
    })

    // Load saved form data from session
    useEffect(() => {
        const savedData = sessionStorage.getItem('postFormData')
        if (savedData) {
            const parsed = JSON.parse(savedData)
            Object.keys(parsed).forEach(key => {
                setData(key, parsed[key])
            })
        }
    }, [])

    // Save form data in session
    useEffect(() => {
        sessionStorage.setItem('postFormData', JSON.stringify(data))
    }, [data])

    const handleSuccess = () => {
        reset()
        sessionStorage.removeItem('postFormData')
        alert('Post created successfully!')
    }

    const handleClear = () => {
        reset()
        sessionStorage.removeItem('postFormData')
    }

    return (
        <div>
            <Head>
                <title>Post</title>
                <meta head-key="description" name="description" content="Post" />
            </Head>
            
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Create Club Post</h1>
                <button
                    type="button"
                    onClick={handleClear}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                    Clear Form
                </button>
            </div>
            
            <form 
                onSubmit={(e) => {
                    e.preventDefault()
                    post('/post', {
                        onSuccess: handleSuccess,
                        preserveScroll: true,
                    })
                }}
                className="max-w-2xl space-y-6"
            >
                {/* Club Selection */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select Club
                    </label>
                    <select
                        value={data.club_id}
                        onChange={e => setData('club_id', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        required
                    >
                        <option value="">Choose a club...</option>
                        {clubs.map(club => (
                            <option key={club.id} value={club.id}>
                                {club.name}
                            </option>
                        ))}
                    </select>
                    {errors.club_id && <div className="mt-1 text-sm text-red-600">{errors.club_id}</div>}
                </div>

                {/* Event Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Event Title
                    </label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Event Title"
                        required
                    />
                    {errors.title && <div className="mt-1 text-sm text-red-600">{errors.title}</div>}
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        value={data.description}
                        onChange={e => setData('description', e.target.value)}
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Description"
                        required
                    />
                    {errors.description && <div className="mt-1 text-sm text-red-600">{errors.description}</div>}
                </div>

                {/* Event Type */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Event Type
                    </label>
                    <select
                        value={data.event_type}
                        onChange={e => setData('event_type', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                        <option value="">Select type...</option>
                        <option value="meeting">Meeting</option>
                        <option value="social">Social</option>
                        <option value="competition">Competition</option>
                        <option value="workshop">Workshop</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.event_type && <div className="mt-1 text-sm text-red-600">{errors.event_type}</div>}
                </div>

                {/* Event Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Event Date & Time
                    </label>
                    <input
                        type="datetime-local"
                        value={data.event_date}
                        onChange={e => setData('event_date', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    {errors.event_date && <div className="mt-1 text-sm text-red-600">{errors.event_date}</div>}
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                    </label>
                    <input
                        type="text"
                        value={data.location}
                        onChange={e => setData('location', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Location"
                    />
                    {errors.location && <div className="mt-1 text-sm text-red-600">{errors.location}</div>}
                </div>

                {/* Is Upcoming */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="is_upcoming"
                        checked={data.is_upcoming}
                        onChange={e => setData('is_upcoming', e.target.checked)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="is_upcoming" className="ml-2 text-sm text-gray-700">
                        Mark as upcoming event
                    </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {processing ? 'Creating Post...' : 'Create Post'}
                    </button>
                </div>
            </form>
        </div>
    );
}