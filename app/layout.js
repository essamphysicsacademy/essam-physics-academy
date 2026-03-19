export const metadata = {
  title: "Essam Physics Academy",
  description: "Physics learning platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
