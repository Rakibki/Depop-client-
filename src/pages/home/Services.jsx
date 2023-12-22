import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiBackwardTime } from "react-icons/gi";

const Services = () => {
  return (
    <div className="grid gap-2 mt-6 grid-cols-3">
      <div className="border-[1px] border-[#919191] p-6 rounded-xl">
        <TbTruckDelivery className="text-6xl mx-auto" />
        <h2 className="text-2xl mt-2 text-center">FAST AND FREE DELIVERY</h2>
        <p className="text-sm mt-2 text-center text-[#919191]">
          Friendly 24/7 customer support
        </p>
      </div>

      <div className="border-[1px] border-[#919191] p-6 rounded-xl">
        <RiCustomerService2Fill className="text-6xl mx-auto" />
        <h2 className="text-2xl mt-2 text-center">24/7 Customer Support</h2>
        <p className="text-sm mt-2 text-center text-[#919191]">
          Friendly 24/7 customer support
        </p>
      </div>

      <div className="border-[1px] border-[#919191] p-6 rounded-xl">
        <GiBackwardTime className="text-6xl mx-auto" />
        <h2 className="text-2xl mt-2 text-center">Money Back Guarantee</h2>
        <p className="text-sm mt-2 text-center text-[#919191]">
          We return money within 30 days
        </p>
      </div>
    </div>
  );
};

export default Services;
