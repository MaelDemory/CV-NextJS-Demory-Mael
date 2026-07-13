import { ImageResponse } from "next/og";

export const alt = "Maël Demory — Software Engineer Apprentice & engineering student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f5f5f7",
                    color: "#1d1d1f",
                }}
            >
                <div style={{ display: "flex", fontSize: 96, fontWeight: 700, letterSpacing: "-0.03em" }}>
                    Maël Demory<span style={{ color: "#0071e3" }}>.</span>
                </div>
                <div style={{ display: "flex", marginTop: 28, fontSize: 34, color: "#6e6e73" }}>
                    Software Engineer Apprentice & engineering student
                </div>
                <div style={{ display: "flex", marginTop: 12, fontSize: 28, color: "#6e6e73" }}>
                    Arjo France · IMT Nord Europe
                </div>
            </div>
        ),
        { ...size }
    );
}
