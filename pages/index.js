import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Maca Rojas — Under Construction</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body { margin: 0; padding: 0; }
              #uc-root * { box-sizing: border-box; }
              @keyframes uc-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
              @keyframes uc-pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.6); opacity: .35; } }
              @keyframes uc-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
            `,
          }}
        />
      </Head>

      <div id="uc-root" style={styles.root}>
        <div style={styles.content}>
          <div style={styles.badge}>
            <span style={styles.dotWrap}>
              <span style={styles.dotPing}></span>
              <span style={styles.dot}></span>
            </span>
            <span style={styles.badgeText}>Under construction</span>
          </div>

          <h1 style={styles.h1}>
            I&apos;m busy building<br />this website
          </h1>

          <p style={styles.p}>
            Pull up a chair and come back a little later &mdash; it&apos;ll be worth the wait.
          </p>

          <div style={styles.domain}>macarojasb.com</div>
        </div>

        <div style={styles.artBox}>
          <img
            src="/img/under-construction.png"
            alt="Illustration of someone at a desk, hard at work"
            style={styles.art}
          />
        </div>
      </div>
    </>
  );
}

const ACCENT = "#c8654a";
const ACCENT_SOFT = "#f6e0d2";
const ACCENT_INK = "#a64b32";
const INK = "#3a3326";
const INK_SOFT = "#7a6f5c";
const BG = "#fbf3e3";

const styles = {
  root: {
    minHeight: "100vh",
    width: "100%",
    background: BG,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflowX: "hidden",
    padding: "32px 0",
  },
  content: {
    width: "100%",
    maxWidth: 1040,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "48px 28px 8px",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 16px 8px 12px",
    borderRadius: 999,
    background: ACCENT_SOFT,
    animation: "uc-rise .6s ease both",
  },
  dotWrap: { position: "relative", display: "inline-flex", width: 9, height: 9 },
  dotPing: {
    position: "absolute",
    inset: 0,
    borderRadius: 999,
    background: ACCENT,
    animation: "uc-pulse 1.8s ease-in-out infinite",
  },
  dot: { position: "relative", width: 9, height: 9, borderRadius: 999, background: ACCENT },
  badgeText: {
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: ".14em",
    textTransform: "uppercase",
    color: ACCENT_INK,
  },
  h1: {
    fontFamily: "'Fredoka', sans-serif",
    fontWeight: 600,
    fontSize: "clamp(32px, 6vw, 60px)",
    lineHeight: 1.08,
    color: INK,
    margin: "26px 0 0",
    letterSpacing: "-.01em",
    textWrap: "balance",
    animation: "uc-rise .6s ease .08s both",
  },
  p: {
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 500,
    fontSize: "clamp(16px, 2.4vw, 21px)",
    lineHeight: 1.5,
    color: INK_SOFT,
    margin: "18px 0 0",
    maxWidth: "30ch",
    textWrap: "pretty",
    animation: "uc-rise .6s ease .16s both",
  },
  domain: {
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: ".12em",
    color: ACCENT_INK,
    marginTop: 30,
    animation: "uc-rise .6s ease .24s both",
  },
  artBox: {
    width: "100%",
    maxWidth: 1000,
    padding: "0 16px 32px",
    animation: "uc-float 6s ease-in-out infinite",
  },
  art: { display: "block", width: "100%", height: "auto" },
};
