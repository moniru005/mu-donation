import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/StatisticsPage/StatisticsPage";
import DonationPage from "../Pages/DonationPage/DonationPage";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const myRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/donation.json')
            },
            {
                path: '/donation',
                element: <DonationPage></DonationPage>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donations/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/donation.json')
            }
        ]
        
    }
]);

export default myRoute;