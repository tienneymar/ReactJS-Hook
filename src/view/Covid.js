import "../view/Covid.scss";
import axios from "axios";
import moment from "moment";

import { useEffect, useState } from "react";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isErr, setisErr] = useState(false);
  // const today = moment().startOf("day").toISOString(true);
  // const priorDate = moment()
  //   .startOf("day")
  //   .subtract(31, "days")
  //   .toISOString(true);
  useEffect(async () => {
    try {
      let res = await axios.get(
        "https://api.covid19api.com/country/vietnam?from=2021-10-01T00%3A00%3A00Z&to=2021-10-20T00%3A00%3A00Z"
      );
      console.log("Check: Success ");
      let data = res && res.data ? res.data : [];
      if (data && data.length > 0) {
        data.map((item) => {
          item.Date = moment(item.Date).format("DD/MM/YYYY");
          return item;
        });
        // data = data.reserse();
      }
      setDataCovid(data);
      setisLoading(false);
    } catch (e) {
      // console.log("False", e.message);
      setisLoading(false);
      setisErr(false);
    }
  }, []);
  // let x = 0;

  return (
    <>
      {/* <h3>Covid</h3>
      {x > 5 ? <span>True</span> : <span>False</span>} */}
      <table class="rwd-table">
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
