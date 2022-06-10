import "../view/Covid.scss";
import useFetch from "../Customize/Fetch";
import React from "react";
import moment from "moment";

const Covid = () => {
  const today = moment().startOf("day").toISOString(true);
  const priorDate = moment()
    .startOf("day")
    .subtract(31, "days")
    .toISOString(true);

  const { data: dataCovid, isLoading, isErr } =
    // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
    useFetch(
      `https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z`,
      true
    );

  return (
    <>
      {/* <h3>Covid</h3>
      {x > 5 ? <span>True</span> : <span>False</span>} */}
      <table className="rwd-table">
        {/* {console.log(dataCovid)} */}
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
          {isErr === false &&
            isLoading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                  <td>{item.Recovered}</td>
                </tr>
              );
            })}
          {isLoading === true && (
            <tr>
              <td style={{ color: "red" }}>Loading....</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};
export default Covid;
