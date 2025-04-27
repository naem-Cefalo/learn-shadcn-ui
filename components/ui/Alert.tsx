import { ClassName } from '@/types/ClassName';
import React from 'react';

interface Props extends ClassName {
  children: React.ReactNode;
}

function Alert({ className, children }: Props) {
  return (
    <div
      className={`bg-[linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] ${className}  lg:py-2 p-4 `}>
      <p>{children}</p>
    </div>
  );
}

export default Alert;
