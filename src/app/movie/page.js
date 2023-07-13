import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css';

const Movie = async () => {
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8598aa0d50msh2ea3694ea6c8322p175e16jsn88a2608d2f32',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  console.log(data);
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1> 
          <div className={styles.card_section}>
            {
              main_data.map((movie) => {
                return <MovieCard key={movie.id} {...movie} />
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie;