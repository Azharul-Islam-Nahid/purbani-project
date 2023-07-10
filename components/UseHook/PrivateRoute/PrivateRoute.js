// hooks/usePrivateRoute.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';

const usePrivateRoute = () => {
  const router = useRouter();

  useEffect(() => {
    const checkUserAccess = async () => {
      try {
        // Make a request to the user API to validate the user's role
        const response = await fetch('/api/user'); // Replace with your actual user API endpoint
        const data = await response.json();

        if (!data.isAuthenticated || data.role !== 'admin') {
          // User not authenticated or does not have the required role, redirect or display an error message
          router.push('/unauthorized');
        }
      } catch (error) {
        console.error('Error while checking user access:', error);
        router.push('/error');
      }
    };

    checkUserAccess();
  }, []);

  return {};
};

export default usePrivateRoute;
