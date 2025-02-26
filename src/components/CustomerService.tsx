import { CustomerServiceConstant } from "@/constants/CustomerService";
import Wrapper from "./layouts/Wrapper";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function CustomerService() {
  return (
    <div className="pb-10">
      <Wrapper>
        <div className="flex flex-wrap justify-center items-center lg:gap-20 md:gap-10 gap-8  ">
          {CustomerServiceConstant.map((item) => (
            <div
              key={item.id}
              className="flex justify-center items-center flex-col gap-4"
            >
              <div className="bg-primary p-6 rounded-full ">
                <Icon
                  icon={item.icon}
                  className="lg:text-4xl md:text-3xl text-2xl text-white"
                />
              </div>
              <p className="lg:text-xl md:text-base text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
