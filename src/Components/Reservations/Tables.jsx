import React, { useState } from "react";
import { Layer, Rect, Stage, Text } from "react-konva";

const initialTables = [
  { id: 1, x: 80, y: 50, status: "free", capacity: 4 },
  { id: 2, x: 230, y: 50, status: "taken", capacity: 2 },
  { id: 3, x: 380, y: 50, status: "free", capacity: 4 },
  { id: 4, x: 530, y: 50, status: "free", capacity: 6 },
  { id: 5, x: 80, y: 150, status: "taken", capacity: 2 },
  { id: 6, x: 230, y: 150, status: "free", capacity: 4 },
  { id: 7, x: 380, y: 150, status: "free", capacity: 4 },
  { id: 8, x: 530, y: 150, status: "taken", capacity: 2 },
  { id: 9, x: 80, y: 250, status: "free", capacity: 6 },
  { id: 10, x: 230, y: 250, status: "free", capacity: 4 },
  { id: 11, x: 380, y: 250, status: "free", capacity: 4 },
  { id: 12, x: 530, y: 250, status: "free", capacity: 6 },
];

const tableWidth = 80;
const tableHeight = 60;

const Tables = () => {
  const [tables, setTables] = useState(initialTables);

  const toggleTableStatus = (id) => {
    setTables((prevTables) =>
      prevTables.map((table) =>
        table.id === id
          ? { ...table, status: table.status === "free" ? "taken" : "free" }
          : table
      )
    );
  };

  return (
    <div>
      {/* TODO: Add mobile responsiveness */}
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Table availability today
      </h2>
      <Stage width={800} height={500}>
        <Layer>
          {/* Restaurant Walls */}
          <Rect
            x={10}
            y={10}
            width={780}
            height={480}
            fill="#e0e0e0"
            stroke="black"
            strokeWidth={2}
          />

          {/* Doors */}
          <Rect x={350} y={480} width={80} height={10} fill="brown" />

          {/* Windows */}
          <Rect x={10} y={50} width={10} height={50} fill="lightblue" />
          <Rect x={780} y={50} width={10} height={50} fill="lightblue" />
          <Rect x={10} y={150} width={10} height={50} fill="lightblue" />
          <Rect x={780} y={150} width={10} height={50} fill="lightblue" />
          <Rect x={10} y={250} width={10} height={50} fill="lightblue" />
          <Rect x={780} y={250} width={10} height={50} fill="lightblue" />

          {/* Bar - Placed in Bottom Right */}
          <Rect
            x={600}
            y={400}
            width={160}
            height={80}
            fill="#8B4513"
            stroke="black"
            strokeWidth={2}
          />
          <Text
            x={660}
            y={430}
            text="BAR"
            fontSize={20}
            fill="white"
            fontStyle="bold"
          />

          {/* Live Music Section - Bottom Left */}
          <Rect
            x={20}
            y={400}
            width={300}
            height={80}
            fill="#444"
            stroke="black"
            strokeWidth={2}
          />
          <Text
            x={120}
            y={430}
            text="LIVE MUSIC"
            fontSize={18}
            fill="white"
            fontStyle="bold"
          />

          {/* Tables */}
          {tables.map((table) => (
            <React.Fragment key={table.id}>
              <Rect
                x={table.x}
                y={table.y}
                width={tableWidth}
                height={tableHeight}
                fill={table.status === "free" ? "green" : "red"}
                stroke="black"
                strokeWidth={2}
                onClick={() => toggleTableStatus(table.id)}
                style={{ cursor: "pointer" }}
              />
              <Text
                x={table.x + tableWidth / 2 - 10}
                y={table.y + tableHeight / 2 - 5}
                text={table.id.toString()}
                fontSize={12}
                fill="white"
              />
              <Text
                x={table.x + tableWidth / 2 - 20}
                y={table.y + tableHeight + 5}
                text={`${table.capacity} people`}
                fontSize={12}
                fill="black"
              />
            </React.Fragment>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Tables;
