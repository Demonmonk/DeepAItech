import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Deep AI Tech — Intelligence, engineered.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#ffffff",
          fontFamily: "sans-serif",
          backgroundColor: "#050506",
          backgroundImage:
            "radial-gradient(900px circle at 100% 0%, rgba(31,240,192,0.22), transparent 55%), radial-gradient(700px circle at 0% 100%, rgba(21,201,160,0.20), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 26,
            letterSpacing: 4,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              backgroundColor: "#1ff0c0",
            }}
          />
          DEEP AI TECH
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          We build intelligent systems that move your business forward.
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <div style={{ display: "flex" }}>
            AI · Software · Digital Transformation
          </div>
          <div style={{ display: "flex" }}>Dubai, UAE</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
