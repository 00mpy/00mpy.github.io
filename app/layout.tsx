import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Oompy — Work in Motion";
const description = "A kinetic portfolio of digital systems, local-first platforms, and interactive tools.";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? "00mpy";
const basePath = repositoryName && !repositoryName.endsWith(".github.io") ? `/${repositoryName}` : "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${repositoryOwner}.github.io${basePath}`;
const socialImage = `${siteUrl}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: socialImage, width: 1792, height: 936, alt: "Oompy — Work in Motion" }],
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
