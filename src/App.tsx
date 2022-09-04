import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/caiocesaroliveira.png',
      name: 'Caio César de Oliveira',
      role: 'Desenvolvedor Web',
    },
    content: [
      { type: 'paragraph', content: 'Primeiro paragrafo' },
      { type: 'paragraph', content: 'Teste de conteúdo do paragrafo' },
      { type: 'link', content: 'caio.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-02 20:20:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO',
    },
    content: [
      { type: 'paragraph', content: 'Segundo paragrafo' },
      { type: 'paragraph', content: 'Teste de conteúdo do segundo paragrafo' },
      { type: 'link', content: 'diego.design/doctorcare' },
    ],
    publishedAt: new Date('2022-09-02 20:30:15'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
