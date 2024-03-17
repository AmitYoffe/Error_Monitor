import { Link, useRouteError } from 'react-router-dom';
import cofusedDuckGif from '@/assets/gifs/confused-duck.gif';
import { ModeToggle } from './components/mode-toggle';
import { Undo2 } from 'lucide-react';

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page" className="grid h-screen place-items-center">
      <ModeToggle />
      <Link to="/" className="absolute left-2 top-2">
        <Undo2 />
      </Link>
      <div>
        <img
          src={cofusedDuckGif}
          alt="Confused Duck gif"
          className="h-72 w-96"
        ></img>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error.message}</i>
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
