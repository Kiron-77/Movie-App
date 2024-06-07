import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import DetailPage from '../pages/DetailPage'
import ExplorePage from '../pages/ExplorePage'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: ":explore",
                element: <ExplorePage />
            },
            {
                path: ":explore/:id",
                element:<DetailPage/>
            },
            {
                path: "search",
                element:<SearchPage/>
            }
        ]
    }
]) 


export default Router
