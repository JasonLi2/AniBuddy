import React, { useEffect } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import '../assets/sass/SingleAnime.scss';
import { InfoRounded } from "@material-ui/icons";

const SingleAnime = (props) => {
    const { title,
         image_url, 
         rating, 
         score, 
         broadcast, 
         url, 
         type, 
         synopsis, 
         title_english,
         title_japanese,
         title_synonyms,
         duration,
         premiered,
         source
        } = props.info;

    const airingCheck = () => {
        if (props.info.airing === true) {
            return (
                <Typography variant="body2" color="textSecondary">
                    Currently Airing
                </Typography>
            )
        }
    }

    const episodeGrammar = () => {
        const temp = props.info.episodes;
        if (temp > 1) {
            return (
                <Typography variant="h5" display="inline">
                    ({temp} Episodes)
                </Typography>
            );
        }
        else if (temp === 1) {
            return (
                <Typography variant="h5" display="inline">
                    ({temp} Episode)
                </Typography>
            );
        }
        else {
            return (
                <Typography variant="h5" display="inline">
                    (? Episodes)
                </Typography>
            );
        }
    }

    return (
        <>
        <Grid container spacing={5} direction="row" justify="center" alignItems="center" alignContent="center" className="single-anime-container">
            <Grid item>
                <img src={image_url} alt={title} className="single-anime-image" className="single-anime-img"/>
            </Grid>
            <Grid item>
                <Paper elevation={3} className="single-anime-description">
                    <Typography variant="h4" color="textPrimary">
                        {title}
                    </Typography>
                    <Typography variant="h5" display="inline" color="textSecondary">
                        Score:{" "}
                    </Typography>
                    <Typography variant="h5" display="inline">
                        {score} | {type} {" "}
                    </Typography >
                    {episodeGrammar()}
                    {airingCheck()}
                    <Typography variant="body1" color="textSecondary">
                        Duration: {duration}isode <br />
                        Broadcast: {broadcast} <br />
                        Rating: {rating}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        <a href={url} style={{ textDecoration: "none", color: "blue" }}>
                            MAL Page
                        </a>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
        <Grid container spacing={5} direction="row" justify="center" className="single-anime-container-2">
            <Paper elevation={3} className="single-anime-synopsis">
                <Typography variant="h6" color="textPrimary" paragraph={true}>
                    Synopsis
                </Typography>
                <Typography variant="body2" color="textPrimary">
                    {synopsis}
                </Typography>
            </Paper>
            <Grid container direction="row" justify="center" className="alternate-names-grid" alignContent="center">
                <Paper elevation={3} className="alternate-names-paper">
                    <Typography variant="h6" color="textPrimary" paragraph={true}>
                        Alternate Names
                    </Typography>
                    <Typography variant="body1" color="textPrimary">
                        English: {title_english} <br />
                        Japanese: {title_japanese} <br />
                        Synonyms: {title_synonyms}
                    </Typography>
                </Paper>
                <Paper elevation={3} className="season-paper">
                    <Typography variant="h6" color="textPrimary" paragraph={true}>
                        Season
                    </Typography>
                    <Typography variant="body1" color="textPrimary">
                        {premiered}
                    </Typography>
                </Paper>
                <Paper elevation={3} className="source-paper">
                    <Typography variant="h6" color="textPrimary" paragraph={true} align="center">
                        Source
                    </Typography>
                    <Typography variant="body1" color="textPrimary" align="center">
                        {source}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
        </>
    );
};

export default SingleAnime;