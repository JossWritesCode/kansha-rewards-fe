import { createContext } from 'react';

interface UserContextType {
  refreshProfile: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default UserContext;
export type { UserContextType };
