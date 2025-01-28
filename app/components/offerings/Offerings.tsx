import OfferingCard from "./OfferingCard"

const OfferingData = [
    {
        name: "Ev Market Research and Analysis",
        image: "/images/icon/offeringIcons/research-analysis.webp"
    },
    {
        name: "Import Export Services",
        image: "/images/icon/offeringIcons/import.webp"
    },
    {
        name: "Supply Chain Management",
        image: "/images/icon/offeringIcons/supply-chain.webp"
    },
    {
        name: "Techonology Consulting Services",
        image: "/images/icon/offeringIcons/technology-services.webp"
    },
    {
        name: "Charging Management System Software",
        image: "/images/icon/offeringIcons/cms.webp"
    },
    {
        name: "Payment Integration",
        image: "/images/icon/offeringIcons/payment-gateway.webp"
    },
    {
        name: "Data Analysis",
        image: "/images/icon/offeringIcons/data-analysis.webp"
    },
    {
        name: "Cloud Consulting Services",
        image: "/images/icon/offeringIcons/cloud-service.webp"
    }
]

const Offerings = () => {
    return (
        <div className="relative">
            <div className="grid grid-cols-8 gap-6 pt-8 bg-[url('/images/offerings/bg-main.webp')] bg-cover z-30">
                <img src="/images/offerings/bg-dots.webp" alt="Loading..." className="w-40 absolute top-8 left-[50%] max-xl:hidden " />
                <div
                    className="col-span-5 flex flex-col justify-center gap-4 pl-16 bg-[url('/images/offerings/bg-border.webp')] bg-contain bg-no-repeat max-[990px]:col-span-8 max-[990px]:order-2"
                >
                    <h2 className="text-7xl font-extrabold text-[#00a181] uppercase max-sm:text-5xl max-[400px]:text-3xl">EV Ecosystem <br /><span className="text-[#FF914D]">Aggregator</span></h2>
                    <div className="flex">
                        <button className="uppercase text-white text-lg font-bold px-8 py-3 bg-[#00a181] rounded-full border border-transparent hover:border-[#00a181] hover:bg-white hover:text-[#00a181] transition-all duration-300 ease-in">
                            Offerings
                        </button>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                        {
                            OfferingData.map((offering, index) => (
                                <OfferingCard
                                    key={index}
                                    name={offering.name}
                                    image={offering.image}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-3 flex items-center max-[990px]:col-span-8 max-[990px]:order-1">
                    <img src="/images/offerings/offerings.webp" alt="Loading..." />
                </div>
            </div>
        </div>
    )
}

export default Offerings