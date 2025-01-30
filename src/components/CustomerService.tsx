import { CustomerServiceConstant } from "@/constants/CustomerService";
import Wrapper from "./layouts/Wrapper";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function CustomerService() {
  return (
    <div className="pb-10">
      <Wrapper>
        <div className="flex justify-center items-center gap-20">
          {CustomerServiceConstant.map((item) => (
            <div key={item.id} className="flex justify-center items-center flex-col gap-4">
              <div className="bg-primary p-6 rounded-full ">
                <Icon icon={item.icon} className="text-4xl text-white"/>
              </div>
              <p className="text-xl font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
