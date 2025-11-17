import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Markdown Visualizer',
    description: 'A simple markdown previewer built with Next.js',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-gray-900 text-white">
        <main className="container mx-auto p-4">
            {children}
        </main>
        </body>
        </html>
    );
}