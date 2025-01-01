import "./globals.css";

export function generateMetadata({ page }) {
  const titles = {
    home: "Fruit Bite | Fresh Fruit Delivery in Bengaluru",
    about: "About Fruit Bite | Quality Fruits for Healthy Living",
    contact: "Contact Fruit Bite | Your Fresh Fruit Partner in Bengaluru",
  };
  const descriptions = {
    home: "Healthy habits start here with daily fresh fruits and vegetables delivered to your door.",
    about:
      "Learn about Fruit Bite and our commitment to quality and hygiene in fresh fruit delivery.",
    contact:
      "Get in touch with Fruit Bite for your daily fresh fruit subscription in Bengaluru.",
  };

  const keywords =
    "Fresh fruit delivery Bengaluru, Healthy breakfast delivery, Fruits and vegetables subscription box, Dry fruits and nuts online, Sprouts and veggies delivery, Daily fruit box, Hygiene-focused fruit delivery, Nature’s candy for health, Affordable fruit plans, Fast and fresh delivery service, Best healthy food subscription in Bengaluru, Daily fresh fruit and veggie delivery, Hygienic fruit box delivery for families, Affordable fruit and vegetable subscription, Healthy habits with daily fresh fruits, Fruit Bite Bengaluru, Healthy habits start here, Quality fruit delivery near me, Fruit Bite subscription plans, Fresh fruits from Fruit Bite, Fruit delivery Electronics City Phase 1, Healthy food delivery Bengaluru 560100, Fruit Bite in Electronics City, Best fruit subscription in Karnataka, Fresh food delivery near Electronic City";

  return {
    title: titles[page] || "Fruit Bite | Fresh Fruit Delivery in Bengaluru",
    description:
      descriptions[page] ||
      "Healthy habits start here with daily fresh fruits,vegetables,dry fruits and sprouts delivered to your door.",
    keywords,
  };
}

export default function RootLayout({ children, page }) {
  return (
    <html lang="en">
      <head>
        <title>{generateMetadata({ page }).title}</title>
        <meta
          name="description"
          content={generateMetadata({ page }).description}
        />
        <meta name="keywords" content={generateMetadata({ page }).keywords} />
        <link rel="icon" href="/favicon.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
