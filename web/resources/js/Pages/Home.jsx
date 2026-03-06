import { Link } from '@inertiajs/react'

export default function Welcome() {
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Home</h1>
            <Link href="/">Home</Link>
            <Link href="/post">Post</Link>
            <Link href="/clubs">Clubs</Link>
        </div>
    );
}