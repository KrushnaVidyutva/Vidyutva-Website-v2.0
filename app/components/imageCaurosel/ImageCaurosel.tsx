import images from "./Image";

const row1 = images.row1;
const row2 = images.row2;

const ImageCaurosel = () => {
    return (
        <div className="w-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="flex w-full overflow-hidden select-none mask-gradient">
                    <div className="flex animate-scrollX">
                        {row1.map((el, index) => (
                            <div key={index} className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                                <img src={el} className="object-contain w-full h-full rounded shadow-sm aspect-[16/9] p-5" alt="company logo" />
                            </div>
                        ))}
                    </div>
                    <div className="flex animate-scrollX">
                        {row1.map((el, index) => (
                            <div key={index} className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                                <img src={el} className="object-contain w-full h-full rounded shadow-sm aspect-[16/9] p-5" alt="company logo" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full overflow-hidden select-none mask-gradient">
                    <div className="flex animate-scrollX-reverse animation-delay-3">
                        {row2.map((el, index) => (
                            <div key={index} className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                                <img src={el} className="object-contain w-full h-full rounded shadow-sm aspect-[16/9] p-5" alt="company logo" />
                            </div>
                        ))}
                    </div>
                    <div className="flex animate-scrollX-reverse animation-delay-3">
                        {row2.map((el, index) => (
                            <div key={index} className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
                                <img src={el} className="object-contain w-full h-full rounded shadow-sm aspect-[16/9] p-5" alt="company logo" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCaurosel