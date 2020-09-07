import React from "react";
import useDrivers from "../../hooks/useDrivers";
import useDeleteDrivers from "../../hooks/useDeleteDrivers";

const Drivers = () => {
  const { isLoading, isError, data } = useDrivers();
  const [deleteDriver] = useDeleteDrivers();

  if (isLoading) return <div>Is Loading...</div>;
  if (isError) return <div>There is an error</div>;

  const { drivers } = data;

  return (
    <div className="drivers">
      <h2>Drivers Database</h2>
      {drivers.map(({ id, name, age, patent, model, telephone, year }) => {
        return (
          <div className="driver-info" key={id}>
            <p>Name : {name}</p>
            <p>Age: {age}</p>
            <p>Telephone: {telephone}</p>
            <p>Year: {year}</p>
            <p>Model: {model}</p>
            <p>Patent: {patent}</p>
            <button
              onClick={() => {
                deleteDriver(id);
              }}
            >
              Delete driver
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Drivers;
