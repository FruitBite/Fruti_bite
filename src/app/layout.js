import "./globals.css";

export const metadata = {
  title: "Fruit Bite | Home",
  description: "Healthy Habit Starts Here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
