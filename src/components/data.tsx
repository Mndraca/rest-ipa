import { useEffect, useState } from "react";
import { getData } from "./api";
import { Element } from "./interface";

export function ResultData() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    async function fetchedData() {
      const result = await getData("https://api.restful-api.dev/objects");
      const final = result.map((element: Element) => {
        let name = element.name;
        let color = element.data
          ? element.data.color || element.data.Color || "NO COLOR"
          : "No Color";
        let capacity = element.data
          ? element.data.capacity || element.data.Capacity || "NO CAPACITY"
          : "No Capacity";

        return `Name: ${name} | Color: ${color} |  Capacity: ${capacity}`;
      });

      setData(final);
    }
    fetchedData();
  }, []);

  return (
    <>
      <div>Fetched Data</div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
