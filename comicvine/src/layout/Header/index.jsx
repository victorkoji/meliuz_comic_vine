import Link from "next/link";
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <Link href="/" activeClassName="active" className="navbar-brand">
          <a>
          <h1>Comic Vine</h1>
          </a>
          
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/" className={router.pathname == "/" ? "active" : ""}>
                <a className={router.pathname == "/" ? "active" : ""}>
                  Início
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
