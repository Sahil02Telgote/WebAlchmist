import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';

export const metadata = {
  title: 'WebAlchemist | Next-Level Engineering',
  description: 'Turning ideas into digital reality through premium full-stack engineering and 3D web experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
