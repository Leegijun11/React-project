import { useState, useEffect } from "react";

export const useLocalStorage_list = (obj) => {
  const [value, setValue] = useState(() => {
    try {
      const obj2 = localStorage.getItem(obj);
      return obj2 ? JSON.parse(obj2) : [];
    } catch (error) {
      localStorage.removeItem(obj);
      return [];
    }
  });
  return [value, setValue];
};

export const useLocalStorage_null = (obj) => {
  const [value, setValue] = useState(() => {
    try {
      const obj2 = localStorage.getItem(obj);
      return obj2 ? JSON.parse(obj2) : null;
    } catch (error) {
      localStorage.removeItem(obj);
      return null;
    }
  });
  return [value, setValue];
};