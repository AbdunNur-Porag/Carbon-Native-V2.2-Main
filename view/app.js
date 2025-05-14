animation.config({
  fade: `
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background: #f8f8f8;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card {
      width: 90%;
      max-width: 600px;
      background: #ffffff;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      border-radius: 12px;
      padding: 30px 20px;
      box-sizing: border-box;
    }

    .skeleton {
      background: linear-gradient(90deg, #ededed 25%, #fafafa 50%, #ededed 75%);
      background-size: 200% 100%;
      animation: shimmer 1.4s infinite linear;
      border-radius: 8px;
      opacity: 0.9;
      margin-bottom: 16px;
    }

    .skeleton.title {
      width: 60%;
      height: 24px;
      margin: 0 auto 24px;
    }

    .skeleton.text {
      width: 100%;
      height: 16px;
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  </style>

  <div class="card">
    <div class="skeleton title"></div>
    <div class="skeleton text"></div>
    <div class="skeleton text"></div>
    <div class="skeleton text"></div>
  </div>
  `,

  slide: () => `
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background: #f8f8f8;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card {
      width: 90%;
      max-width: 600px;
      background: #ffffff;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      border-radius: 12px;
      padding: 30px 20px;
      box-sizing: border-box;
    }

    .skeleton {
      background: linear-gradient(90deg, #ededed 25%, #fafafa 50%, #ededed 75%);
      background-size: 200% 100%;
      animation: shimmer 1.4s infinite linear;
      border-radius: 8px;
      opacity: 0.9;
      margin-bottom: 16px;
    }

    .skeleton.title {
      width: 60%;
      height: 24px;
      margin: 0 auto 24px;
    }

    .skeleton.text {
      width: 100%;
      height: 16px;
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  </style>

  <div class="card">
    <div class="skeleton title"></div>
    <div class="skeleton text"></div>
    <div class="skeleton text"></div>
    <div class="skeleton text"></div>
  </div>
  `
});
const containerStyle = {
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  boxSizing: "border-box"
};

const cardStyle = {
  width: "90%",
  maxWidth: "600px",
  background: "#ffffff",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  borderRadius: "12px",
  padding: "30px 20px",
  textAlign: "center"
};

function MainActivity() {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h5>Carbon Native V2.2</h5>
        <button onClick={() => routeTo("docs", "slide", 1800, "middleCenter")}>Go to Documentation</button>
        <br /><br />
        <button onClick={() => routeTo("about", "fade", 1800, "middleCenter")}>Go to About</button>
      </div>
    </div>
  );
}

function DocumentationActivity() {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
    script.onload = () => Prism.highlightAll();
    document.body.appendChild(script);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={{ ...cardStyle, maxWidth: "900px" }}>
        <h4 style={{ textAlign: "center" }}>
          Router & Skeleton Animation Documentation</h4>

      

        <h3>Step 2: Declare Skeleton Animations</h3>
        <pre><code className="language-js">
{`animation.config({
  fade: \`<div class="skeleton title"></div>\`,
  slide: () => \`<div class="skeleton title"></div>\`
});`}
        </code></pre>

        <h3>Step 3: Configure Routes</h3>
        <pre><code className="language-js">
{`router.config({
  default: <MainActivity />,
  main: <MainActivity />,
  docs: <DocumentationActivity />,
  about: <AboutActivity />,
  notfound: <ErrorPage />
});`}
        </code></pre>

        <h3>Step 4: Use routeTo()</h3>
        <pre><code className="language-js">
{`routeTo("about", "fade", 1500, "topCenter");
routeTo("docs", "slide", 2000, "middleRight");
routeTo("main", "fade", 1000, "bottomLeft");`}
        </code></pre>

        <h3>Skeleton Positions</h3>
        <ul>
          <li>topLeft, topCenter, topRight</li>
          <li>middleLeft, middleCenter, middleRight</li>
          <li>bottomLeft, bottomCenter, bottomRight</li>
          <li>auto (default)</li>
        </ul>

        <div style={{ textAlign: "center" }}>
          <button onClick={() => routeTo("main", "slide", 1200, "middleCenter")}>Main</button><br /><br />
          <button onClick={() => routeTo("about", "fade", 1500, "bottomRight")}>About</button><br /><br />
          <button onClick={() => routeTo("docs", "slide", 1800, "topLeft")}>Docs</button><br /><br />
          <button onClick={() => routeTo("invalidRoute", "fade", 1200, "middleCenter")}>Error Page</button>
        </div>
      </div>
    </div>
  );
}

function AboutActivity() {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h5>About</h5>
        <button onClick={() => routeTo("main", "slide", 1800, "middleCenter")}>Back to Main</button>
      </div>
    </div>
  );
}

function ErrorPage() {
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h5>404 - Page Not Found</h5>
        <button onClick={() => routeTo("main", "fade", 1800, "middleCenter")}>Go to Main</button>
      </div>
    </div>
  );
}

router.config({
  default: <MainActivity />,
  "": <MainActivity />,
  main: <MainActivity />,
  docs: <DocumentationActivity />,
  about: <AboutActivity />,
  notfound: <ErrorPage />
});
