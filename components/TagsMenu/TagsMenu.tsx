'use client';

import css from './TagsMenu.module.css';
import { NOTE_TAGS } from '../../types/note';
import Link from 'next/link';
import { useState } from 'react';

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes ▾
      </button>
      <ul className={css.menuList}>
        {NOTE_TAGS.map(tag => (
          <li key={tag} className={css.menuItem}>
            <Link
              onClick={toggle}
              href={`/notes/filter/?tag=${tag}`}
              className={css.menuLink}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
