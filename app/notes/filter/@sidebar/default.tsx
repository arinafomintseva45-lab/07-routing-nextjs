import css from './Sidebar.module.css';

const tags = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <a className={css.menuLink} href="/notes/filter/all">
          All notes
        </a>
      </li>

      {tags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <a className={css.menuLink} href={`/notes/filter/${tag}`}>
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
}