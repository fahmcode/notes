import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (apiUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: fetchedData } = await axios.get(apiUrl);
        setData(fetchedData);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, isLoading };
};

export default useFetch;
