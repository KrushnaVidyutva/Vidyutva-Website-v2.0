import Navbar from "~/components/Navbar/Navbar"
import Footer from "~/components/footer/Footer"


const cancellationAndRefundPolicy = () => {
    return (
        <>
            <Navbar />
            <div className="relative">
                <img src="/images/bg/policy-banner.webp" alt="Loading..." className="-z-10 w-full" />
                <h1 className="absolute top-[41%] left-[2.5rem] text-6xl font-bold max-sm:text-4xl"><span className="text-[#00a181]">Refund</span> Policy</h1>
            </div>
            <div className="px-20 max-md:px-10">
                <p className="text-gray-500 text-lg font-normal py-4">Vidyutva Technology Private Limited provides best in class electric vehicle charging services for its customer. Our focus is on complete customer satisfaction. In an unfortunate event, if you are not satisfied with the services provided, we have the following refund and cancellation policy.</p>
                <h2 className="font-semibold text-3xl underline pb-4">Cancellation Policy :</h2>
                <div className="flex justify-end items-center mb-4">
                    <ul className="text-gray-500 text-lg font-normal list-disc w-[94%]">
                        <li>Customer can book Instant EV Charging slots for charging their Electric Vehicles by using Vidyutva Application</li>
                        <li>Please note that for the booked slots, chargers will be reserved under your name and will not be available to any other customer for 30 mins from the booking time.</li>
                        <li>If the customer doesn’t reach the station within 30min time, the reservation will be automatically cancelled.</li>
                        <li>No amount is deducted during booking or cancellation of EV charging station time slot.</li>
                    </ul>
                </div>
                <h2 className="font-semibold text-3xl underline pb-4">Refund Policy :</h2>
                <div className="flex justify-end items-center mb-4">
                    <ul className="text-gray-500 text-lg font-normal list-disc w-[94%]">
                        <li>In case of deletion of customer account by the customer, the balance wallet Amount can be refunded by the Vidyutva Technology Private Limited.</li>
                        <li>For Refund Customer need to start the Email communication with the support team.</li>
                        <li>In the email, customer should give all the details, including name, phone Number, Email ID, Customer number, Balance wallet Amount, Date of Deletion of Account, Reason of Deletion, and the Bank Details for the customer (Require for Bank Transfer).</li>
                        <li>The email ID for sending manual refund is <a href={`mailto:support@vidyutva.com`} className="text-blue-400">support@vidyutva.com</a>.</li>
                        <li>After receipt of communication from the customer, Vidyutva Technology Private Limited will refund the Wallet balance amount to the customer through the bank transfer within 10 working days.</li>
                    </ul>
                </div>
                <h2 className="font-semibold text-3xl underline pb-4">Contact Us :</h2>
                <div className="mb-4">
                    <p className="text-gray-500 text-lg font-normal">If you have any questions regarding our Cancellation and Refund policy, please contact us:</p>
                    <p className="text-gray-500 text-lg font-normal"><span className="text-gray-700 font-medium">Email:</span> <a href={`mailto:support@vidyutva.com`} className="text-blue-400">support@vidyutva.com</a></p>
                    <p className="text-gray-500 text-lg font-normal"><span className="text-gray-700 font-medium">Phone No:</span> <a href={`tel:+91 7003159198`} className="text-blue-400">+91 7003159198</a> </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default cancellationAndRefundPolicy