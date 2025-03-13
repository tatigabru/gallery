export default function ContactForm() {
    return (
        <>
            <header>
            </header>
            <main className="p-6 flex flex-col items-center">
                <h2 className="text-3xl font-montserrat font-bold mb-6">Contact us</h2>
                <form className="w-1/2 min-w-[300px]">
                    <div className="mb-12">
                        <label htmlFor="name" className="block mb-2 text-lg font-montserrat">
                            Your Name or Alias
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full p-2 border rounded text-lg"
                        />
                    </div>
                    <div className="mb-12">
                        <label htmlFor="email" className="block mb-2 text-lg font-montserrat">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full p-2 border rounded text-lg"
                        />
                    </div>
                    <div className="mb-12">
                        <label htmlFor="comment" className="block mb-2 text-lg font-montserrat">
                            Comment
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            required
                            rows="4"
                            className="w-full p-2 border rounded text-lg"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="font-montserrat bg-[#9A8C98] text-white px-4 py-2 rounded hover:bg-[#4A4E69] transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
            </main>
        </>
    );
}