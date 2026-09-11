import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Maël Demory — software engineer seeking an internship abroad, June to September 2027";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* La photo est lue sur le disque au build : ImageResponse n'a pas accès aux
   imports statiques de Next, et un chemin relatif ne serait pas résolu. */
async function photoDataUri() {
    const bytes = await readFile(join(process.cwd(), "assets/images/photo_cv.png"));
    return `data:image/png;base64,${bytes.toString("base64")}`;
}

export default async function OpengraphImage() {
    const photo = await photoDataUri();

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: 64,
                    padding: "0 90px",
                    backgroundColor: "#f5f5f7",
                    color: "#1d1d1f",
                }}
            >
                <img
                    alt=""
                    src={photo}
                    width={300}
                    height={300}
                    style={{ borderRadius: 300, objectFit: "cover", flexShrink: 0 }}
                />

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", fontSize: 82, fontWeight: 700, letterSpacing: "-0.03em" }}>
                        Maël Demory<span style={{ color: "#0071e3" }}>.</span>
                    </div>
                    <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "#6e6e73", maxWidth: 620 }}>
                        Future software engineer, PHP and JavaScript developer
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: 30,
                            padding: "13px 26px",
                            borderRadius: 999,
                            backgroundColor: "rgba(0, 113, 227, 0.1)",
                            color: "#0071e3",
                            fontSize: 26,
                            fontWeight: 500,
                        }}
                    >
                        Internship abroad · June – September 2027
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
