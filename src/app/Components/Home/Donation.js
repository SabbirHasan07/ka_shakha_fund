const Donation = () => {
    return (
        <div className="bg-gray-300 w-full h-full">
            <div className="py-4">
                <h1 className="text-center text-2xl my-4 font-bold">DONATION</h1>
                <div className="border-2 py-6">
                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label htmlFor="username-success" className="block mb-2 text-sm font-medium">Your name</label>
                            <input type="text" id="username-success" className="bg-green-50 border text-white placeholder:text-white text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 " placeholder="Write Your Name" />
                        </div>
                        <div className="mb-9">
                            <label htmlFor="username-success" className="block mb-2 text-sm font-medium">Amount</label>
                            <input type="text" id="username-success" className="bg-green-50 border text-white placeholder:text-white text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 " placeholder="Write the amount you want to pay" />
                        </div>
                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-16 py-2 w-full me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">PAY NOW</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default Donation;