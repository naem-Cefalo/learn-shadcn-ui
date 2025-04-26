import { ClassName } from '@/types/ClassName';

interface Heading1Props extends ClassName {
  children: React.ReactNode;
}
export function Heading1({ children, className }: Heading1Props) {
  return (
    <h1
      className={`scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl ${className}`}>
      {children}
    </h1>
  );
}
