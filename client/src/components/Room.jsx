import { Link } from "react-router-dom";
import room from "../assets/hotelroom.webp";

const Room = () => {
  return (
    <div className="flex flex-col md:flex-row sm:p-10 p-2 items-center m-auto justify-center">
      <div className=" flex h-80 sm:w- rounded-md">
        <img className="rounded-md shadow-md shadow-slate-500" src={room} alt="" />
      </div>
      <div className="md:w-1/2 md:font-bold md:text-xl mt-6 md:mt-0 md:ml-10 text-center">
        <h1 className="text-4xl mb-8"> <span className="text-6xl border-b-4 border-black w-fit border-double">Rooms</span></h1>
        <p className="text-sm font-normal text-left leading-8 font-paraFont">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          quidem explicabo. Veritatis possimus, eum numquam quidem magnam
          repellat et doloribus commodi fuga iusto, voluptas architecto impedit
          officiis iure doloremque quo eaque molestias odio dignissimos, nisi
          odit deleniti amet a! Adipisci, non ullam fuga accusamus odit sed? Cum
          facilis possimus molestias commodi voluptas voluptatum necessitatibus
          veritatis quam laboriosam harum sed aliquid, non inventore officia
          illo consectetur molestiae minima repellat quae quisquam maiores? Quo
          accusantium expedita dolore dicta esse corporis iure dolorum tempore
          nulla eaque aliquid in numquam laudantium quam, quis provident
          corrupti. Magnam harum, ipsum voluptates ratione voluptas rem ducimus
          similique.
        </p>
        <button className="bg-black p-2 text-white rounded-md mt-2 hover:scale-95 transition ease-in duration-200"><Link to="/Rooms">Book Now</Link></button>
      </div>
    </div>
  );
};

export default Room;
