import React from "react";
import AnimeCard from "./AnimeCard";
import { GridList } from "@material-ui/core";

const AnimeList = ({ data }) => {
    console.log("animelist");
    console.log(data);

    return (
        <GridList>
            {data.map((anime) => { 
                return <AnimeCard key={anime.mal_id} anime={anime}/>;
            })}
        </GridList>
    );
};

export default AnimeList;