import { getProviders, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

// Create a custom sign-in pag
export default function SignIn({ providers }) {
  const router = useRouter();
  const { callbackUrl } = router.query;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
            Choose your preferred sign-in method
          </h2>
        </div>
        
        <div className="mt-8 space-y-4">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: callbackUrl || '/' })}
                className="group relative flex w-full justify-center rounded-md border py-2 px-4 text-sm font-medium 
                           hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                style={{
                  borderColor: provider.id === 'google' ? '#DB4437' : '#333',
                  color: provider.id === 'google' ? '#DB4437' : '#333',
                }}
              >
                {provider.id === 'google' && (
                  <span className="mr-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <g transform="matrix(1, 0, 0, 1, 0, 0)">
                        <path d="M21.35,11.1H12v3.2h5.59c-0.25,1.6-1.78,4.7-5.59,4.7c-3.36,0-6.1-2.79-6.1-6.2c0-3.42,2.74-6.2,6.1-6.2 c1.95,0,3.24,0.82,3.99,1.52l2.68-2.59C16.45,3.69,14.37,3,12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9c5.18,0,8.64-3.65,8.64-8.79 C20.64,11.83,21.01,11.1,21.35,11.1z" fill="#DB4437" />
                      </g>
                    </svg>
                  </span>
                )}
                {provider.id === 'github' && (
                  <span className="mr-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <g transform="matrix(1, 0, 0, 1, 0, 0)">
                        <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" fill="#333"/>
                      </g>
                    </svg>
                  </span>
                )}
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}