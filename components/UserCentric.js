import React from 'react'

const UserCentric = () => {
  return (
    <div>
       <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-full h-[900px] overflow-hidden">
        <div className="absolute top-[160px] left-[108px] flex flex-col items-start justify-start gap-[20px]">
          <div className="w-[600px] relative tracking-[0.33px] inline-block">
            <span className="font-extrabold">User-Centric Excellence</span>
            <span className="text-gray-200">
              <span className="font-semibold font-inter">{`: Our `}</span>
              <b className="font-inter">App Development services</b>
              <span className="font-semibold"> Tackles Your Pain Points</span>
            </span>
          </div>
          <div className="w-[600px] relative text-lg tracking-[-0.24px] inline-block text-gray-200 font-sf-pro-text">
            <span>{`Experience a Seamless Digital Journey with `}</span>
            <span className="font-extrabold text-olivedrab">Desun</span>
            <span>
              <span>
                {" "}
                - Where Every Line of Code Resolves Your Challenges and
              </span>
              <span className="font-medium font-sf-pro-text">{` `}</span>
            </span>
            <b className="text-orange-100">Elevates Your App Experience</b>
            <span> to Unparalleled Heights.</span>
          </div>
        </div>
        <img
          className="absolute top-[-633.7px] left-[628px] w-[1021.4px] h-[2063.5px] object-contain"
          alt=""
          src="/group-1@2x.png"
        />
        <div className="absolute top-[444px] left-[108px] shadow-[0px_0px_2px_rgba(0,_0,_0,_0.08),_0px_0px_24px_rgba(0,_0,_0,_0.16)] rounded-xl bg-white flex flex-col items-start justify-center p-6 gap-[32px] text-xl text-gray-200">
          <b className="w-[600px] relative tracking-[0.38px] leading-[24px] inline-block">
            <p className="m-0">Leave your contacts and we will call you back</p>
            <p className="m-0">within 30 minutes</p>
          </b>
          <div className="flex flex-row items-end justify-start gap-[24px] text-smi text-slategray font-sf-pro-text">
            <div className="flex flex-col items-start justify-center gap-[24px]">
              <div className="flex flex-row items-center justify-start gap-[24px]">
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
                      +91 0000000000
                    </div>
                  
                  </div>
                  <img
                    className="w-56 relative max-h-full"
                    alt=""
                    src="/name-field-icons.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[24px]">
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
            </div>
            <div className="rounded-lg bg-olivedrab flex flex-row items-start justify-start py-[11px] px-6 text-center text-sm text-white">
              <div className="relative tracking-[-0.15px] leading-[18px] font-semibold">
                <p className="m-0">Get</p>
                <p className="m-0">consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   

    </div>
  )
}

export default UserCentric
