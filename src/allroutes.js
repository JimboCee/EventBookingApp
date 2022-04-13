import React from 'react';

import { Navigate, useRoutes } from 'react-router-dom';

import Main from './pages/main';
import AddEvent from './pages/addEvent';


function AllRoutes(){
    let routes = useRoutes([
        {
			path: '/',
			element: <Main />,
		},
        {
			path: '/add_event',
			element: <AddEvent />,
		}
    ])

    return routes;
}

export default AllRoutes;