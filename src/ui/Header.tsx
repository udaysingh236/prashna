import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="mt-2 border-b-2 border-black-950 px-1 py-2">
      <div className="text-center">
        <Link className="text-3xl  font-bold text-black-50" to="/">
          <span>Prashna</span>
        </Link>
      </div>
      <p className="text-center text-base text-black-50">Do you think you know ?</p>
    </header>
  );
}
export default Header;
