import { ReactNode } from 'react';
import './globals.css';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="container mx-auto py-8">{children}</div>
      </body>
    </html>
  );
}
