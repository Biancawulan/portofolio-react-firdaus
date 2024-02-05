import React from "react"

export default function Portfolio() {
  return (
    <div id="Portfolio" className="section">
      <div className="container mx-auto max-w-[1200px] px-3 pt-3 pb-20">
        <dir className="flex flex-co lg:align-center lg:flex-row justify-betweeen mb-[50px] ">
          <div className="order-2 lg:order-1 mt-5">
            <h4 className="text-secondary font-secondary text-[24px]">
              recent work
            </h4>
            <div className="text-gradient font-primary max-w-[7000px] mx-auto text-[24px]">
              {""}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur deserunt doloribus voluptatibus laborum quod,
            </div>
          </div>
          <div className="order-1 lg:order-2 text-center">
            <h2 className="text-gradient font-primary max-w-[700px] mx-auto text-[50px]">
              07
            </h2>
            <div>complete projects</div>
          </div>
        </dir>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="w-full">
            <div className="bg-white h-full justify-center items-center flex rounded-lg overflow-hidden p-5 relative group">
              <img src="/images/port1.png" alt="" />
              <div className="absolute p-5 bg-primary w-full h-full flex items-center opacity-0  group-hover:opacity-100  transition">
                <div className="text-center w-full text-white mt-[-60px] group-hover:mt-0 transition-all">
                  <div className="bg-white rounded-full px-6 inline-block mb-2">
                    <h4 className="text-gradient">UI/UX</h4>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae nobis,.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
