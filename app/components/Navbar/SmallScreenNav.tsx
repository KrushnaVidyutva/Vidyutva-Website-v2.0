import { AiOutlineMenu } from "react-icons/ai"
import { GrClose } from 'react-icons/gr'
import { Link } from "@remix-run/react"
import { useState } from "react";

const productData = [
    "Vidyutva AC 3.3Kw",
    "Vidyutva AC 7.2Kw",
    "Vidyutva DC 30Kw"
]

const SmallScreenNav = () => {
    const [showList, setShowList] = useState(false);
    const [navproduct, setNavProduct] = useState(false)
    const [navDevice, setNavDevice] = useState(false)

    const childProduct = () => {
        setNavProduct(!navproduct);
    }
    const childDevice = () => {
        setNavDevice(!navDevice);
    }

    const handleClick = () => {
        setShowList(!showList);
    }

    return (
        <>
            {/* small screen navigation bar */}
            <div className="hidden max-[840px]:block">
                <div className="px-10 h-32 flex justify-between items-center rounded-bl-[20px] rounded-br-[20px]">
                    <Link to={"/"}>
                        <img src="/images/Logo/Vidyutvalogo.png" alt="Loading...." className="h-[100px] w-[110px]" />
                    </Link>
                    {
                        showList ? <GrClose className="text-3xl" onClick={handleClick} /> :
                            <AiOutlineMenu className="text-3xl" onClick={handleClick} />
                    }
                </div>
                {
                    showList && (
                        <div className='smborder'>
                            <ul>
                                <li className='px-16 p-4 border-b font-semibold flex justify-between items-center' onClick={childDevice}>
                                    SEGMENTS
                                    <span className={navDevice ? `smupicon` : `transition-all duration-500 ease-in`}>
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </span>
                                </li>
                                <li className='px-16 p-4 border-b font-semibold flex justify-between items-center' onClick={childProduct}>
                                    PRODUCTS
                                    <span className={navproduct ? `smupicon` : `transition-all duration-500 ease-in`}>
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            aria-hidden="true"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </span>
                                </li>
                                <div className="sm_sub_list">
                                    {productData.map((element, index) => (
                                        <li key={index} className={navproduct ? `pl-20 p-4 font-semibold` : `hidden`}>
                                            <Link
                                                to={`/offerings/${element}`}
                                                className="blsitem uppercase"
                                                onClick={handleClick}
                                            >
                                                {element}
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                                <Link to={`/aboutus`}><li className='px-16 p-4 border-b font-semibold'>ABOUT US</li></Link>
                                <Link to={`#`}><li className='px-16 p-4 border-b font-semibold'>Get in Touch</li></Link>
                            </ul>
                        </div >
                    )
                }
            </div >
        </>
    )
}

export default SmallScreenNav