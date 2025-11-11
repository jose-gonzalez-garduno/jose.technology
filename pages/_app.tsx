import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/ErrorFallback";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  // Load GitHub Spark only on client side
  useEffect(() => {
    import("@github/spark/spark");
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
