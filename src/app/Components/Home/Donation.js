'use client'
import { useState } from 'react';

const Donation = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePayNowClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gray-300 w-full h-full">
            <div className="py-4">
                <h1 className="text-center text-2xl my-4 font-bold">DONATION</h1>
                <div className="border-2 py-6">
                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium">Your name</label>
                            <input type="text" id="username" className="bg-gray-600 border text-white placeholder:text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700" placeholder="Write Your Name" />
                        </div>
                        <div className="mb-9">
                            <label htmlFor="amount" className="block mb-2 text-sm font-medium">Amount</label>
                            <input type="text" id="amount" className="bg-gray-600 border text-white placeholder:text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700" placeholder="Write the amount you want to pay" />
                        </div>
                        <button type="button" onClick={handlePayNowClick} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-16 py-2 w-full mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            PAY NOW
                        </button>
                    </form>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4 sm:p-6 md:p-8 lg:p-12">
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-sm sm:max-w-md lg:max-w-5xl w-full">
                        <h2 className="text-xl font-bold mb-4 text-center">Confirm Payment</h2>
                        <p className="mb-4">Are you sure you want to proceed with the payment?</p>

                        <h3 className="text-lg font-semibold mb-2 text-center">Bkash Payment Instructions</h3>
                        <hr />

                        <div className="lg:flex lg:gap-8">
                            <div>
                                <h4 className="text-md font-semibold mb-1">Manual Payment:</h4>
                                <ol className="list-decimal list-inside text-sm mb-4 mt-2">
                                    <li>Type *247# and go to the &quot;Send Money&quot; section.</li>
                                    <li>Enter our Bkash number: <span className="font-bold">01521417631</span>.</li>
                                    <li>Input the exact amount specified above.</li>
                                    <li>In the reference section, type &quot;Donation&quot; or &quot;1&quot; and include your name.</li>
                                    <li>Confirm the payment and save the transaction ID for your records.</li>
                                </ol>
                            </div>

                            <div>
                                <h4 className="text-md font-semibold mb-1">Bkash App Payment:</h4>
                                <ol className="list-decimal list-inside text-sm mb-4 mt-2">
                                    <li>Go to the Bkash app and select &quot;Send Money&quot;.</li>
                                    <li>Enter the number: <span className="font-bold">01521417631</span>.</li>
                                    <li>Input the donation amount and enter &quot;Donation&quot; as the reference.</li>
                                    <li>Complete the transaction and save the transaction ID.</li>
                                </ol>
                            </div>

                            <div className="lg:w-1/3">
                                <h4 className="text-md font-semibold mb-1">Complete Payment:</h4>
                                <hr />
                                <div className="my-5">
                                    <label htmlFor="last-four" className="block mb-2 text-sm text-red-600">* Last four digits of Bkash sender number</label>
                                    <input type="text" id="last-four" className="bg-gray-600 border text-white placeholder:text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700" placeholder="Last four digits" />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button onClick={handleCloseModal} className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">Cancel</button>
                            <button onClick={handleCloseModal} className="bg-green-900 text-white px-4 py-2 rounded">Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Donation;
