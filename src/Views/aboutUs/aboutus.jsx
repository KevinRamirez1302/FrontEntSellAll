import comercio from '/img/comercio.jpeg'
import { AiFillFire } from 'react-icons/ai'

export const AboutuS = () => {
  return (
    <>
      <section className=" w-full flex flex-col lg:flex-row items-center  font-poppins">
        <div className=" text-center lg:text-left py-10 lg:py-40 lg:px-20 lg:w-3/6 ">
          <h1 className=" text-2xl lg:text-4xl my-6 text-purple-700 font-bold">
            About us
          </h1>
          <p className=" lg:text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            necessitatibus numquam quod, minima libero esse doloribus enim error
            quas earum vero, ad vitae odio provident, quo quibusdam corrupti in
            ea!s
          </p>
          <div className=" text-left justify-center my-10  lg:my-10 flex">
            <div className="  w-full lg:w-1/3 mx-6">
              <div className=" items-center flex">
                <AiFillFire size={26} color="purple" />
                <h1 className=" font-bold">Versatil brand</h1>
              </div>
              <p className="p-2 text-gray-500">
                We are crafting a digital method that subsists life across all
                mediums.
              </p>
            </div>
            <div className="w-full lg:w-1/3 mx-6">
              <div className=" items-center flex">
                <AiFillFire size={26} color="purple" />
                <h1 className="font-bold">Digital brand</h1>
              </div>
              <p className="p-2 text-gray-500">
                We believe in innovation by merging primary with elaborate
                ideas.
              </p>
            </div>
          </div>
        </div>
        <div className=" p-10 lg:py-40 lg:px-20 lg:w-3/6">
          <img src={comercio} alt="" />
        </div>
      </section>
    </>
  )
}
