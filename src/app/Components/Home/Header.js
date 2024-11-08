import Image from "next/image";

const Header = () => {
    return (
        <div className="flex justify-between bg-gray-800  p-6 items-center">
            <Image className="rounded-md" src={"/photos/unnamed.jpg"} height={60} width={60}  alt=""/>
            <h1 className="text-2xl text-white">কা শাখা কেন্দ্রীয় তহবিল</h1>
            <button className="lg:px-4 px-2 py-1 rounded-sm lg:py-1 bg-white hover:bg-gray-400 font-bold">LOG IN</button>
        </div>
    )
}
export default Header;
