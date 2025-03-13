import { useCallback, useEffect, useState } from "react";
import { IoStar } from "react-icons/io5";
import styles from "./StarRating.module.css";

const StarRating = ({ size }) => {
  const unSelectedStar = {
    color: "white",
  };

  const selectedStar = {
    color: "orange",
  };

  const [starArray, setStarArray] = useState([]);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    console.log("Initializing StarRatings....");
    const temp = [];
    for (let i = 0; i < size; i++) {
      temp.push(i);
    }
    setStarArray(temp);
  }, [size]);

  // normal callback function
  const giveRating = (item) => {
    console.log("Clicked : " + item);
  };

  // memoized callback function for better performance
  const giveRatingMemoized = useCallback((item) => {
    console.log("Clicked : " + item);
    setRating(item);
  }, []);

  return (
    <>
      <center>
        {console.log(starArray)}
        {starArray.map((item) => (
          <IoStar
            type="button"
            key={item}
            className={styles.starLayout}
            style={
              rating !== null && item <= rating ? selectedStar : unSelectedStar
            }
            onClick={() => giveRatingMemoized(item)}
          />
        ))}
      </center>
    </>
  );
};

export default StarRating;
