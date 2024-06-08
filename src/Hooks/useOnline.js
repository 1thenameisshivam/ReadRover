import { useState, useEffect } from "react";
export const useOnline = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handleOnline = () => setStatus(true);
    const handleOffline = () => setStatus(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  }, []);

  return status;
};
