import React from "react";
import "./styles.css";

const ON_COLOR = "red";
const OFF_COLOR = "grey";
const BOMB = "💣";

const MINEFIELD = [
  [1, 0, 1, 0],
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 0, 1]
];

function Minefield({ data }) {
  return (
    <div>
      {data.map((row, r) => (
        <div key={r} style={{ display: "flex" }}>
          {row.map((cell, c) => (
            <div
              key={c}
              style={{
                width: 50,
                height: 50,
                lineHeight: "50px",
                textAlign: "center",
                fontSize: 32,
                border: "1px solid black",
                borderRadius: 4,
                background: cell ? ON_COLOR : OFF_COLOR
              }}
            >
              {cell ? BOMB : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return <Minefield data={MINEFIELD} />;
}
