import React from 'react';

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container mx-auto px-53 ${className}`}>
      {children}
    </section>
  );
}

export default Container;
