import Image from 'next/image'
import styles from './page.module.css'
import { revalidatePath } from 'next/cache';

const locales = ['fr', 'en'];
const todos = ['default'];

export default function Home() {

  const addTodo = async () => {
    'use server';
    console.log('adding a TODO...');
    todos.push('todo ' + todos.length);
    revalidatePath('/');
  };

  return (
    <main className={styles.main}>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <form action={addTodo}>
        <button>
          Add a todo
        </button>
      </form>
    </main>
  )
}

/* ------------------------------
  Comment this method => the server action works !
------------------------------ */
export const generateStaticParams = () =>
  locales.map((locale) => ({ lang: locale }));
