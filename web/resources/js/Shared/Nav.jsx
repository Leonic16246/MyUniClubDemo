import NavLink from '../Shared/NavLink';
import { usePage } from '@inertiajs/react';

export default function Nav() {

    const { auth } = usePage().props

    return (
        <div>
            <nav className="ml-6">
                <ul className="flex space-x-6">
                    <li>
                       <NavLink href="/">Home</NavLink>     
                    </li>
                    <li>
                        <NavLink href="/post">Post</NavLink>
                    </li>
                    <li>
                        <NavLink href="/clubs">Clubs</NavLink>
                    </li>
                    <li>
                        {auth?.user ? (
                            <NavLink href="/logout" method="post">Log out</NavLink>
                        ) : (
                            <NavLink href="/login">Login</NavLink>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}