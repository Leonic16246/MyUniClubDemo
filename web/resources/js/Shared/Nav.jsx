import NavLink from '../Shared/NavLink'

export default function Nav() {
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/post">Post</NavLink>
            <NavLink href="/clubs">Clubs</NavLink>
        </div>
    );
}