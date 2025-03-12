export default function ContactForm() {
    return (
        <>
            <header>
            </header>
            <main className="p-6">
                <h2 className="text-2xl font-bold mb-6">Contact form</h2>
                <form className="max-w-md space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label htmlFor="comment" className="block mb-2">
                            Comment *
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            required
                            rows="4"
                            className="w-full p-2 border rounded"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </form>
            </main>
        </>
    );
}