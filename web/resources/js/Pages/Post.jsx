import { Head, useForm } from '@inertiajs/react'

// Every text box, dropdown and textarea on this page looks the same
const inputStyle =
    'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none'

const labelStyle = 'block text-sm font-medium text-gray-700 mb-1'

const errorStyle = 'mt-1 text-sm text-red-600'

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

    function handleSubmit(e) {
        e.preventDefault()

        post('/post', {
            preserveScroll: true,
            onSuccess: () => {
                reset()
                alert('Post created successfully!')
            },
        })
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
                    onClick={() => reset()}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                    Clear Form
                </button>
            </div>

            <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
                <div>
                    <label htmlFor="club_id" className={labelStyle}>Select Club</label>
                    <select
                        id="club_id"
                        value={data.club_id}
                        onChange={(e) => setData('club_id', e.target.value)}
                        className={inputStyle}
                        required
                    >
                        <option value="">Choose a club...</option>
                        {clubs.map((club) => (
                            <option key={club.id} value={club.id}>{club.name}</option>
                        ))}
                    </select>
                    {errors.club_id && <div className={errorStyle}>{errors.club_id}</div>}
                </div>

                <div>
                    <label htmlFor="title" className={labelStyle}>Event Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Event Title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        className={inputStyle}
                        required
                    />
                    {errors.title && <div className={errorStyle}>{errors.title}</div>}
                </div>

                <div>
                    <label htmlFor="description" className={labelStyle}>Description</label>
                    <textarea
                        id="description"
                        rows="4"
                        placeholder="Description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className={inputStyle}
                        required
                    />
                    {errors.description && <div className={errorStyle}>{errors.description}</div>}
                </div>

                <div>
                    <label htmlFor="event_type" className={labelStyle}>Event Type</label>
                    <select
                        id="event_type"
                        value={data.event_type}
                        onChange={(e) => setData('event_type', e.target.value)}
                        className={inputStyle}
                    >
                        <option value="">Select type...</option>
                        <option value="meeting">Meeting</option>
                        <option value="social">Social</option>
                        <option value="competition">Competition</option>
                        <option value="workshop">Workshop</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.event_type && <div className={errorStyle}>{errors.event_type}</div>}
                </div>

                <div>
                    <label htmlFor="event_date" className={labelStyle}>Event Date &amp; Time</label>
                    <input
                        id="event_date"
                        type="datetime-local"
                        value={data.event_date}
                        onChange={(e) => setData('event_date', e.target.value)}
                        className={inputStyle}
                    />
                    {errors.event_date && <div className={errorStyle}>{errors.event_date}</div>}
                </div>

                <div>
                    <label htmlFor="location" className={labelStyle}>Location</label>
                    <input
                        id="location"
                        type="text"
                        placeholder="Location"
                        value={data.location}
                        onChange={(e) => setData('location', e.target.value)}
                        className={inputStyle}
                    />
                    {errors.location && <div className={errorStyle}>{errors.location}</div>}
                </div>

                <div className="flex items-center">
                    <input
                        id="is_upcoming"
                        type="checkbox"
                        checked={data.is_upcoming}
                        onChange={(e) => setData('is_upcoming', e.target.checked)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="is_upcoming" className="ml-2 text-sm text-gray-700">
                        Mark as upcoming event
                    </label>
                </div>

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
    )
}
