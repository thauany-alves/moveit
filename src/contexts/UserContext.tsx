import axios from "axios";
import { useRouter } from "next/router";
import { createContext, FormEvent, ReactNode, useState } from "react";


interface UserContextData {
  username: string;
  avatar_url: string;
  setUserGit: (username: string, avatar_url: string) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextData);

export default function UserProvider({ children }: UserProviderProps) {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [avatar_url, setAvatar_url] = useState('');
  
  function setUserGit(username: string, avatar_url: string){
    setUsername(username);
    setAvatar_url(avatar_url);

    router.push(`/home`);
  }
  
  return (
    <UserContext.Provider value={{
      username, 
      avatar_url,
      setUserGit,
    }}>
      {children}
    </UserContext.Provider>
  );

}