import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Jadennns Portfolio"
        defaultTitle="Jadennns Portfolio"
        titleTemplate="Jadennns Portfolio"
        description="Hello! I am a developer from Indonesia and this is my portfolio! 👋"
        twitter={{
          handle: "@AbsurdBasically",
          site: "@AbsurdBasically",
          cardType: "summary_large_image",
        }}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://jadennns.space",
          site_name: "Jadennns Portfolio",
          title: "Jadennns Portfolio",
          description:
            "Hello! I am a developer from Indonesia and this is my portfolio! 👋",
          images: [
            {
              url: "/assets/Icon.jpg",
              width: 80,
              height: 80,
              alt: "Icon Logo",
            },
          ],
        }}
        canonical="https://jadennns.space/"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/assets/Icon.jpg",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
