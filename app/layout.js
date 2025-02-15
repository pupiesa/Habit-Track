import "./globals.css";
import Nav from "./components/Nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Nav />
        {children}
      </body>
    </html>
  );
}
