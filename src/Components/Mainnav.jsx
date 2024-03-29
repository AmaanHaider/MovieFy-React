import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#EB5353",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  

  useEffect(()=>{
    if(value===0){
      navigate("/")
     };
 
      if(value===1){
       navigate("/movies")
      }
 
       if(value===2){
       navigate("/series")
      }
 
        if(value===3){
       navigate("/search")
      }

  },[value,navigate])


  

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{
          color: "whitesmoke",
        }}
        label="Trending"
        icon={<TrendingUpIcon />}
      />
      <BottomNavigationAction
        style={{
          color: "whitesmoke",
        }}
        label="Movies"
        icon={<MovieCreationIcon/>}
      />
      <BottomNavigationAction
        style={{
          color: "whitesmoke",
        }}
        label="Tv-Series"
        icon={<TvIcon />}
      />

      <BottomNavigationAction
        style={{
          color: "whitesmoke",
        }}
        label="Search"
        icon={<SearchIcon/>}
      />
    </BottomNavigation>
  );
}
