import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchContext } from "../context/search";
import { FormControl, Input, IconButton, Grid } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import '../assets/sass/Home.scss';

const Home = () => {
    const search = useContext(SearchContext);
    const [input, setInput] = useState("");
    const history = useHistory();

    const handleSearch = (event) => {
        //don't let page reload after submit
        event.preventDefault();
        //send get request to MAL API
        search.search(input).then((data) => {
            //setting the context
            search.setData(data.results);
            //store data in browser
            localStorage.setItem("localAnimeData", JSON.stringify(data.results));
            //redirect to results page
            history.push("/results");
        });
    };

    return (
        <Grid 
        container direction="column" 
        justify="center" 
        alignContent="center" 
        alignItems="center"
        >
            <Grid item>
                <Grid item>
                    <img 
                        alt="lucky star" 
                        src={process.env.PUBLIC_URL + "/luckystar.png"}
                        height={500}
                        width={412}
                    />
                </Grid>
                <Grid item>
                    <form className="home-form">
                        <FormControl type="submit" className="home-form-control">
                            <Input 
                                placeholder="Search for any anime..." 
                                value={input} 
                                onChange={(event) => setInput(event.target.value)}
                                className="home-input"
                            />
                            <IconButton 
                                variant="contained" 
                                color="primary" 
                                type="submit" 
                                disabled={!input}
                                onClick={handleSearch}
                                className="home-icon-button"
                            >
                                <SearchIcon />
                            </IconButton>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;