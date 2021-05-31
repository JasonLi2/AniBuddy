import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../context/search";
import { Typography, Link, Paper, GridListTile, Grid } from "@material-ui/core";
import '../assets/sass/AnimeCard.scss';

const AnimeCard = ({ key, anime }) => {
    const title = anime.title.length > 19 ? `${anime.title.substring(0,19)}...` : anime.title;
    const imgURL = anime.image_url;
    const score = anime.score;
    const type = anime.type;
    const episodes = anime.episodes;

    const history = useHistory();
    const search = useContext(SearchContext);

    //send GET request to API
    //wait for response
    //format resposne into JSON
    const onClickHandler = (event) => {
        fetch(`https://api.jikan.moe/v3/anime/${anime.mal_id}`)
            .then((response) => response.json())
            .then((data) => {
                //set context
                search.setSingle(data);
                //store API response locally in case of refresh
                localStorage.setItem("singleData", JSON.stringify(data));
                history.push("/single-view");
            });
    };

    const airing = () => {
        if (anime.airing) {
            return (
                <Typography variant="subtitle2" paragraph={true} color="textSecondary">
                    {score} | {type} ({episodes}) | Airing
                </Typography>
            )
        }
        else {
            return (
                <Typography variant="subtitle2" paragraph={true} color="textSecondary">
                    {score} | {type} ({episodes})
                </Typography>
            )
        }
    };

    return (
        <GridListTile className="anime-card-container" onClick={onClickHandler}>
            <Grid container item xs={12} className="anime-card-item">
                <Paper elevation={3} className="anime-card-paper">
                    <img src={imgURL} alt={title} style={{ maxHeight:300 }}/>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    {airing()}
                    {/* <Link component="button" variant="body1" style={{marginBottom: 0}} onClick={onClickHandler}>
                        Learn More...
                    </Link> */}
                </Paper>
            </Grid>
        </GridListTile>
    );
}

export default AnimeCard;