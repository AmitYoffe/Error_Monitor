import { Link, useRouteError } from 'react-router-dom';
import cofusedDuckGif from '@/assets/gifs/confused-duck.gif';

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page" className="grid h-screen place-items-center">
      <div>
        <img src={cofusedDuckGif} alt="Confused Duck gif" className='h-72 w-96'></img>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error.message}</i>
        </p>
        <Link to={"/"} className='hover:underline font-semibold focus:font-bold'>
          back to safety
        </Link>
      </div>
    </div>
  );
}

//TODO: check if making the background of the gif clear is possible, so it will fit both to dark & light mode
