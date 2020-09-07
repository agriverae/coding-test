import { useMutation, queryCache } from "react-query";

const useCreateDrivers = () => {
  return useMutation(
    (values) => {
      const getData = fetch("http://localhost:3000/api/drivers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      return getData.then((res) => res.json());
    },
    {
      onSuccess: (data) =>
        queryCache.setQueryData("drivers", (oldData) => ({
          drivers: [...oldData.drivers, data],
        })),
    }
  );
};

export default useCreateDrivers;
