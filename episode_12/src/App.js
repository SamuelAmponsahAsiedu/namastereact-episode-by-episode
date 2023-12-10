import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from '../components/Header';
import Body from '../components/Body';
import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
// import About from '../components/About';
import Contact from '../components/Contact';
import Error from '../components/Error';
import RestaurantMenu from '../components/RestaurantMenu';
import UserContext from '../utils/UserContext';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import Cart from '../components/Cart';

const About = lazy(() => import('../components/About'))
const AppLayout = () => {
    const [userName, setUserName] = useState()
    useEffect(()=> {
        //make api call

        //data received⬇️
        const data ={
            name: 'Sam',
        };

        setUserName(data.name);
    })
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className='app'>
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children:[
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<h1>Loading</h1>}>
                        <About />
                    </Suspense> 
                )
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ],
        errorElement: <Error />
    },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


















