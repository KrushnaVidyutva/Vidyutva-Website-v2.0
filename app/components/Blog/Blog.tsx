import { Link } from "@remix-run/react"


const Blog = () => {
    return (
        <div className="bg-[#ebecef]">
            <div className="px-[5%] pb-[7rem] rounded-b-[3rem] bg-green-50 w-[100%] flex flex-col gap-[5rem]">
                <div className="w-[100%] flex gap-5 justify-between items-start">
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
                <div className="grid grid-cols-3 gap-8">
                    <div className="rounded-[1.5rem] p-5 bg-[#d9d9d99c] col-span-1 flex flex-col gap-6">
                        <div className="w-[100%] max-h-[12rem] rounded-[1.25rem] overflow-hidden">
                            <img src="/images/blog/blog-01.jpg" alt="Loading..." className="transition-all duration-300 ease-in-out imgTrns" />
                        </div>
                        <p className="font-medium text-sm text-gray-700">7 min read</p>
                        <p className="font-medium text-2xl text-gray-900">Breaking the queue: Solutions for a better charging experience</p>
                        <p className="font-medium text-sm text-gray-700">Product Manager Matt takes a deep dive into queuing for a charge. What really causes it? What are some of the myths? And what we can do about it?</p>
                    </div>
                    <div className="rounded-[1.5rem] p-5 bg-[#d9d9d99c] col-span-1 flex flex-col gap-6">
                        <div className="w-[100%] max-h-[12rem] rounded-[1.25rem] overflow-hidden">
                            <img src="/images/blog/blog-01.jpg" alt="Loading..." className="transition-all duration-300 ease-in-out imgTrns" />
                        </div>
                        <p className="font-medium text-sm text-gray-700">7 min read</p>
                        <p className="font-medium text-2xl text-gray-900">Breaking the queue: Solutions for a better charging experience</p>
                        <p className="font-medium text-sm text-gray-700">Product Manager Matt takes a deep dive into queuing for a charge. What really causes it? What are some of the myths? And what we can do about it?</p>
                    </div>
                    <div className="rounded-[1.5rem] p-5 bg-[#d9d9d99c] col-span-1 flex flex-col gap-6">
                        <div className="w-[100%] max-h-[12rem] rounded-[1.25rem] overflow-hidden">
                            <img src="/images/blog/blog-01.jpg" alt="Loading..." className="transition-all duration-300 ease-in-out imgTrns" />
                        </div>
                        <p className="font-medium text-sm text-gray-700">7 min read</p>
                        <p className="font-medium text-2xl text-gray-900">Breaking the queue: Solutions for a better charging experience</p>
                        <p className="font-medium text-sm text-gray-700">Product Manager Matt takes a deep dive into queuing for a charge. What really causes it? What are some of the myths? And what we can do about it?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog