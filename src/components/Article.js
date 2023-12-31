import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Article.css';
import { firestore } from '../firebase';

const Article = ({ id }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = firestore.collection('articles').doc(id);
        const docSnapshot = await docRef.get();

        if (docSnapshot.exists) {
          setArticle(docSnapshot.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.log('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const { title, author, date, content, imageUrl } = article;

  return (
    <div className="article">
      <img src={imageUrl} alt={title} className="article-image" />
      <div className="article-details">
        <h2>{title}</h2>
        <p>By {author} | {date}</p>
        <div className="article-content">
          {content}
        </div>
        <Link to={`/articles/${id}`} className="read-more">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Article;
