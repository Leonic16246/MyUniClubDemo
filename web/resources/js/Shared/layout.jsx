import Nav from "./Nav";

export default function Layout({ children }) {
    return (
        <div>
            <section class="p-6 bg-gray-200">
                <header class="flex justify-between">
                    <h1 class="font-bold text-lg">MyUniClub</h1>
                    
                    <Nav />
                </header>
            </section>

            <section class="p-6">
                <div class="max-w-4xl mx-auto">

                    {children}

                </div>

            </section>
        </div>
    );
}