'use client';
import React from 'react';
import Link from 'next/link'
import { MyButtonProps } from '@/types/types';


export default function MyButton({ children, className, href }: MyButtonProps) {

  return (
<Link href={href} className={className} >{children}</Link>
  );
}
