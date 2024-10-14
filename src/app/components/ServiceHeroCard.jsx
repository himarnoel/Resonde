import Image from "next/image";
import React from "react";

const ServiceHeroCard = ({ card }) => {
  return (
    <>
      {card.id === 4 ? (
        <div
          style={{ backgroundColor: card.bg }}
          className="w-full  lg:hover:scale-105 duration-500 ease-in-out md:max-w-[304px] min-h-[97.2px] lg:min-h-[360px] rounded-[6.48px] md:rounded-[12px] flex flex-col  justify-end items-start gap-[4px] md:gap-[10px] p-[8px] lg:pb-8 sm:p-[15px] relative"
        >
          <Image
            width={138.24}
            height={43.2}
            className="object-cover"
            src={card.img}
            alt="Virtual Assistants"
          />
          <div className="flex flex-col justify-center items-start md:gap-[6px] lg:mt-2">
            <p className="text-[2.63px]  sm:text-[9.75px] leading-[12px] sm:leading-[15.6px] font-light sofiaProL text-white">
              {card.desc}
            </p>
            <h2 className="md:leading-[27.5px] font-normal sofiaProR  leading-[7.43px] text-[5.94px] md:text-[1.375rem] text-white">
              {card.head}
            </h2>
          </div>
          <div className="w-full md:max-w-[264.96px] lg:mt-4  h-[11.56px] sm:h-[54px] py-[4px] sm:py-[6px] px-[8px] sm:px-[12px] rounded-full bg-[#F4F4F4] flex gap-[10px] sm:gap-[18px] justify-center items-center">
            <h2 className="text-[#4F4F4F] leading-[3.78px] sm:leading-[21px] text-[3.78px]  sm:text-[13.5px] font-normal sofiaProR">
              {card.title}
            </h2>
          </div>
        </div>
      ) : (
        <div className="w-full sm:max-w-[82.08px] md:max-w-[304px] min-h-[97.2px] lg:min-h-[360px] rounded-[6.48px] md:rounded-[24px] flex justify-end items-end p-[8px] sm:p-[15px] relative">
          <Image
            fill={true}
            className="w-full object-cover rounded-[6.48px] md:rounded-[24px] absolute top-0 left-0 z-[5px]"
            src={card.bg}
            alt={card.title}
          />
          <div className="w-full sm:w-[71.54px] md:w-[264.96px] min-h-[14.58px] sm:min-h-[54px] py-[2px] sm:py-[6px] px-[6px] sm:px-[12px] rounded-full bg-[#F4F4F4] relative z-10 flex gap-[10px] sm:gap-[18px] items-center">
            <Image
              width={42}
              height={42}
              className="w-[11.34px] sm:w-[42px] h-[11.34px] sm:h-[42px] rounded-full object-cover"
              src={card.img}
              alt={card.title}
            />
            <div className="flex flex-col justify-center items-start">
              <h2 className="text-[#4F4F4F] leading-[5.67px] sm:leading-[21px] text-[3.64px] sm:text-[13.5px] font-normal sofiaProR">
                {card.title}
              </h2>
              <p className="font-normal sofiaProL text-[#737373] leading-[2.84px] sm:leading-[15px] text-[2.84px] sm:text-[10.5px]">
                {card.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceHeroCard;
