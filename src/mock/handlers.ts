import { rest } from 'msw';
import { Movie, Movies } from "../services/types";

const baseURL = `https://mock-my.api.net/v1/`;

export const handlers = [
    /**** MOVIES GET HANDLER */
    rest.get(`${baseURL}movies`,(_: any, res: any, ctx: any) => {
      return res(
        ctx.status(200),
        ctx.json(movies),
      )
    }),
    /**** Movie Post Handler */
    rest.post(`${baseURL}movie/:movieId`, (req: any, res: any, ctx: any) => {
      const { movieId } = req.params;

      const movie = movieList.find(m => m.id == movieId);
      if(movie){
        movie.description = req.body;
      }
      return res(ctx.status(200))
    }),
  ];

const movieList = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    imageUrl: "https://i.ebayimg.com/images/g/McUAAOSw~e5ZW~ee/s-l400.jpg",
    description: "Two imprisoned"
  },
  {
    id: 8,
    title: "Safe At Home",
    imageUrl: "./safe at home.jpg",
    description: "Safe at Home",
    actors: ["Kevin Schultz"]
  },
  {
    id: 2,
    title: "Spiderman",
    imageUrl: "https://imgc.allpostersimages.com/img/posters/the-amazing-spider-man-movie-poster_u-L-F5UQ980.jpg?artHeight=550&artPerspective=n&artWidth=550",
    description: "Spiderman"
  },
  {
    id: 3,
    title: "Harry Potter",
    imageUrl: "https://i.ebayimg.com/images/g/HP0AAOSwKIpV-vwL/s-l500.jpg",
    description: "Harry Potter",
  },
  {
    id: 7,
    title: "The Last Witch Hunter",
    imageUrl: "./TheLastWitchHunter.png",
    description: "The Last Witch Hunter",
    actors: ['Brian Lankford']
  },
  {
    id: 4,
    title: "Captain Marvel",
    imageUrl: "https://akns-images.eonline.com/eol_images/Entire_Site/2018112/rs_634x939-181202195654-634.captain-marvel.12418.jpg",
    description: "Captain Marvel",
  },
  {
    id: 5,
    title: "Matrix",
    imageUrl: "https://www.themoviedb.org/t/p/original/vybQQ7w7vGvF53IsGD0y0JSgIsA.jpg",
    description: "Matrix",
  },
  {
    id: 6,
    title: "The Incredibles",
    imageUrl: "https://i.ebayimg.com/images/g/3S8AAOSwAQpfjVRI/s-l500.jpg",
    description: "The Incredibles",
  },
  {
    id: 9,
    title: "Mad Max",
    imageUrl: "./Mad Max.jpg",
    description: "Mad Max",
    actors: ['David Mohundro']
  },
  {
    id: 10,
    title: "Weekend at Bernie's",
    imageUrl: "./WeekendatBernies.jpg",
    description: "Weekend at Bernie's",
    actors: ['Stephen Overholser']
  },
  {
    id: 11,
    title: "Pineapple Express",
    imageUrl: "./Pineapple Express.jpg",
    description: "Pineapple Express",
    actors: ['Jack Cannon']
  },
  { 
    id: 12,
    title: "Scott Pilgrim vs the world",
    imageUrl: "./3-scott-pilgrim-vs-the-world-clyde-allen.jpg",
    description: "Scott Pilgrim vs the world",
    actors: ['Tylon Beckwith']
  },
  {
    id: 13,
    title: "Little House on the Prairie",
    imageUrl: "./Littlehouse.png",
    description: "Little House on the Prairie",
    actors: ['John Thomas']
  },
  {
    id: 14,
    title: "Obi Wan Kenobi",
    imageUrl: "./ObiWan.png",
    description: "Obi Wan Kenobi",
    actors: ['Colin Neller']
  },
  {
    id: 15,
    title: "Step Brothers",
    imageUrl: "./StepBrothers.png",
    description: "Step Brothers",
    actors: ['Gerrin Paradis']
  }

] as Movie[]

const movies = {
  movies: movieList,
  count: movieList.length,
  message: '',
} as Movies
