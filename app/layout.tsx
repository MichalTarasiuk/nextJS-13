import './globals.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html>
      <head>
        <title>Nested layouts by example</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
