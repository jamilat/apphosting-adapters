"use client";
import { useState } from "react";
import styles from "./DigiCam.module.css";

export default function DigiCam() {
  const [message, setMessage] = useState<string | null>(null);

  const flash = (text: string) => {
    setMessage(text);
    setTimeout(() => setMessage(null), 1500);
  };

  return (
    <div className={styles.camera}>
      <img className={styles.body} src="/digicam.png" alt="" />

      {message && <div className={styles.toast}>{message}</div>}

      {/* Replace each flash(...) with whatever the button should really do */}
      <button
        className={styles.hit}
        style={{ left: "80.9%", top: "45.4%" }}
        onClick={() => flash("● REC")}
        aria-label="Record"
      />
      <button
        className={styles.hit}
        style={{ left: "80.8%", top: "89.4%" }}
        onClick={() => flash("DISP")}
        aria-label="Display"
      />
      <button
        className={styles.hit}
        style={{ left: "91.1%", top: "89.4%" }}
        onClick={() => flash("MENU")}
        aria-label="Menu"
      />
    </div>
  );
}
