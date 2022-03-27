import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  console.log(
    "This is a demo application, don't import a client built from openapi like this please. Import via NPM package "
  );
  return <Component {...pageProps} />;
}

export default MyApp;
