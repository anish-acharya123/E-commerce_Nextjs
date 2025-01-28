import { Polices, ContactList, SocialMedia } from "@/constants/FooterConstant";
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
    <div>
      <p className="text-2xl font-semibold pb-2 border-b-4 sm:w-1/2">{title}</p>
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
              <span>{item.title}</span>
            </Link>
          ) : (
            <div key={index} className="flex items-center gap-2">
              {item.icon && (
                <Icon icon={item.icon} className="inline text-xl" />
              )}
              <span>{item.title}</span>
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
      //  data-aos="fade-up" data-aos-duration="1000"
      >
        <Section title="Quick Links" items={Polices} />
      </span>
      <span
      //  data-aos="fade-up" data-aos-duration="1500"
      >
        <Section title="Contact Us" items={ContactList} isLink={false} />
      </span>
      <span
      //  data-aos="fade-up" data-aos-duration="2000"
      >
        <Section title="Social Media" items={SocialMedia} />
      </span>
    </>
  );
}
