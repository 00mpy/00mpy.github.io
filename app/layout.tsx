import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import "@fontsource/barlow-condensed/900.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/ibm-plex-mono/700.css";
import "./globals.css";

const title = "Oompy Code Work — Motorcycle Racing Tools";
const description =
  "Independent AI-assisted tools that simplify Ridenet entry processing and bring MYLAPS timing to local trackside screens.";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? "00mpy";
const basePath = repositoryName && !repositoryName.endsWith(".github.io") ? "/" + repositoryName : "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://" + repositoryOwner + ".github.io" + basePath;
const socialImage = siteUrl + "/og-pit-wall.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Oompy Code Work",
    images: [{ url: socialImage, alt: "Small tools. Faster race days." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
