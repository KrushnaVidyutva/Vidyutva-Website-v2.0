import { Link } from "@remix-run/react"


const Blog = () => {
    return (
        <div className="bg-[#ebecef]">
            <div className="px-[5%] pb-[7rem] rounded-b-[3rem] bg-green-50 w-[100%] flex flex-col gap-[5rem]">
                <div className="w-[100%] flex max-[845px]:flex-col gap-5 justify-between items-start">
                    <h2 className="font-semibold text-5xl">Latest news from Vidyutva</h2>
                    <div className="flex items-end flex-wrap gap-4">
                        <Link to={"#"} className="flex justify-center items-center text-zinc-800 text-center px-6 py-3 gap-3 rounded-[3.125rem] border border-zinc-800 bg-green-50 hover:bg-[#d9d9d99c] hover:border-[#d9d9d99c] hover:text-zinc-800 transition-all duration-300 ease-out">
                            <div className="font-normal text-base pb-1">View all</div>
                            <div className="flex justify-center items-center flex-col w-4 h-4">
                                <svg width="currentwidth" height="currentheight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11V13Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="min-[845px]:grid min-[845px]:grid-cols-3 max-[845px]:flex max-[845px]:flex-col gap-8">
                    <div className="rounded-[1.5rem] p-5 bg-[#d9d9d99c] col-span-1 flex flex-col gap-6" data-aos="fade-up" data-aos-offset="150" data-aos-duration="400">
                        <div className="w-[100%] max-h-[12rem] rounded-[1.25rem] overflow-hidden">
                            <img src="/images/blog/Blog1.jpg" alt="Loading..." className="transition-all duration-300 ease-in-out imgTrns" />
                        </div>
                        <div className="flex items-end flex-wrap gap-4">
                            <Link to="https://www.linkedin.com/posts/vidyutva_vidyutva-iitbhubaneswar-evcharging-activity-7217740610923823104-_fSd?utm_source=share&utm_medium=member_android" target="blank" className="flex justify-center items-center text-zinc-800 text-center px-5 py-2 gap-3 rounded-[3.125rem] border border-black bg-white hover:bg-[#00a181] hover:text-white hover:border-white transition-all duration-300 ease-out">
                                <div className="font-normal text-base pb-1">Read more</div>
                                <div className="flex justify-center items-center flex-col w-4 h-4">
                                    <svg width="currentwidth" height="currentheight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11V13Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <p className="font-medium text-2xl text-gray-900">Vidyutva is now incubated at IIT Bhubaneswar Research & Entrepreneurship Park!</p>
                        <p className="font-medium text-sm text-gray-700">This milestone marks a significant step forward in our journey to make EV charging user-friendly and reliable in India. </p>
                    </div>
                    <div className="rounded-[1.5rem] p-5 bg-[#d9d9d99c] col-span-1 flex flex-col gap-6" data-aos="fade-up" data-aos-offset="150" data-aos-duration="500">
                        <div className="w-[100%] max-h-[12rem] rounded-[1.25rem] overflow-hidden">
                            <img src="/images/blog/Blog2.jpg" alt="Loading..." className="transition-all duration-300 ease-in-out imgTrns" />
                        </div>
                        <div className="flex items-end flex-wrap gap-4">
                            <Link to="https://www.linkedin.com/posts/vidyutva_vidyutva-won-the-2nd-runner-up-mobility-award-activity-7159906491238387712-aYaY?utm_source=share&utm_medium=member_android" target="blank" className="flex justify-center items-center text-zinc-800 text-center px-5 py-2 gap-3 rounded-[3.125rem] border border-black bg-white hover:bg-[#00a181] hover:text-white hover:border-white transition-all duration-300 ease-out">
                                <div className="font-normal text-base pb-1">Read more</div>
                                <div className="flex justify-center items-center flex-col w-4 h-4">
                                    <svg width="currentwidth" height="currentheight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11V13Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <p className="font-medium text-2xl text-gray-900">Vidyutva won the 2nd runner up Mobility award at IIT Bombay in Eureka competition</p>
                        <p className="font-medium text-sm text-gray-700">It was a great experience for us meeting 60 amazing startups from 7 different tracks, in front of an amazing lineup of investors at Indian Institute of Technology, Bombay.</p>
                    </div>
                    <div className="rounded-[1.5rem] p-5 bg-[#d9d9d99c] col-span-1 flex flex-col gap-6" data-aos="fade-up" data-aos-offset="150" data-aos-duration="600">
                        <div className="w-[100%] max-h-[12rem] rounded-[1.25rem] overflow-hidden">
                            <img src="/images/blog/Blog3.jpg" alt="Loading..." className="transition-all duration-300 ease-in-out imgTrns" />
                        </div>
                        <div className="flex items-end flex-wrap gap-4">
                            <Link to="https://www.linkedin.com/posts/the-founder-institute_founder-institute-gcc-produces-5-new-technology-activity-7224119064623775745-ENvx?utm_source=share&utm_medium=member_desktop" target="blank" className="flex justify-center items-center text-zinc-800 text-center px-5 py-2 gap-3 rounded-[3.125rem] border border-black bg-white hover:bg-[#00a181] hover:text-white hover:border-white transition-all duration-300 ease-out">
                                <div className="font-normal text-base pb-1">Read more</div>
                                <div className="flex justify-center items-center flex-col w-4 h-4">
                                    <svg width="currentwidth" height="currentheight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11V13Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </Link>
                        </div>
                        <p className="font-medium text-2xl text-gray-900">Proud to announce that Vidyutva, backed by the Founder Institute Pre-Seed Accelerator, has successfully graduated from the GCC program!</p>
                        <p className="font-medium text-sm text-gray-700">Our team is more energized than ever to take on the challenges ahead and make a lasting impact in the industry...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog