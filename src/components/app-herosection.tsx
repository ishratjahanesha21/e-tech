import { Button } from "./ui/button"
import { Card } from "./ui/card"



const Herosection = () => {
  return (
    <>
    <Card>
    <div className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen border-2 border-black ">
    
    <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                    Be on
                    <span className="text-5xl sm:text-7xl">
                        Time
                    </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div className="flex mt-8 gap-2">
                    <Button className="p-6 ">
                        Get started
                    </Button>
                    <Button className="p-6 bg-white text-black border-2 border-black hover:bg-black hover:text-white">
                        Read more
                    </Button>
                </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="https://png.pngtree.com/png-vector/20240705/ourmid/pngtree-modern-electronic-gadgets-on-transparent-background-png-image_12989722.png" className="max-w-xs md:max-w-sm m-auto"/>
            </div>
        </div>
    </div>
</div>
    </Card>

    </>
  )
}

export default Herosection  