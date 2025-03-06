'use client';

// file for handling errors -> can go to root app folder as well
export default function Error({error}) {
    return (
    <main className='error'>
        <h1>An error occured!</h1>
        <p>Failed to create meal</p>
    </main>
  );
}