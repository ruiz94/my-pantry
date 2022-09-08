import { useEffect } from "react";
import { useDispatch } from "react-redux";

const usePermits = (permissions) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "UPDATE_PERMITS", payload: permissions });

    return () => {
      dispatch({ type: "UPDATE_PERMITS", payload: {} });
    };
  }, []);//Do not add dependencies because make an infinite cycle

  return { dispatch };
};

export default usePermits;
