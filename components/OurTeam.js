import React from 'react'

const OurTeam = () => {
  return (
    <div>
      <div className="bg-whitesmoke flex flex-row items-start justify-start py-20 px-[108px] gap-[24px] text-mini">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px]">
              <b className="w-[600px] relative text-17xl tracking-[0.33px] leading-[144%] inline-block">
                Our team
              </b>
              <div className="w-[600px] relative tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text inline-block">
                Thousand is a full-cycle digital production company with its own
                product analytics, design, web and mobile development.
              </div>
              <div className="flex flex-row items-start justify-start py-2 px-0 gap-[16px] text-29xl">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <b className="relative tracking-[0.33px] leading-[144%]">
                    28
                  </b>
                  <div className="w-[184px] relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text text-slategray inline-block">
                    team members
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <b className="relative tracking-[0.33px] leading-[144%]">
                    +100
                  </b>
                  <div className="w-[184px] relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text text-slategray inline-block">
                    projects
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <b className="relative tracking-[0.33px] leading-[144%]">
                    7 years
                  </b>
                  <div className="w-[184px] relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text text-slategray inline-block">
                    in IT sphere
                  </div>
                </div>
              </div>
              <div className="w-[600px] relative tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text inline-block">
                All the necessary specialists - from a designer to a tester -
                are on our staff. We hire the best specialists in the market.
                It's expensive but worth it
              </div>
            </div>
            <div className="w-[600px] relative h-[408px]">
              <div className="absolute top-[48px] left-[20px] rounded-2xl w-[560px] h-[360px] flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.178)]"
                  alt=""
                  src="/img-6115@2x.png"
                />
              </div>
              <div className="absolute top-[0px] left-[0px] w-[600px] h-[400px]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-xl w-[600px] h-[400px] object-cover"
                  alt=""
                  src="/img-61151@2x.png"
                />
                <div className="absolute top-[170px] left-[270px] rounded-81xl flex flex-row items-start justify-start p-3">
                  <img className="w-9 relative h-9" alt="" />
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default OurTeam
