import styles from "./LikeButton.module.css";
import { CiHeart } from "react-icons/ci";
import { ImSpinner3 } from "react-icons/im";
import { useState } from "react";

export default function LikeButton() {
  const defaultLayout = {
    borderColor: "grey",
    color: "grey",
  };

  const hoverLayout = {
    borderColor: "red",
    color: "red",
  };

  const likedLayout = {
    borderColor: "red",
    color: "white",
    backgroundColor: "red",
  };

  const [layout, setLayout] = useState(defaultLayout);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("Like");

  let notLikedYet = "Like" === status;

  const functionMouseOver = () => {
    console.log("functionMouseOver");
    if (notLikedYet) {
      setLayout(hoverLayout);
    }
  };

  const functionMouseOut = () => {
    console.log("functionMouseOut");
    if (notLikedYet) {
      setLayout(defaultLayout);
    }
  };

  const functionClicked = () => {
    console.log("functionClicked : ");
    let actionData = notLikedYet ? "like" : "unlike";
    console.log("actionData : " + actionData);
    setLoading(true);
    fetch("https://www.greatfrontend.com/api/questions/like-button", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: actionData,
      }),
    })
      .then((response) => {
        console.log("response : " + response.status);
        if (200 === response.status) {
          if (notLikedYet) {
            setLayout(likedLayout);
            setStatus("Liked");
          } else {
            setLayout(defaultLayout);
            setStatus("Like");
          }
        }
        return response.json();
      })
      .then((data) => {
        console.log("data : " + JSON.stringify(data));
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error : " + JSON.stringify(error));
        setLoading(false);
      });
  };

  return (
    <div>
      <button
        className={styles.adiButton}
        onClick={functionClicked}
        onMouseOver={functionMouseOver}
        onMouseOut={functionMouseOut}
        style={layout}
      >
        {loading ? <ImSpinner3 /> : <CiHeart />} {status}
      </button>
    </div>
  );
}
