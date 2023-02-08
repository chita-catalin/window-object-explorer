import ObjectCard from "./components/ObjectCard";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataTypes, setDataTypes] = useState({
    objects: true,
    functions: true,
    strings: true,
    numbers: true,
    booleans: true,
  });

  const [objectToMap, setObjectToMap] = useState(window);
  const [breadCrumbs, setBreadCrumbs] = useState(["window"]);
  const [keys, setKeys] = useState([]);
  console.log(objectToMap);

  useEffect(() => {
    if (objectToMap) {
      let keysAux = [];
      for (var key in objectToMap) {
        keysAux.push(key);
      }
      setKeys(keysAux);
    }
  }, [objectToMap]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <fieldset style={{ display: "flex" }}>
          <legend>Type of data</legend>

          <div>
            <input
              type="checkbox"
              id="objects"
              name="scales"
              checked={dataTypes.objects}
              onChange={() => {
                setDataTypes({
                  ...dataTypes,
                  objects: !dataTypes.objects,
                });
              }}
            />
            <label for="objects">objects</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="functions"
              name="horns"
              checked={dataTypes.functions}
              onChange={() => {
                setDataTypes({
                  ...dataTypes,
                  functions: !dataTypes.functions,
                });
              }}
            />
            <label for="functions">functions</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="strings"
              name="horns"
              checked={dataTypes.strings}
              onChange={() => {
                setDataTypes({
                  ...dataTypes,
                  strings: !dataTypes.strings,
                });
              }}
            />
            <label for="strings">strings</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="numbers"
              name="horns"
              checked={dataTypes.numbers}
              onChange={() => {
                setDataTypes({
                  ...dataTypes,
                  numbers: !dataTypes.numbers,
                });
              }}
            />
            <label for="numbers">numbers</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="booleans"
              name="horns"
              checked={dataTypes.booleans}
              onChange={() => {
                setDataTypes({
                  ...dataTypes,
                  booleans: !dataTypes.booleans,
                });
              }}
            />
            <label for="booleans">booleans</label>
          </div>
        </fieldset>
      </div>
      <h1
        style={{
          alignSelf: "center",
          fontWeight: "lighter",
          marginBottom: "-10px",
        }}
      >
        {breadCrumbs.map((crumb) => {
          return (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                let newBreadCrumbs = breadCrumbs.slice(
                  0,
                  breadCrumbs.indexOf(crumb) + 1
                );
                setBreadCrumbs(newBreadCrumbs);
                setObjectToMap(
                  newBreadCrumbs.reduce((acc, curr) => acc[curr], window)
                );
              }}
            >
              {crumb}
              <span style={{ color: "grey" }}> &gt; </span>
            </span>
          );
        })}
      </h1>

      <div
        style={{
          borderTop: "1.5px dashed black",
          marginTop: "20px",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {objectToMap &&
          keys
            .sort(
              //sort by data type
              (a, b) => {
                //order by data type: object,function,string,boolean,number
                if (
                  typeof objectToMap[a] === "object" &&
                  typeof objectToMap[b] !== "object"
                ) {
                  return -1;
                }
                if (
                  typeof objectToMap[a] !== "object" &&
                  typeof objectToMap[b] === "object"
                ) {
                  return 1;
                }
                if (
                  typeof objectToMap[a] === "function" &&
                  typeof objectToMap[b] !== "function"
                ) {
                  return -1;
                }
                if (
                  typeof objectToMap[a] !== "function" &&
                  typeof objectToMap[b] === "function"
                ) {
                  return 1;
                }
                if (
                  typeof objectToMap[a] === "string" &&
                  typeof objectToMap[b] !== "string"
                ) {
                  return -1;
                }
                if (
                  typeof objectToMap[a] !== "string" &&
                  typeof objectToMap[b] === "string"
                ) {
                  return 1;
                }
                if (
                  typeof objectToMap[a] === "boolean" &&
                  typeof objectToMap[b] !== "boolean"
                ) {
                  return -1;
                }
                if (
                  typeof objectToMap[a] !== "boolean" &&
                  typeof objectToMap[b] === "boolean"
                ) {
                  return 1;
                }
                if (
                  typeof objectToMap[a] === "number" &&
                  typeof objectToMap[b] !== "number"
                ) {
                  return -1;
                }
                if (
                  typeof objectToMap[a] !== "number" &&
                  typeof objectToMap[b] === "number"
                ) {
                  return 1;
                }
                return 0;
              }
            )
            .map((key) => {
              if (
                (dataTypes.objects && typeof objectToMap[key] === "object") ||
                (dataTypes.functions &&
                  typeof objectToMap[key] === "function") ||
                (dataTypes.strings && typeof objectToMap[key] === "string") ||
                (dataTypes.numbers && typeof objectToMap[key] === "number") ||
                (dataTypes.booleans && typeof objectToMap[key] === "boolean")
              ) {
                return (
                  <ObjectCard
                    objectName={key}
                    mappedObject={objectToMap}
                    setMappedObject={setObjectToMap}
                    setBreadCrumbs={setBreadCrumbs}
                  />
                );
              }
            })}
      </div>
    </div>
  );
}

export default App;
