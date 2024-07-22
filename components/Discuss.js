import React from 'react'

const Discuss = () => {
  return (
    <div>
       <div className="w-[1440px] relative [background:linear-gradient(90deg,_#fabc1f,_#7ca546)] h-[350px] overflow-hidden shrink-0 text-white">
            <div className="absolute top-[0px] left-[0px] w-[1440px] h-[350px]">
              <div className="absolute top-[0px] left-[0px] w-[1440px] h-[350px] opacity-[0.5] mix-blend-overlay" />
              <div className="absolute top-[0px] left-[0px] w-[1440px] h-[350px] opacity-[0.3] mix-blend-overlay" />
            </div>
            <div className="absolute top-[53px] left-[calc(50%_-_611px)] w-[1221px] flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
                <b className="w-[600px] relative tracking-[0.33px] leading-[144%] inline-block">
                  <p className="m-0">Let's discuss</p>
                  <p className="m-0">Your project</p>
                </b>
                <div className="w-[600px] relative text-mini leading-[20px] font-medium font-sf-pro-text inline-block">
                  <p className="m-0">
                    Let's figure out how to create an effective application,
                  </p>
                  <p className="m-0">its cost and terms of its development</p>
                </div>
              </div>
              <div className="shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_0px_24px_rgba(0,_0,_0,_0.16)] rounded-xl bg-white flex flex-col items-end justify-center p-6 gap-[24px] text-smi text-slategray font-sf-pro-text">
                <div className="flex flex-row items-start justify-start gap-[24px]">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                      Full name
                    </div>
                    <div className="flex flex-row items-start justify-start text-base text-gray-200">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        My Name
                      </div>
                    </div>
                    <img
                      className="w-56 relative max-h-full"
                      alt=""
                      src="/name-field-icons.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                      Phone number
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px] text-base text-gray-200">
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <img
                          className="w-[18px] relative h-3 object-cover"
                          alt=""
                          src="/image-4@2x.png"
                        />
                      </div>
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        +91
                      </div>
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        000000000
                      </div>
                    </div>
                    <img
                      className="w-56 relative max-h-full"
                      alt=""
                      src="/name-field-icons.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[24px]">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                      Business name
                    </div>
                    <div className="flex flex-row items-start justify-start text-base text-gray-200">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        ABC Technologies PVT LTD
                      </div>
                    </div>
                    <img
                      className="w-56 relative max-h-full"
                      alt=""
                      src="/name-field-icons.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <div className="w-56 relative tracking-[-0.08px] leading-[16px] font-medium inline-block">
                      Business mail
                    </div>
                    <div className="flex flex-row items-start justify-start text-base text-gray-200">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        demoaccount@gmail.com
                      </div>
                    </div>
                    <img
                      className="w-56 relative max-h-full"
                      alt=""
                      src="/name-field-icons.svg"
                    />
                  </div>
                </div>
                <div className="rounded-lg bg-orange-200 flex flex-row items-start justify-start py-[11px] px-6 text-center text-sm text-white">
                  <div className="relative tracking-[-0.15px] leading-[18px] font-semibold">
                    Discuss the project
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Discuss
