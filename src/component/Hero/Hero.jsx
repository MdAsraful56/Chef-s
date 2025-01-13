import heroSectionImg from "../../assets/Rectangle 1.png"
export default function Hero(){
    return (
        <div className="mt-10">
            <div className=" absolute">
                <img src={heroSectionImg} alt="" />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center lg:h-full text-center text-white px-6 ">
                <h1 className="text-xl lg:text-4xl font-bold mb-6 mt-10 lg:mt-36">Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className="text-xs hidden lg:block lg:text-base font-light mb-8">
                    Learn and Master Basic Programming, Data Structures, Algorithms, OOP, Databases, <br /> and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                </p>
                <div className="flex flex-row space-x-6">
                    <button className=" px-6 py-3 bg-green-400 hover:bg-green-600 text-white rounded-3xl font-semibold ">Explore Now</button>
                    <button className="font-semibold px-6 py-3 hover:bg-green-600 border-2 rounded-3xl">Our Feedback</button>
                </div>
            </div>
        </div>
    )
}