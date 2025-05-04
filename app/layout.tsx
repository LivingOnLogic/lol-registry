import './globals.css';

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}