import "./globals.css";



export const metadata = {
  title: "Web dev 2 demo",
  description: "Web dev 2 demos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
