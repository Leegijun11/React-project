<<<<<<< HEAD
import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
=======
import { useState } from "react";

export const useLocalStorage_list = (obj) => {
  const [value, setValue] = useState(()=>{
    try {
      const obj2 = localStorage.getItem(obj)
      return obj2 ? JSON.parse(obj2) : [];
  
    }
    catch (error){
      localStorage.removeItem(obj);
      return []
    }

  })
  return [value,setValue];
>>>>>>> 2245615512e4894f70026982b816c7db67e3a343
}