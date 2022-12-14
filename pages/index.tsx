import { useDebouncedState } from '@mantine/hooks';
import { Anchor } from '@mantine/core';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Grid from '../components/Grid/Grid';
import Card from '../components/Card/Card';
import { usePopularMovies, useSearchMovies } from '../api/movies';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
import { Result } from '../api/types';

export default function HomePage() {
  const [query, setQuery] = useDebouncedState<string>('', 300);

  const { data: popularMovies }: Result = usePopularMovies();

  const { data: searchMovies }: Result = useSearchMovies(query);

  const filterData = searchMovies || popularMovies;

  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header setQuery={setQuery} />
      {popularMovies ? (
        <Hero
          imgUrl={
            popularMovies?.results[0]?.backdrop_path
              ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${popularMovies?.results[0].backdrop_path}`
              : '/no_image.jpg'
          }
          title={popularMovies?.results[0]?.title}
          text={popularMovies?.results[0]?.overview}
        />
      ) : null}
      <Grid
        className="p-4 max-w-7xl m-auto"
        title={query ? `Search Results: ${filterData.total_results}` : 'Popular Movies'}
      >
        {filterData && filterData.results
          ? filterData.results.map((movie) => (
              <Anchor key={movie.id} href={`/${movie.id}`}>
                <div className="cursor-pointer hover:opacity-80 dur">
                  <Card
                    imgUrl={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : '/no_image.jpg'
                    }
                    title={movie.original_title}
                  />
                </div>
              </Anchor>
            ))
          : null}
      </Grid>
    </main>
  );
}
