import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "MIB", release_date: "2002" },
        { id: 2, title: "Avengers", release_date: "2003" },
        { id: 3, title: "International", release_date: "2004" },
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text"
            className="search-input"
            placeholder="Search for movies...."
            value={searchQuery} 
            onChange={(e) =>setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie => 
                (
                <MovieCard movie={movie} key={movie.id} />
                )
            ))}
        </div>
    </div>
}
export default Home