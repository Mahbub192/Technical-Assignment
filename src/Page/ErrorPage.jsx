import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import errorPage from '../assets/110076-group-class.json'
const ErrorPage = () => {
    const { error } = useRouteError()
    return (
        <section className='error-bg flex items-center h-screen p-16 text-gray-900'>
        <div className='container flex flex-col items-center  px-5 mx-auto my-8'>
        <Lottie animationData={errorPage} loop={true} />;
          <div className='max-w-md text-center'>
            <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
              {error?.message}
            </p>
            <Link to='/' className='py-3 px-5 rounded-md bg-cyan-300 text-xl'>
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;