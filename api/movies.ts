import useSWR, { Fetcher } from 'swr';
import { POPULAR_BASE_URL, SEARCH_BASE_URL } from '../config';
import { Result } from './types';

const fetcher: Fetcher = async (arg: string) => fetch(arg).then((res) => res.json());

export function usePopularMovies() {
  const { data, error } = useSWR(POPULAR_BASE_URL, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  } as Result;
}

export function useSearchMovies(query: string) {
  const { data, error } = useSWR(query ? SEARCH_BASE_URL + query : null, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  } as Result;
}
