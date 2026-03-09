import { Head } from '@inertiajs/react'

export default function Post() {
    return (
        <div>
            <Head>
                <title>Post</title>
                <meta head-key="description" name="description" content="Post" />
            </Head>
            <h1 className="text-2xl font-bold">Post here</h1>
            
        </div>
    );
}