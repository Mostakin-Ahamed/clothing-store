import truck from '/icons8-truck-100-2.png'
import gift from '/icons8-gift-50.png'
import returnPolicy from '/icons8-loop-50.png'
import payment from '/icons8-get-cash-50.png'

const Features = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-20' >

            <div className='my-4 space-x-4 lg:flex lg:justify-around'>
                <div className='space-y-4 shadow-xl p-4 rounded-lg bg-white hover:scale-105 transition-transform duration-300'>
                    <div className='p-4 w-12 h-12 rounded-full bg-[#96ECB4]'>
                        <img src={gift} alt="" />
                    </div>
                    <h3 className='text-lg font-extrabold'>Items in stock</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellat?</p>
                </div>
                <div className='space-y-4 shadow-xl p-4 rounded-lg bg-white hover:scale-105 transition-transform duration-300'>
                    <div className='p-4 w-12 h-12 rounded-full bg-[#96ECB4]'>
                        <img src={returnPolicy} alt="" />
                    </div>
                    <h3 className='text-lg font-extrabold'>Best return policy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellat?</p>
                </div>
                <div className='space-y-4 shadow-xl p-4 rounded-lg bg-white hover:scale-105 transition-transform duration-300'>
                    <div className='p-4 w-12 h-12 rounded-full bg-[#96ECB4]'>
                        <img src={payment} alt="" />
                    </div>
                    <h3 className='text-lg font-extrabold'>Payment Handling</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellat?</p>
                </div>
                <div className='space-y-4 shadow-xl p-4 rounded-lg bg-white hover:scale-105 transition-transform duration-300'>
                    <div className='p-4 w-12 h-12 rounded-full bg-[#96ECB4]'>
                        <img src={truck} alt="" />
                    </div>
                    <h3 className='text-lg font-extrabold'>Instant Delivery</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, repellat?</p>
                </div>


            </div>

        </div>
    );
};

export default Features;