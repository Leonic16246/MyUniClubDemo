import { usePage } from '@inertiajs/react';
import Nav from "./Nav";


export default function Layout({ children }) {
    const { auth } = usePage().props

    return (
        <div>
            <section className="p-6 bg-gray-200">
                <header className="flex justify-between">
                    <h1 className="font-bold text-lg">MyUniClub</h1>

                    <p className="text-sm ml-4">
                        Welcome back, {auth.user.username}
                    </p>
                    
                    <Nav />
                </header>
            </section>

            <section className="p-6">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TgmTsa3rFU0?si=aoEX2tGwDZE-GpMP&amp;start=874" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="max-w-4xl mx-auto">

                    {children}

                </div>

            </section>
        </div>
    );
}