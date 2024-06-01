import { useState } from "react";
import { icon, theme } from "../assets/index";
import CustomFilter from "../custom/CustomFilter";
import CustomProfile from "../custom/CustomProfile";
import CustomSelect from "../custom/CustomSelect";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navBarMenu = ["Blockchain", "Developers", "More"]


  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="h-full">
      <div className="w-full  h-[80px] flex items-center   ">
        <div className="  flex h-full w-full  pl-[180px] pr-[180px] mt-[22px] mb-[22px] items-center">
          <div className=" h-[2.25rem] w-[12.125rem]">
            <img src={icon} alt="logo" />
          </div>
          <div className="flex items-center ml-[3.375rem] mr-[4rem] w-[35.5rem] gap-[2rem]">
            <div className="flex-wrap text-[16px] text-primary font-normal" >Home</div>
            {navBarMenu?.map((item) => <CustomSelect
              option={[
                {
                  label: item,
                  value: 0
                }
              ]}
            />
            )}
            <div className="font-normal  text-[16px] text-primary " >About 4337</div>
          </div>
          <div className={`border p-1 rounded-3xl w-[22.5rem] mr-[2.5rem] hover:shadow-blue-lg  cursor-pointer ${isClicked ? 'border-blue-500 border-2 ' : 'border-gray-300'
            }`} onClick={handleClick}>
            <CustomFilter />
          </div>
          <div className="mr-[1.875rem]">
            <CustomProfile />
          </div>
          <>
            <img src={theme} />
          </>
        </div>
      </div >
    </div>
  );
}

export default Navbar;
