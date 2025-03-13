import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      
      <div className="flex items-center space-x-4">
        <Link href="/gallery">
          <span className="cursor-pointer">Gallery</span>
        </Link>
        
        {!loading && !session && (
          <button
            onClick={() => signIn()}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Sign in
          </button>
        )}
        
        {!loading && session && (
          <div className="flex items-center space-x-4">
            <Link href="/profile">
              <div className="flex items-center space-x-2 cursor-pointer">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || 'Profile'}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    {session.user.name?.charAt(0) || 'U'}
                  </div>
                )}
                <span>{session.user.name || session.user.email}</span>
              </div>
            </Link>
            
            <button
              onClick={() => signOut()}
              className="text-gray-600 hover:text-gray-800"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
