import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div className=" rounded-xl bg-gray-300 flex flex-col items-center justify-start p-6 gap-[40px] text-sm text-darkgray font-sf-pro-text">
    <img
      className="w-[290px] relative h-[113px] object-cover"
      alt=""
      src="/logobg3-2@2x.png"
    />
    <div className="m-8 flex flex-row items-start justify-start">
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/smartphone-outline-24.svg"
          />
          <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
            Contact nums
          </div>
        </div>
        <div className="w-[294px] relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white inline-block">
          +91 0000000000
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/mail-outline-24@2x.png"
          />
          <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
            Gmail
          </div>
        </div>
        <div className="w-[294px] relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white inline-block">
          demo@gmail.com
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0 object-cover"
            alt=""
            src="/place-outline-241@2x.png"
          />
          <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
            Adress
          </div>
        </div>
        <div className="w-[294px] relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white inline-block">
          Mumbai, India
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/document-outline-24.svg"
          />
          <div className="relative tracking-[-0.15px] leading-[18px] font-medium">
            Leave a request
          </div>
        </div>
        <div className="w-[294px] relative text-mid tracking-[-0.41px] leading-[22px] font-semibold text-white inline-block">
          Leave a request
        </div>
      </div>
    </div>
    <div className="flex flex-row items-center justify-start text-smi text-white">
      <div className="relative tracking-[-0.08px] leading-[16px]">
        We work throughout the world
      </div>
    </div>
  </div>

  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
