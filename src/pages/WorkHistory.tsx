import { Input, Select, Tabs, TabsProps } from "antd";
import { useEffect, useMemo, useState } from "react";
import { filterIcon, searchIcon } from "../assets";
import CustomBounty from "../custom/CustomBounty";
import { bountyData, reviewData } from "../data/dummyData";
import { BountyData } from "../schemaTypes/dataSchema";

type PositionType = 'left' | 'right';

const WorkHistory = () => {
  const [position] = useState<PositionType[]>(['left', 'right']);
  const [activeTab, setActiveTab] = useState("1")
  const [hackathonCardData, setHackathonCardData] = useState(bountyData);


  const filterByOptions = [
    {
      label: "Blockchain",
      value: "Blockchain"
    },
    {
      label: "Design",
      value: "Design"
    }, {
      label: "Frontend",
      value: "Frontend"
    }, {
      label: "Backend",
      value: "Backend"
    }, {
      label: "Content",
      value: "Content"
    }
  ]


  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Completed',
      children: <>
        {hackathonCardData?.map((ele: BountyData) => <CustomBounty data={ele} key={ele.key} />
        )}

      </>
    },
    {
      key: '2',
      label: "In Review",
      children: <>
        {hackathonCardData?.map((ele: BountyData) => <CustomBounty data={ele} key={ele.key} />
        )}

      </>
    },

  ];
  const onChange = (key: string) => {
    setActiveTab(key)
  };

  const handleSelect = (selectedValue: string[]) => {
    if (!selectedValue || selectedValue.length === 0) {
      setHackathonCardData(hackathonCardData);
    } else {
      const filteredData = selectedValue.map((ele: string) => {
        return hackathonCardData.filter((val) => val.tags.some((item) => item.name === ele));
      }).flat();
      setHackathonCardData(filteredData);
    }
  };

  const OperationsSlot: Record<PositionType, React.ReactNode> = {
    left: <div className="flex gap-2 items-center /">
      <div className="font-semibold text-[20px]">Work History</div>
      <div className="w-[0.5px] bg-light-grey h-[1.5rem] mr-[1.5rem] ml-[1.5rem]" />
    </div>,
    right: <div className="flex gap-2 items-center">
      <div className="w-[0.5px] bg-light-grey h-[1.5rem]" />
      <img src={filterIcon} /><p className="flex items-center">Filter By</p>
      <div className="w-[152px] mr-[29px] ">
        <Select
          options={filterByOptions}
          onChange={(selectedValue) => handleSelect(selectedValue)}
          className="w-full custom-select"
          style={{ color: 'red' }}
          dropdownStyle={{ color: 'green' }}
          mode="multiple"
          placeholder="All"
          maxTagTextLength={200}
        />
      </div>
    </div>,
  };

  const slot = useMemo(() => {
    if (position.length === 0) return null;

    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {},
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  useEffect(() => {
    if (activeTab === "1") {
      setHackathonCardData(bountyData);
    } else {
      setHackathonCardData(reviewData);
    }
  }, [activeTab]);

  return (
    <div className="flex mt-[19px] w-full pl-[180px] pr-[180px] ">
      <div className=" flex   items-center w-[70%] ">
        <Tabs items={items}
          defaultActiveKey="1"
          onChange={onChange} className="pb-[24px] w-full tab-font"
          tabBarExtraContent={slot}

        />
        <div className="w-[1px] bg-light-grey h-full ml-[1.5rem] " />
      </div>
      <div className="w-[30%] pl-[2.5rem]">
        <Input
          prefix={<img src={searchIcon} width={"24px"} height={"24px"} className="mr-3" />}
          className=" bg-grey w-full rounded-[42px] pr-[1.5rem] pl-[1.5rem] pt-[1rem] pb-[1rem] text-[18px]" placeholder="Search Bounties, Profiles, and more..."
        ></Input>
      </div>
    </div>
  );
}

export default WorkHistory;

