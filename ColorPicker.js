"use client";

import { useState } from "react";

const CLICKER_OPTIONS = [
  { id: "white", label: "화이트", swatch: "#ffffff" },
  { id: "black", label: "블랙", swatch: "#1b1a20" },
];

const BODY_OPTIONS = [
  { id: "purple", label: "보라", swatch: "#8c7fc9" },
];

function SwatchGroup({ title, options, selected, onSelect }) {
  return (
    <div style={{ marginTop: 22 }}>
      <p className="label" style={{ marginBottom: 12 }}>
        {title} — {options.find((o) => o.id === selected)?.label}
      </p>
      <div style={{ display: "flex", gap: 12 }}>
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => onSelect(o.id)}
            aria-pressed={selected === o.id}
            aria-label={o.label}
            title={o.label}
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: o.swatch,
              border: selected === o.id ? "2px solid var(--alio-purple-deep)" : "1.5px solid var(--alio-purple-line)",
              outlineOffset: 3,
              cursor: "pointer",
              boxShadow: selected === o.id ? "0 0 0 3px var(--alio-purple-soft)" : "none",
              transition: "box-shadow 0.15s ease, border-color 0.15s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ColorPicker() {
  const [clicker, setClicker] = useState("white");
  const [body, setBody] = useState("purple");

  return (
    <div>
      <SwatchGroup title="클리커 색상" options={CLICKER_OPTIONS} selected={clicker} onSelect={setClicker} />
      <SwatchGroup title="본체 색상" options={BODY_OPTIONS} selected={body} onSelect={setBody} />
    </div>
  );
}
