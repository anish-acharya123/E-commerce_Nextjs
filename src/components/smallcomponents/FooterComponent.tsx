import { Polices, ContactList, Account } from "@/constants/FooterConstant";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

type sectionProps = {
  title: string;
  items: {
    title?: string;
    link?: string;
    icon?: string;
  }[];
  isLink?: boolean;
};

function Section({ title, items, isLink = true }: sectionProps) {
  return (
    <div className="">
      <p className=" font-medium md:text-2xl text-xl  pb-2  ">{title}</p>
      <div className="pt-2 space-y-4">
        {items.map((item, index) =>
          isLink ? (
            <Link
              key={index}
              href={item.link || "#"}
              className="flex items-center gap-2"
            >
              {item.icon && (
                <Icon icon={item.icon} className="inline text-xl" />
              )}
              <span className="md:text-base text-sm">{item.title}</span>
            </Link>
          ) : (
            <div key={index} className="flex items-center gap-2">
              {item.icon && (
                <Icon icon={item.icon} className="inline text-xl" />
              )}
              <span className="md:text-base text-sm">{item.title}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export function FooterFirst() {
  return (
    <>
    
      <span
      //  data-aos="fade-up" data-aos-duration="1500"
      >
        <Section title="Support" items={ContactList} isLink={false} />
      </span>

      <span
      //  data-aos="fade-up" data-aos-duration="2000"
      >
        <Section title="Account" items={Account} />
      </span>
      <span
      //  data-aos="fade-up" data-aos-duration="1000"
      >
        <Section title="Quick Links" items={Polices} />
      </span>
    </>
  );
}
