function Nav() {
    return (
        <nav>
        <div className="container-fluid">
            <ul className="navbar navbar-expand-lg navbar-light bg-light">
                <li className="navbar-brand">
                <a className="nav-link active" aria-current="page" href="#">Conference GO!</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="new-location.html">New location</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="new-conference.html">New conference</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="">New presentation</a>
                </li>
            </ul>
        </div>
        </nav>
    );
  }

  export default Nav;
