import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    console.log(movie);

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>{"Loading..."}</h1>
            ) : (
                <div>
                    <div style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${movie.background_image_original})`, color: "white"}}>
                        <div style={{padding: "60px 30px", height: "100vh", position: "ralative"}}>
                            <div style={{width:"300px", float:"left"}}>
                                <img src={movie.medium_cover_image} alt={movie.title} style={{border:"5px solid white", borderRadius: "4px"}} />
                            </div>
                            <div style={{float:"left"}}>
                                <h1>{movie.title}</h1>
                                <h3>{movie.year}</h3>
                                {movie.genres.map((g) => (<h4 key={g}>{g}</h4>))}
                                <h4>♥ rating : {movie.rating}</h4>
                            </div>
                            <div style={{float:"inline-end", position: "absolute", top: "450px"}}>
                                <h4>{movie.description_full}</h4>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Detail;