
import React from 'react';
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";

export const navigation = [
    {
        label: "Tv Show",
        href: "tv",
        icon:<PiTelevisionFill />
    },
    {
        label: "Movies",
        href: "movie",
        icon:<BiSolidMoviePlay />
    }  
]
export const mobileNavigation = [
    {
        label: "Home",
        href: "/",
        icon:<MdHome />
    },
    ...navigation,
    {
        label: "Search",
        href: "/search",
        icon:<IoIosSearch/>
    }
]