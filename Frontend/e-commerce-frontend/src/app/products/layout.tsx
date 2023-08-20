'use client'
import Search from '@/components/search/Search';

export default function produtsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Search />
            {children}
        </main>
    );
  }
  