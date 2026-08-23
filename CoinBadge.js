export default function CoinBadge({ children, size = 96, tone = "paper", className = "", style = {} }) {
  return (
    <div
      className={`coin ${tone === "purple" ? "coin--purple" : ""} ${className}`}
      style={{ "--coin-size": `${size}px`, ...style }}
      aria-hidden={typeof children === "string" ? undefined : true}
    >
      <span>{children}</span>
    </div>
  );
}
