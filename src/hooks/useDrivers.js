import { useQuery } from "react-query";

const useDrivers = () => {
  return useQuery("drivers", () =>
    fetch("http://localhost:3000/api/drivers").then((res) => res.json())
  );
};

export default useDrivers;
