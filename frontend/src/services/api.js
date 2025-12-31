import axios from 'axios';

// Create an axios instance with base configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get content for a specific section
export const getContent = async (section) => {
  try {
    const response = await api.get(`/content/${section}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching content for section ${section}:`, error);
    throw error;
  }
};

// Function to get all content
export const getAllContent = async () => {
  try {
    const response = await api.get('/content');
    return response.data;
  } catch (error) {
    console.error('Error fetching all content:', error);
    throw error;
  }
};

// Function to search content
export const searchContent = async (query) => {
  try {
    const response = await api.post('/search', { query });
    return response.data;
  } catch (error) {
    console.error('Error searching content:', error);
    throw error;
  }
};

// Function to get command examples
export const getCommandExamples = async () => {
  try {
    const response = await api.get('/command-examples');
    return response.data;
  } catch (error) {
    console.error('Error fetching command examples:', error);
    throw error;
  }
};

export default api;