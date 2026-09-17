import { Link } from "react-router-dom";

function Footer() {

    return (
        <div className="text-lg bg-gray-200 shadow-lg mt-10 mb-0 py-10 px-10">
            <footer>
                <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-8">

                    <section className="flex flex-col space-y-3">
                        <h2 className="text-2xl font-bold mb-2">About Us</h2>

                        <p className="text-gray-600 mt-1">
                            Local Brand
                            <br />
                            Modern & Modest Fashion
                            <br />
                            Egypt
                        </p>
                    </section>


                    <section className="flex flex-col space-y-3">
                        <h2 className="text-2xl font-bold mb-2">Quick Links</h2>

                        <ul className="flex flex-col text-gray-600 mt-1">
                            <li className="hover:text-[#E0A0A1] transition-colors duration-300">
                                <Link to="/scarves">Scarves</Link>
                            </li>

                            <li className="hover:text-[#E0A0A1] transition-colors duration-300">
                                <Link to="/khimars">Khimars</Link>
                            </li>

                            <li className="hover:text-[#E0A0A1] transition-colors duration-300">
                                <Link to="/accessories">Accessories</Link>
                            </li>

                            <li className="hover:text-[#E0A0A1] transition-colors duration-300">
                                <Link to="/hijabs">Hijabs</Link>
                            </li>
                        </ul>
                    </section>


                    <section className="flex flex-col space-y-3">
                        <h2 className="text-2xl font-bold mb-2">Owner</h2>

                        <p className="text-gray-600 mt-1">
                            Hijabi Group
                            <br />

                            <a
                                className="hover:text-[#E0A0A1] transition-colors"
                                href="https://www.linkedin.com/in/bassanttamer3/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>

                            <br />
                            +201212478458
                        </p>
                    </section>
                    <section className="flex flex-col space-y-3">
                        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>

                        <p className="text-gray-600 mt-1">
                            Customer Support
                            <br />
                            Available 24/7
                            <br />
                            +201212478458
                        </p>
                    </section>

                </div>

                <p className="text-center text-gray-600 mt-5">
                    <span className="text-[#E0A0A1]">&copy;</span>
                    {new Date().getFullYear()} My Store. All rights reserved.
                </p>
            </footer>
        </div>
    );
}

export default Footer;