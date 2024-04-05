import { useEffect, useState } from 'react';
import { ErrorResponse, PhotosWithTotalResults, createClient } from 'pexels';

const useFetchFlowers = (url: string) => {
  const [data, setData] = useState<
    ErrorResponse | PhotosWithTotalResults | undefined
  >();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorResponse | undefined | any>();

  useEffect(() => {
    const fetchData = async () => {
      const client = createClient(
        'PlHf9iah1R7zAgF7jD3BXNqYXTpjO4YVEqTQoDxM2MKlsdSvX8jNIbc4'
      );

      setLoading(true);
      try {
        const response = await client.photos.search({
          query: 'flowers',
          per_page: 20,
          page: 1,
        });

        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetchFlowers;
