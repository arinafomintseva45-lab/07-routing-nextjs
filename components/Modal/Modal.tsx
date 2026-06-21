'use client';

import { useRouter } from 'next/navigation';
import css from './Modal.module.css';

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  const router = useRouter();

  return (
    <div className={css.backdrop} onClick={() => router.back()}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}