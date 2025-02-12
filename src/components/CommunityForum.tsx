// Sistema de tópicos e comentários com moderação 

import React, { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  timestamp: Date;
  comments: Comment[];
}

interface Comment {
  id: string;
  content: string;
  author: string;
  timestamp: Date;
}

const CommunityForum = () => {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  useEffect(() => {
    const q = query(collection(db, 'forumPosts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate()
      }) as ForumPost));
    });
    return () => unsubscribe();
  }, []);

  const createPost = async () => {
    if (newPost.title && newPost.content) {
      await addDoc(collection(db, 'forumPosts'), {
        ...newPost,
        author: 'Usuário Anônimo',
        timestamp: new Date(),
        comments: []
      });
      setNewPost({ title: '', content: '' });
    }
  };

  return (
    <div className="community-forum">
      <div className="create-post">
        <input
          value={newPost.title}
          onChange={(e) => setNewPost({...newPost, title: e.target.value})}
          placeholder="Título do post"
        />
        <textarea
          value={newPost.content}
          onChange={(e) => setNewPost({...newPost, content: e.target.value})}
          placeholder="Conteúdo do post"
        />
        <button onClick={createPost}>Publicar</button>
      </div>

      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="forum-post">
            <h3>{post.title}</h3>
            <p className="post-meta">Por {post.author} • {post.timestamp.toLocaleDateString()}</p>
            <p>{post.content}</p>
            <div className="comments-section">
              {post.comments.map(comment => (
                <div key={comment.id} className="comment">
                  <p className="comment-meta">{comment.author} • {comment.timestamp.toLocaleDateString()}</p>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 