import { Icon } from "@iconify/react";
// import starIcon from "@iconify/icons-mdi/starIcon";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => (
        <Icon
          key={index}
          icon={"material-symbols-light:star"}
          className="sm:text-xl"
          style={{
            color: rating >= index ? "gold" : "gray",
            // fontSize: "24px",
          }}
        />
      ))}
    </div>
  );
};

export default StarRating;
