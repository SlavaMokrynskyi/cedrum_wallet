'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Редірект на сторінку create-password при завантаженні
    router.push('/registration');
  }, [router]);

  return (
    <div>
      <div className={styles.body}>
        <p>Перенаправлення...</p>
      </div>
    </div>
  );
}

 
 