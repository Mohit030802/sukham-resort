import Gallery from './GalleryImage';

const NearbyData = ({data}) => {
  return (
    <div className='bg-gradient-to-r from-[#DCD6F7] via-[#BBE1FA]  to-[#BBDED6] ' id='Near'>
    <h1 className='text-center text-4xl font-bold p-8'>
      NearBy Places
    </h1>
    <div className='wrapp content-center justify-center align-center px-10 pb-10 mx-auto w-4/5'>
      {
        data.map((data) =>( 
          <Gallery data={data} key={data.id} />
          ))
        }
    </div>
        </div>
  )
}

export default NearbyData