import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <div id="error-page" className="grid h-screen place-items-center">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error.message}</i>
        </p>
        <Link to={"/"}>back to safety</Link>
      </div>
    </div>
  );
}
