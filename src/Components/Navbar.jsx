import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      <div className="container mt-10  ">
        <div className="container   ">
          <nav className="flex justify-around items-center text-center bg-amber-950 rounded w-[92%] m-auto text-white p-3">
            <div className="text-4xl cursor-pointer text-white">
              {props.title }
            </div>

            <ul className="flex gap-20 text-xl cursor-pointer">
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/apply">
              <li>Apply</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>

            <div className="left">
              <button className="p-2 bg-blue-300 rounded">Login</button>
            </div>
          </nav>
        </div>
      </div>
      <section className="bg-[rgb(194,196,254)] container mt-50 min-h-screen p-4 w-[92%] mx-auto rounded-xl m-10">
        section
      </section>
    </>
  );
};

export default Navbar;
