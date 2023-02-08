import React, { useState } from "react";

const ObjectCard = ({
  objectName,
  mappedObject,
  setMappedObject,
  setBreadCrumbs,
}) => {
  const [extended, setExtended] = React.useState(true);

  return (
    <>
      <div
        className="object-card"
        style={{
          wordBreak: "break-all",
          width: "250px",
          height: "fit-content",
          display: "flex",
          flexDirection: "row",
          border: "1.5px solid #3d3d3d",
          margin: "5px",
          flexGrow: 1,
          cursor: "pointer",
          backgroundColor:
            typeof mappedObject[objectName] === "object"
              ? "#fff7f0"
              : typeof mappedObject[objectName] === "function"
              ? "#f0f7ff"
              : typeof mappedObject[objectName] === "boolean"
              ? "#fff0fc"
              : typeof mappedObject[objectName] === "string"
              ? "#efffe8"
              : "#ffffff",
          transition: "0.1s",
        }}
        onClick={() => {
          setMappedObject(mappedObject[objectName]);
          setBreadCrumbs((prev) => [...prev, objectName]);
        }}
      >
        {typeof mappedObject[objectName] === "object" && (
          <div
            style={{
              color: "orange",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            &#123;...&#125;
          </div>
        )}

        {typeof mappedObject[objectName] === "function" && (
          <div
            style={{
              color: "blue",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            &#40;&#41; =&gt;
          </div>
        )}

        {typeof mappedObject[objectName] === "string" && (
          <div
            style={{
              color: "green",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            &#34;&#34;
          </div>
        )}

        {typeof mappedObject[objectName] === "number" && (
          <div
            style={{
              color: "red",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            #
          </div>
        )}

        {typeof mappedObject[objectName] === "boolean" && (
          <div
            style={{
              color: "purple",
              borderRight: "1px solid black",
              padding: "5px",
            }}
          >
            T/F
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "5px" }}> {objectName}</div>
          {/*Boolean*/}
          <div
            style={{
              borderRadius: "0px 5px 5px 0px",
            }}
          >
            {extended && typeof mappedObject[objectName] === "boolean" && (
              <div
                style={{
                  padding: "5px",
                  color:
                    mappedObject[objectName].toString() === "false"
                      ? "red"
                      : "green",
                }}
              >
                {mappedObject[objectName].toString()}
              </div>
            )}
            {/*Number*/}
            {extended && typeof mappedObject[objectName] === "number" && (
              <div style={{ padding: "5px", color: "red" }}>
                {mappedObject[objectName].toString()}
              </div>
            )}
            {/*String*/}
            {extended && typeof mappedObject[objectName] === "string" && (
              <div style={{ padding: "5px", color: "green" }}>
                {mappedObject[objectName].toString()}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ObjectCard;
