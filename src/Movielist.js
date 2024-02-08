import React from "react";
import { MovieCard } from "./components/MovieCard";

export default function Movielist() {
  const moviedata = [
    {
      name: "Black Adam",
      rating: "8",
      poster:
        "https://techcrunch.com/wp-content/uploads/2022/12/vTFLEVeoF84aI5fuESrLmHerTK4.jpg",
      summary:
        "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is a spin-off to Shazam! (2019) and the eleventh film in the DC Extended Universe (DCEU). ",
    },
    {
      name: "Thor: Love and Thunder",
      rating: "8.4",
      poster:
        "https://images.hdqwalls.com/download/thor-love-and-thunder-tc-1280x2120.jpg",
      summary:
        "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. ",
    },
    {
      name: "Avatar: The Way of Water",
      rating: "9.5",
      poster: "https://images.news18.com/ibnlive/uploads/2022/08/jamejsjsk.jpg",
      summary:
        "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora",
    },
    {
      name: "Transformers: Rise of the Beasts",
      rating: "7.8",
      poster:
        "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/transformers_last_knight_2017_5_copy_-_h_2018.jpg?w=1296",
      summary:
        "During the 1990s, the Maximals, Predacons and Terrorcons join the existing battle on Earth between Autobots and Decepticons.",
    },
  ];
  return (
    <div className="App" >
      {moviedata.map((list,index) => (
        <div key={index}>
        <MovieCard
          name={list.name}
          rating={list.rating}
          poster={list.poster}
          summary={list.summary}
        />
        </div>
      ))}
    </div>
  );
}
