import { useQuery as query } from 'react-query';
import { axiosAuth } from '../services/api';

const useQuery = (url, options) => {
  const queryFn = ({ queryKey }) => {
    return axiosAuth(queryKey);
  };

  return query(url, queryFn, options);
};

export default useQuery;
