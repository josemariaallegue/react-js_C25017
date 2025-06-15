export default function StarRating({ value, max = 5 }) {
  const fullStars = Math.floor(value);
  const emptyStars = max - fullStars;

  const fullStar = "★";
  const emptyStar = "☆";

  return (
    <div
      style={{
        color: "#f5c518",
        fontSize: "1.2rem",
        letterSpacing: "2px",
        display: "inline",
      }}
    >
      {fullStar.repeat(fullStars)}
      {emptyStar.repeat(emptyStars)}
    </div>
  );
}
