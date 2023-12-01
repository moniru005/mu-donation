import { TiArrowBack } from 'react-icons/ti';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-2 justify-center items-center h-screen">
            <h1 className="text-4xl font-semibold">Ooops! You have no data here...</h1>
      

            <Link to="/">
                <button className="btn pr-5 mt-6">
                    <TiArrowBack className='text-2xl'></TiArrowBack>
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;