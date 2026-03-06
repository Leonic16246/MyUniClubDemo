import NavLink from '../Shared/NavLink'

export default function Nav() {
    return (
        <div>
            <nav class="ml-6">
                <ul class="flex list-disc space-x-4 list-inside">
                    <li>
                       <NavLink href="/">Home</NavLink>     
                    </li>
                    <li>
                        <NavLink href="/post">Post</NavLink>
                    </li>
                    <li>
                        <NavLink href="/clubs">Clubs</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}