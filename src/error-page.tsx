import cofusedDuckGif from '@/assets/gifs/confused-duck.gif';
import { Undo2 } from 'lucide-react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';
import { ModeToggle } from './components/layout/mode-toggle';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div id="error-page" className="grid h-screen place-items-center">
      <Link to="/" className="absolute left-2 top-2">
        <Undo2 />
      </Link>
      <div className="absolute right-0 top-0">
        <ModeToggle />
      </div>
      <div>
        <img
          src={cofusedDuckGif}
          alt="Confused Duck gif"
          className="h-72 w-96"
        ></img>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i className='text-red-600'>{errorMessage}</i>
        </p>
        <Link
          to={'/'}
          className="font-semibold hover:underline focus:font-bold"
        >
          back to safety
        </Link>
      </div>
    </div>
  );
}
