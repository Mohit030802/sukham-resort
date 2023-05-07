import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const GalleryImage = ({data : {id, img, description}}) => {

  const navigate = useNavigate();

  return (
    <div className='  cursor-pointer'>

      <Link to={`/place/${id}`}>
      <img className='hover:scale-110 transition ease-in-out delay-150 duration-300 ' src={img} alt="" 
      />
      </Link>

    </div>
  )
}

export default GalleryImage