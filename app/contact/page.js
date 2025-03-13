'use client';
import { saveComment } from '@/lib/comments';

export default function ContactForm() {
    const handleSubmit = async (event) => {
        // Prevent the default form submission behavior that would refresh the page
        event.preventDefault();
        
        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            comment: event.target.comment.value,
        };

        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                // Clear the form
                event.target.reset();
                alert('Thank you for your comment!');
            } else {
                alert('Failed to submit comment. Please try again.');
            }
        } catch (error) {
            alert('Failed to submit comment. Please try again.');
        }
    };

    return (
        <>
            <header>
            </header>
            <main className="p-6 flex flex-col items-center">
                <h2 className="text-3xl font-montserrat font-bold mb-6">Contact us</h2>
                <form className="w-1/2 min-w-[300px]" onSubmit={handleSubmit}>
                    <div className="mb-12 mt-12">
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