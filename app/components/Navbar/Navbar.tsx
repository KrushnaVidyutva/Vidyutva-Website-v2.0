import { Link } from '@remix-run/react'
import SmallScreenNav from './SmallScreenNav'
import { useEffect, useState } from 'react';
const Navbar = () => {

    const [fix, setFix] = useState(false);


    useEffect(() => {
        const setFixed = () => {
            if (window.scrollY >= 50) {
                setFix(true);
            } else {
                setFix(false);
            }
        };

        window.addEventListener('scroll', setFixed);

        return () => {
            window.removeEventListener('scroll', setFixed);
        };
    }, []);

    return (
        <div>
            <nav className={`bg-white rounded-bl-[20px] rounded-br-[20px] min-h-[5.5rem] w-[100%] flex items-center justify-between px-[5%] z-40 max-[840px]:hidden ${fix ? `fixed top-0 left-0 w-full xl:shadow-lg z-40` : ``} transition-all duration-500 ease-in-out`}>
                <Link to={"/"}>
                    <img src="/images/Logo/Vidyutvalogo.png" alt="Loading...." className="h-[100px] w-[110px]" />
                </Link>

                <div className="uppercase flex justify-between items-center w-96">
                    <Link to={"#"} className="px-[1rem] py-[.5rem] font-medium font-sans hover:border-b hover:border-[#00a181] hover:text-[#00a181] transition-all duration-300 ease-out group">
                        segments
                    </Link>
                    <Link to={"#product"} className="px-[1rem] py-[.5rem] font-medium font-sans hover:border-b hover:border-[#00a181] hover:text-[#00a181] transition-all duration-300 ease-out group">
                        products
                    </Link>
                    <Link to={"/aboutus"} className="px-[1rem] py-[.5rem] font-medium font-sans hover:border-b hover:border-[#00a181] hover:text-[#00a181] transition-all duration-300 ease-out group">
                        about us
                    </Link>
                </div>

                <div className="flex justify-center items-center">
                    <Link to={"/get-in-touch"} className="flex justify-center items-center rounded-[3.125rem] bg-[#00a181] text-white py-[.75rem] px-[1.5rem] hover:bg-[#009085] bx-shadow2 transition-all duration-300 ease-in">
                        <div className="font-sans text-white font-medium">Get in touch</div>
                    </Link>
                </div>
            </nav>
            <SmallScreenNav />
        </div>
    )
}

export default Navbar