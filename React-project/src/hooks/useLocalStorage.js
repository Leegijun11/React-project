export const useLocalStorage = () => {
  try {
    const commented = localStorage.getItem("commentText");
    return commented ? JSON.parse(commented) : [];
  } catch (error) {
    localStorage.removeItem("commentText");
    return [];
  }
};