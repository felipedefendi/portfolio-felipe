import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Felipe Defendi — Full-Stack Developer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0f",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 84,
            height: 84,
            borderRadius: 18,
            background: "linear-gradient(135deg, #6366f1, #22d3ee)",
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          FD
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 800,
            marginTop: 40,
            letterSpacing: -2,
          }}
        >
          Felipe Defendi
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 46,
            fontWeight: 600,
            marginTop: 8,
            color: "#22d3ee",
          }}
        >
          Full-Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 28,
            color: "#9aa2b1",
          }}
        >
          Next.js · TypeScript · Node · Nest · SQL
        </div>
      </div>
    ),
    { ...size },
  );
}
