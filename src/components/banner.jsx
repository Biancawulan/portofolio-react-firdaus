import React from "react"

import { TypeAnimation } from "react-type-animation"
export default function Banner() {
  return (
    <div
      id="Home"
      className="section container mx-auto max-w-[1200px] px-3 items-center"
    >
      <div className="w-full">
        <div className="block text-center text-yellow-50 font-secondary font-black text-[30px] ">
          Hello I'am
          <div>
            <TypeAnimation
              sequence={[
                " Student",
                2000,
                " FrontEnd Development",
                2000,
                " UI/UX Designer",
                2000,
                " Ready For Work",
                3000,
              ]}
              wrapper="span"
              speed={50}
              className="ml-3 text-secondary"
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="max-w-[750] text-center mx-auto mt-5 text-yellow-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum nisi
          modi praesentium quos reiciendis, rerum doloremque culpa facilis, quas
          sit eaque voluptatem perferendis veniam incidunt quibusdam, dolore
          corporis aspernatur.
        </div>
      </div>
    </div>
  )
}
