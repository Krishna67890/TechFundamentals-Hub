import { useState, useEffect } from 'react';
import { getContent, getAllContent, searchContent, getCommandExamples } from '../services/api';

export const useSqlContent = (section) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        if (section) {
          const data = await getContent(section);
          setContent(data);
        } else {
          const data = await getAllContent();
          setContent(data);
        }
        setError(null);
      } catch (err) {
        setError(err.message || 'Error fetching content');
        setContent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [section]);

  return { content, loading, error };
};

export const useSearchContent = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = async (query) => {
    try {
      setLoading(true);
      const data = await searchContent(query);
      setResults(data.results);
      setError(null);
    } catch (err) {
      setError(err.message || 'Error searching content');
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, search };
};

export const useCommandExamples = () => {
  const [examples, setExamples] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExamples = async () => {
      try {
        setLoading(true);
        const data = await getCommandExamples();
        setExamples(data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Error fetching command examples');
        setExamples(null);
      } finally {
        setLoading(false);
      }
    };

    fetchExamples();
  }, []);

  return { examples, loading, error };
};