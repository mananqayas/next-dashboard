import { Star } from "lucide-react";

type RatingProps = {
  rating: number;
};
const Rating = ({ rating }: RatingProps) => {
  return [1, 2, 3, 4, 5].map((index) => (
    <Star
      key={index}
      color={index <= rating ? "#ffc107" : "#e4e539"}
      className="w-4 h-4"
    />
  ));
  return <div>Rating</div>;
};
export default Rating;
