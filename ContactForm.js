"use client";

import { useState } from "react";

const CONTACT_EMAIL = "hello@alio.kr"; // TODO: 실제 운영 이메일로 교체해주세요

const fieldStyle = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: 12,
  border: "1px solid var(--alio-purple-line)",
  background: "var(--alio-paper-raised)",
  fontFamily: "var(--font-display)",
  fontSize: "0.98rem",
  color: "var(--alio-ink)",
};

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    clicker: "화이트",
    quantity: "1",
    message: "",
  });

  function update(key) {
    return (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`[alio 문의] ${form.name || "이름 미입력"}`);
    const body = encodeURIComponent(
      `이름: ${form.name}\n` +
        `연락처(이메일): ${form.email}\n` +
        `희망 클리커 색상: ${form.clicker}\n` +
        `수량: ${form.quantity}\n\n` +
        `메시지:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 18 }}>
      <label>
        <span className="label" style={{ display: "block", marginBottom: 8 }}>이름</span>
        <input required type="text" value={form.name} onChange={update("name")} style={fieldStyle} />
      </label>

      <label>
        <span className="label" style={{ display: "block", marginBottom: 8 }}>이메일</span>
        <input required type="email" value={form.email} onChange={update("email")} style={fieldStyle} />
      </label>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <label>
          <span className="label" style={{ display: "block", marginBottom: 8 }}>클리커 색상</span>
          <select value={form.clicker} onChange={update("clicker")} style={fieldStyle}>
            <option>화이트</option>
            <option>블랙</option>
          </select>
        </label>
        <label>
          <span className="label" style={{ display: "block", marginBottom: 8 }}>수량</span>
          <input type="number" min="1" value={form.quantity} onChange={update("quantity")} style={fieldStyle} />
        </label>
      </div>

      <label>
        <span className="label" style={{ display: "block", marginBottom: 8 }}>메시지 (선택)</span>
        <textarea rows={4} value={form.message} onChange={update("message")} style={{ ...fieldStyle, resize: "vertical" }} />
      </label>

      <button type="submit" className="btn btn--purple" style={{ marginTop: 8 }}>
        문의 보내기
      </button>
    </form>
  );
}
