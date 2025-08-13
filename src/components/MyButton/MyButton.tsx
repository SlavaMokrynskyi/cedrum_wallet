'use client';
import React from 'react';
import Link from 'next/link'
import { MyButtonProps } from '@/types/types';

export default function MyButton({ children, className, href, disabled }: MyButtonProps) {
  if (href) {
    if (disabled) {
      return (
        <span className={className} aria-disabled="true" tabIndex={-1} style={{ pointerEvents: 'none', opacity: 0.5 }}> {children}
        </span>
      );
    }
  return (
<Link href={href} className={className} >{children}</Link>
  );
}
return (
    <button type="button" className={className} disabled={disabled}> {children}
    </button>
  );
}