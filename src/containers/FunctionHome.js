import React from "react";
import { useSelector, useDispatch } from "react-redux";
const FunctionHome = () => {
  const dispatch = useDispatch();
  const fetchDetails = useSelector((state) => state);
  console.log("fetchDetails", fetchDetails);
  return (
    <div>
      <h1>Saga Example</h1>
      Function Component
      <button
        onClick={() =>
          dispatch({
            type: "FETCH_WALLET_DETAILS",
            payload: "sunil.yadav@ongraph.ca",
          })
        }
      >
        Fetch details
      </button>
    </div>
  );
};

export default FunctionHome;
