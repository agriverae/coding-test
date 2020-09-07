import { useMutation, queryCache } from "react-query";

const useDeleteDrivers = () => {
  return useMutation(
    (id) => {
      const deleteDriver = fetch("http://localhost:3000/api/drivers/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      return deleteDriver.then((res) => res.json());
    },
    {
      onSuccess: (deletedDriver) =>
        queryCache.setQueryData("drivers", (oldData) => {
          const filteredDrivers = oldData.drivers.filter(
            (driver) => driver.id !== deletedDriver.id
          );
          return {
            drivers: filteredDrivers,
          };
        }),
    }
  );
};

export default useDeleteDrivers;
