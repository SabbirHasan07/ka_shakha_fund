import Image from "next/image";

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between bg-gray-800 p-4 md:p-6 items-center">
            <Image
                className="rounded-md"
                src={"/photos/unnamed.jpg"}
                height={60}
                width={60}
                alt=""
            />
            <h1 className="text-2xl text-white">&quot;ক&quot; শাখা কেন্দ্রীয় তহবিল</h1>
            <button className="text-sm md:text-base lg:px-4 px-2 py-1 lg:py-1 bg-white hover:bg-gray-400 font-bold rounded-sm mt-4 md:mt-0">
                LOG IN
            </button>
        </div>
    );
}

export default Header;
