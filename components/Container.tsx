import React from 'react';

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container mx-auto lg:px-53 px-4 ${className}`}>
      {children}
    </section>
  );
}

export default Container;
