import { useState } from "react"


const Questions = () => {
    const [active, setActive] = useState(false)

    return (
        <div className={`flex flex-col justify-center-center border-t border-green-50 py-5 cursor-pointer ${active ? "gap-5" : ""}`} onClick={() => setActive(!active)}>
            <div className="flex justify-between items-center">
                <h2 className="font-normal text-xl">How do I use the Chargefox network?</h2>
                <div className="flex justify-center items-center rounded-full border border-white h-8 w-8">
                    <div className={`flex justify-center items-center w-[0.8rem] h-[0.8rem] pt-1 ${active ? "rotate-180" : ""}`}>
                        <svg className={``} width="100%" height="100%" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.293 0.050293L5.99997 4.34329L1.70697 0.050293L0.292969 1.46429L5.99997 7.17129L11.707 1.46429L10.293 0.050293Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={`hiddenHeight ${active ? "activeHeight" : ""}`}>
                <p className="text-lg font-normal">Simply download the Chargefox app for iPhone or Android, create an account, plug in, and start your charging session. The app will let you know in realtime how your charge is going so you don’t need to keep checking back.</p>
            </div>
        </div>
    )
}

export default Questions