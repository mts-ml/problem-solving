import { useState } from "react";


const movies = [
  { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi" },
  { id: 2, title: "The Dark Knight", year: 2008, genre: "Action" },
  { id: 3, title: "Interstellar", year: 2014, genre: "Sci-Fi" },
  { id: 4, title: "Parasite", year: 2019, genre: "Thriller" },
];


export default function Movies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMovie = () => {
   setCurrentIndex(previndex => (previndex + 1) % movies.length)
  }

  const prevMovie = () => {
    setCurrentIndex(prevIndex => (
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    ))
  };

  return (
    <div className="flex flex-col bg-slate-500 items-center gap-4 p-4 border rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-xl text-cyan-500 font-bold">{movies[currentIndex].title}</h2>

      <p className="text-gray-200">Ano: {movies[currentIndex].year}</p>

      <p className="text-gray-300">Gênero: {movies[currentIndex].genre}</p>

      <div className="flex gap-4">
        <button
          onClick={prevMovie}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors duration-300"
        >
          {"<"}
        </button>

        <button
          onClick={nextMovie}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-colors duration-300"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
