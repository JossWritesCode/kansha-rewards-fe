// src/providers/UserProvider.tsx
import React, { useEffect } from 'react';
import UserContext from './UserContext';

/* interface UserProfile {
  id: string;
  name: string;
  email: string;
} */

// The shape of context
interface UserContextType {
  // profile: UserProfile | null;
  refreshProfile: () => void;
}

function UserProvider({ children }: { children: React.ReactNode }) {
  // const [profile, setProfile] = useState<UserProfile | null>(null);

  // Possibly fetch user profile after login
  useEffect(() => {
    // you'd call an API endpoint or something
    // setProfile(response.data)
  }, []);

  function refreshProfile() {
    // re-fetch user data
  }

  const value: UserContextType = {
    // profile,
    refreshProfile,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
