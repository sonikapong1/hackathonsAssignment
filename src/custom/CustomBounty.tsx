import { FC } from "react";
import { token, trophy } from "../assets";
import { BountyData, Tags } from "../schemaTypes/dataSchema";

interface bountyProps {
  data: BountyData;
}

const CustomBounty: FC<bountyProps> = (props) => {
  const { icon, title, organiserName, prize, rank, tags, date, NumberOfParticipants } = props.data;

  return (
    <div className=" h-[116px] flex  items-center justify-between  hover:bg-slate-200 ">
      <div className="flex justify-center items-center gap-3 ml-[32px]">
        <img src={icon} />
        <div className="flex flex-col w-full gap-4 flex-wrap ">
          <div><span className="font-semibold text-[20px]">{title}</span> <span className="font-normal text-[14px] text-light-blue">by</span><span className="font-semibold text-[20px] text-light-blue"> {organiserName}</span></div>
          <div className="flex gap-2 ">
            {prize?.amount != 0 &&
              <>
                <div className="flex gap-1 mr-2 items-center">
                  <img src={token} />
                  <div className="font-semibold text-[20px]">{prize?.amount}</div>
                  <div className="font-normal text-[18px] text-light-blue">{prize?.currency}</div>
                </div>
                <p className="w-[0.5px] bg-light-grey" />
                <img src={trophy} /><span className="flex items-center font-normal text-[18px] text-light-blue">{rank}</span>
              </>
            }
            {tags && tags?.map((item: Tags) => <p className={`${item?.color} ${item?.bgColor} rounded-sm  p-1 pr-3 pl-3 `}>{item.name}</p>)}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mr-[32px]">
        <p className="font-normal text-[18px] text-light-blue">{date}</p>
        <div className="font-normal text-[18px]"><span >{NumberOfParticipants} </span><span className="text-light-blue">Participants</span></div>
      </div>
    </div>

  );
}
export default CustomBounty;
