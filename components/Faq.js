import React from 'react'

const Faq = () => {
  return (
    <div>
       <div className="flex flex-col items-start justify-start py-20 px-[108px] gap-[40px]">
            <div className="flex flex-col items-start justify-start">
              <b className="w-[600px] relative tracking-[0.33px] leading-[144%] inline-block">
                FAQ
              </b>
            </div>
            <div className="flex flex-row items-start justify-start gap-[24px] text-xl font-sf-title-2-regular">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
                <div className="flex flex-row items-center justify-start py-3 px-0 gap-[16px]">
                  <div className="w-[524px] relative tracking-[0.38px] leading-[24px] font-semibold inline-block shrink-0">
                    What is the cost of a mobile application?
                  </div>
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-3">
                    <img
                      className="w-9 relative h-9"
                      alt=""
                      src="/add-36.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
                <div className="flex flex-row items-center justify-start py-3 px-0 gap-[16px]">
                  <div className="w-[524px] relative tracking-[0.38px] leading-[24px] font-semibold inline-block shrink-0">
                    Do you provide a guarantee for the mobile application?
                  </div>
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-3">
                    <img
                      className="w-9 relative h-9"
                      alt=""
                      src="/add-36.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
                <div className="flex flex-row items-start justify-start py-3 px-0 gap-[16px]">
                  <div className="flex flex-col items-start justify-start gap-[24px]">
                    <div className="w-[524px] relative tracking-[0.38px] leading-[24px] font-semibold inline-block">
                      How long will development take?
                    </div>
                    <div className="w-[524px] relative leading-[20px] inline-block text-mini font-sf-pro-text">
                      <p className="m-0 tracking-[-0.24px]">
                        Development terms directly depend on the requirements
                        for the mobile application, the characteristics of the
                        company, as well as the wishes of the customer.
                      </p>
                      <p className="m-0 tracking-[-0.24px]">&nbsp;</p>
                      <p className="m-0 tracking-[-0.24px]">
                        Average development time from start to finished
                        application:
                      </p>
                      <p className="m-0">
                        <span className="tracking-[-0.24px]">
                          Medium projects up to
                        </span>
                        <span className="text-base tracking-[-0.32px] font-semibold font-sf-pro-text">
                          {" "}
                          3 months.
                        </span>
                      </p>
                      <p className="m-0">
                        <span className="tracking-[-0.24px]">
                          <span>{`Large projects about `}</span>
                          <span className="font-semibold font-sf-pro-text">
                            4-6 months.
                          </span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span className="tracking-[-0.24px]">
                          <span>
                            To get a more accurate estimate of the project
                            completion time, it is necessary to determine the
                            main task of the application, think over its logic
                            and functionality.
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="rounded-81xl flex flex-row items-start justify-start p-3">
                    <img
                      className="w-9 relative h-9"
                      alt=""
                      src="/add-361.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
                <div className="flex flex-row items-center justify-start py-3 px-0 gap-[16px]">
                  <div className="w-[524px] relative tracking-[0.38px] leading-[24px] font-semibold inline-block shrink-0">
                    I will not tell my idea, do you guarantee confidentiality?
                  </div>
                  <div className="shadow-[0px_2px_4px_rgba(0,_0,_0,_0.08)] rounded-81xl bg-white flex flex-row items-start justify-start p-3">
                    <img
                      className="w-9 relative h-9"
                      alt=""
                      src="/add-36.svg"
                    />
                  </div>
                </div>
                <img
                  className="w-[600px] relative max-h-full"
                  alt=""
                  src="/vector-216.svg"
                />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Faq
