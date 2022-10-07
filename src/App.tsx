import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './App.css';
import { useService } from './services/services';
import { Movie } from './services/types';

function App() {
  const {movies, getMovies, updateMovie} = useService();
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined);
  const images = useRef<Array<HTMLImageElement | null>>([]);
  const detailImage = useRef<HTMLImageElement | null>(null);
  const imageContainer = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const [description, setDescription] = useState<string>('');
  
  useEffect(() => {
    Promise.all([getMovies()])
    .then(() => {

    }).catch(() => {;});
    
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const onMovieSelected = (movie: Movie, index: number) => {
    setSelectedMovie(movie);
    var ref = images.current[index];
    var to = detailImage.current;
    var relativeTo = imageContainer.current;

    if(ref && to && relativeTo){
      var from = ref.getBoundingClientRect();
      var relPos = relativeTo.getBoundingClientRect();
      to.style.top = from.top - relPos.top + "px";
      to.style.left = from.left - relPos.left + "px";
      to.src = movie.imageUrl;
      to.width = from.width;
      to.style.display = 'none';
      descriptionRef!.current!.value=movie.description;

      setTimeout(() => {
        var to = detailImage.current;
        if(to){
          to.style.display = 'initial';
        }
      }, 100);
    }
  }

  const onDescriptionChange = (v: ChangeEvent<HTMLTextAreaElement>) => setDescription(v?.target?.value || '');

  const onSave = async () => {
    if(selectedMovie){
      await updateMovie(selectedMovie.id, description)
    }
  }

  return (
    <div className="app" selected-movie={selectedMovie ? "selected" : undefined}>
      <div>
        {movies && (
          <>
            <div className="movie-list">
              {movies!.movies.map((movie, index) => (
                <div key={movie.id} onClick={() => onMovieSelected(movie, index)}>
                  <img ref={el => images.current[index] = el} src={movie.imageUrl} alt={movie.title} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div>
          <div className="movie-details">
            {selectedMovie && (
              <h3>
                {selectedMovie.title}
              </h3>
            )}
            <div ref={imageContainer} className="image-container">
              <img className="detail-image" ref={detailImage}/>
            </div>
              <>
                <div>
                  <textarea ref={descriptionRef} onChange={onDescriptionChange} />
                </div>
                <div>
                  <button type="button" onClick={onSave}>Save</button>
              </div>
            </>
        </div>
      </div>
    </div>
  )
}

export default App
