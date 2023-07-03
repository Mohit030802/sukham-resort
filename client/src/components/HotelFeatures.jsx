import bar from '../assets/features/bar.png'
import swim from '../assets/features/swimming.png'
import cafe from '../assets/features/cafe.png'
import food from '../assets/features/food.png'
import hiking from '../assets/features/hiking.png'
import hotel from '../assets/features/hotel.png'
import tent from '../assets/features/tent.png'
import parking from '../assets/features/parking.png'


const HotelFeatures = () => {
  return (
    
    <>
     <div className='bg-gradient-to-r from-[#DCD6F7] via-[#BBE1FA]  to-[#BBDED6] w-full  text-gray-900 p-6'>
              <p className='text-4xl font-bold md:mb-4 mb-8 flex justify-center items-center'><span className='text-6xl border-b-4 border-black w-fit border-double'>Resort Features</span></p>
              <div className=' mx-auto p-4 flex flex-col justify-center w-full h-full '>
                 
                    
              
                <div className='w-full grid grid-cols-1 m-2 md:grid-cols-4 gap-6 text-center py-8 font-paraFont '>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto mt-4' src={swim}  />
                        <p className='my-4'>Swimming Pool</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto mt-4' src={hotel}  />
                        <p className='my-4'>Room Service</p>
                    </div>
                    
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto mt-4' src={food}/>
                        <p className='my-4'>Food Bank</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto mt-4' src={cafe} />
                        <p className='my-4'>Cafe's</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto mt-4' src={bar}/>
                        <p className='my-4'>Bar</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto mt-4' src={tent}  />
                        <p className='my-4'>Camping</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto mt-4' src={hiking} />
                        <p className='my-4'>Trekking</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] duration-500 hover:scale-110 '>

                        <img className='w-20 mx-auto mt-4' src={parking} />
                        <p className='my-4'>Parking</p>
                    </div>
                    
                </div>
            </div>

        </div>
    </>
  )
}

export default HotelFeatures