'use client';
import React from 'react';
import Link from 'next/link'
import { MyButtonProps } from '@/types/types';


export default function MyButton({ children, className }: MyButtonProps) {

  return (
<Link href={"/main"} className={className} >{children}</Link>
  );
}
