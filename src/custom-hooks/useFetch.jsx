import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        setData(responseData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [url]);

  return {data, error, loading};
}
