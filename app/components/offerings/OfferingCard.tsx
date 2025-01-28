interface OffringProps {
    name: string;
    image: string;
}

const OfferingCard = ({ name, image }: OffringProps) => {
    return (
        <div className="flex items-center col-span-1 border-2 border-transparent hover:border-[#00a181] rounded-2xl hover:shadow-lg transition-all duration-300 ease-in">
            <div className="p-4">
                <img src={image} alt="Loading.." className="h-10 w-10 max-sm:h-8 max-sm:w-8" />
            </div>
            <div className="border-l-2 border-black p-4 text-lg font-medium max-[400px]:text-base">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default OfferingCard