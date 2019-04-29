import React from 'react';
import ArticleTeaser from './ArticleTeaser';
import { Query } from "react-apollo";
import {gql} from "apollo-boost";
import './bulma.min.css';

const ArticlesView = () => (
  <Query
    query={gql`
    {
      nodeQuery(filter:{
        conditions: {
          field: "status"
          value: "false"
          operator: NOT_EQUAL
        }
      }, limit:5) {
        count
        entities {
          ... on NodeArticle {
            title
            status
            fieldImage{
              entity{
                filename
              }
            }
          }
        }
      }
    }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return `Error: ${error.message}`;

      // console.log(data); 

      return (
        <div className='container'>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                My List of Articles
              </h1>
              <h2 className="subtitle">
                This list shows available article titles from my Drupal backend.
              </h2>
            </div>
          </div>
        </section>
        <div className='container'>
        <ul>
          {data.nodeQuery.entities.map(article => <li key={article.nid}><ArticleTeaser article={article} /></li>)}
        </ul>
        </div>
          
        </div>
      )
    }}
</Query>
);

export default ArticlesView;