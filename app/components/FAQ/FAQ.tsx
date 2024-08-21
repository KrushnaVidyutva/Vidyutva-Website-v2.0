import { Link } from "@remix-run/react"
import Questions from "./Questions"
const FAQ = () => {

    return (
        <div className="px-[5%] pb-[7rem]">
            <div className="bg-[#009085] rounded-[1.5rem] px-[3.75rem] py-[6.25rem] min-[950px]:grid items-start min-[950px]:grid-cols-9 max-[950px]:flex max-[950px]:flex-col gap-[5rem]">
                <div className="min-[768px]:col-span-4 flex flex-col items-start gap-6 text-white">
                    <h2 className="font-semibold text-5xl">Got questions?</h2>
                    <p className="text-lg font-normal">Thinking about getting into your first EV or maybe you manage a fleet of hundreds. You’ve got questions and we’ve got answers.</p>
                    <div className="flex items-end flex-wrap gap-4">
                        <Link to={"#"} className="flex justify-center items-center text-zinc-800 text-center px-6 py-3 gap-3 rounded-[3.125rem] border border-white bg-white hover:bg-[#00a181] hover:text-white transition-all duration-300 ease-out">
                            <div className="font-normal text-base pb-1">See all FAQs</div>
                            <div className="flex justify-center items-center flex-col w-4 h-4">
                                <svg width="currentwidth" height="currentheight" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.586 13L17.172 13L11.879 18.293L13.293 19.707L21 12L13.293 4.29303L11.879 5.70703L17.172 11L2.586 11V13Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="min-[950px]:col-span-5 flex flex-col text-white ">
                    <Questions
                        question="How do I use the Vidyutva network?"
                        answer="Simply download the Vidyutva app for Android, create an account, plug in, and start your charging session. The app will let you know in realtime how your charge is going so you don’t need to keep checking back."
                    />
                    <Questions
                        question="Can I keep my chargers private?"
                        answer="Absolutely. Vidyutva can help you manage and monitor private chargers. We provide solutions for workplaces, residential developments, fleets and much more."
                    />
                    <Questions
                        question="Does Vidyutva install chargers?"
                        answer="Yes Vidyutva install chargers and also, Vidyutva provides the software and services for organisations to manage and monitor their chargers and the app for drivers to find, use and pay for charging."
                    />
                    <Questions
                        question="Why add my chargers to the Vidyutva network?"
                        answer="Vidyutva is more than just a charging network—it's a technology-driven ecosystem. By integrating your chargers with the Vidyutva network. Vidyutva's advanced technology, including predictive maintenance and real-time monitoring, ensures your chargers are not only visible but also reliable. Rely on Vidyutva to locate their next charge, making your chargers accessible to almost every EV owner in India."
                    />
                    <Questions
                        question="Why should I install EV chargers?"
                        answer="There are lots of reasons to install EV chargers at your premises. Installing public EV charging has been shown to increase customer loyalty, grow revenue, and attract new customers. It’s also a great way to demonstrate your sustainability values."
                    />
                    <Questions
                        question="How do charging subscriptions and prepaid charger packs work?"
                        answer="With a Vidyutva subscription or prepaid charger pack you can provide your customers or staff with access to the largest public EV charging network in India. Your chosen drivers will be able to charge their car at all public chargers on the Vidyutva network with absolutely no cost to them."
                    />
                    <div className="border-b border-green-50"></div>
                </div>
            </div>
        </div>
    )
}

export default FAQ