import Rainbow from './Rainbow'
const Hero = () =>{
    return(
        <section className="py-20 relative">
         <div className="w-full h-full my-20 mx-auto space-y-2 bg-black text-white flex flex-col items-center">
                <div className="font-bold text-3xl md:text-6xl ">
                    Web3 and <span className="text-red-400">Metaverse</span> 
                </div>
                <div className="font-bold text-2xl md:text:4xl">
                    Panaverse | AA Assignment
                </div>
                <div className="font-bold text-xl md:text:2xl">
                    Bringing Web3 to the World
                </div>
                <div className='mt-10'>
                    <Rainbow />
                </div>
        </div>   
        </section>
    )
}
export default Hero