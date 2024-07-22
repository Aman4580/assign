import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
   <div>
     <div className="m-20 flex flex-col items-start justify-start gap-[40px]">
              <div className="w-[1223px] relative h-[130px]">
                <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[24px]">
                  <b className="w-[600px] relative tracking-[0.33px] leading-[144%] inline-block">
                    Projects we are proud of
                  </b>
                  <div className="w-[600px] relative text-mini tracking-[-0.24px] leading-[20px] font-medium font-sf-pro-text inline-block">
                    Our software development company is truly proud of the
                    wonderful clients we have worked with. We enjoy a long-term
                    partnership
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[40px] text-mid text-gray-100 font-sf-pro-text">
                <div className="w-[1224px] relative h-[58px]">
                  <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start">
                    <div className="flex flex-row items-center justify-start p-4 text-gray-200">
                      <div className="flex flex-col items-start justify-start gap-[4px]">
                        <div className="relative tracking-[-0.41px] leading-[22px] font-medium">
                          Project 1
                        </div>
                     
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start p-4">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        Project 2
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start p-4">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        Project 3
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start p-4">
                      <div className="relative tracking-[-0.41px] leading-[22px]">
                        Project 4
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-17xl text-gray-200 font-inter">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px]">
                    <b className="relative tracking-[0.33px] leading-[144%]">
                      Project 1
                    </b>
                    <div className="flex flex-col items-start justify-start gap-[40px] text-mini font-sf-pro-text">
                      <div className="w-[600px] relative tracking-[-0.24px] leading-[20px] inline-block">
                        Crafted an innovative rental property management app,
                        seamlessly integrating secure login, absence
                        registration, and a tenant notice board. Elevating the
                        resident experience with user-friendly design and
                        efficient communication channels
                      </div>
                      <div className="w-[496px] relative text-mid tracking-[-0.41px] leading-[22px] inline-block text-darkslategray-100">
                        <span>{`Business analysis `}</span>
                        <span className="text-orange-100">/</span>
                        <span>{` iOS `}</span>
                        <span className="text-orange-100">/</span>
                        <span>{` Android `}</span>
                        <span className="text-orange-100">/</span>
                        <span>{` QA `}</span>
                        <span className="text-orange-100">/</span>
                        <span> UI/UX Design</span>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[32px]">
                        <div className="flex flex-row items-center justify-start gap-[8px]">
                          <img
                            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/place-outline-24@2x.png"
                          />
                          <div className="relative tracking-[-0.24px] leading-[20px]">
                            India
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[8px]">
                          <img
                            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
                            alt=""
                            src="/work-outline-24@2x.png"
                          />
                          <div className="relative tracking-[-0.24px] leading-[20px]">
                            Real Estate
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[48px] text-5xl font-inter">
                        <div className="flex flex-col items-start justify-start gap-[8px]">
                          <b className="relative tracking-[0.33px] leading-[144%]">
                            400%
                          </b>
                          <div className="relative text-smi tracking-[-0.08px] leading-[16px] font-sf-pro-text text-slategray">
                            User Growth
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start gap-[8px]">
                          <b className="relative tracking-[0.33px] leading-[144%]">
                            + 200 000
                          </b>
                          <div className="relative text-smi tracking-[-0.08px] leading-[16px] font-sf-pro-text text-slategray">
                            Active Users
                          </div>
                        </div>
                      </div>
                    
                      <div className="flex flex-row items-start justify-start gap-[16px]">
                        <img
                          className="w-[148px] relative h-10 overflow-hidden shrink-0"
                          alt=""
                          src="/ios.svg"
                        />
                        <img
                          className="w-[136px] relative h-10"
                          alt=""
                          src="/frame-10782.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className="self-stretch w-[446px] relative max-h-full object-cover"
                    alt=""
                    src="/image-15@2x.png"
                  />
                </div>
              </div>
            </div>
   </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
