import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page" className="flex h-screen flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-black-400">
          <i>{error.data}</i>
        </p>
        <Link to="/">&larr; Go back</Link>;
      </div>
    );
  }
  if (error instanceof Error) {
    return (
      <div id="error-page" className="flex h-screen flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-black-400">
          <i>{error.message || 'Unknown Error'}</i>
        </p>
        <Link to="/">&larr; Go back</Link>
      </div>
    );
  }
}

export default ErrorPage;
