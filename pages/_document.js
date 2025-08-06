import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="antialiased dark:bg-gray-900">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.add('dark');
              document.body.style.backgroundColor = '#111827';
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
