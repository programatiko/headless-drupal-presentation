import React from 'react';
import ArticleTeaser from './ArticleTeaser';
import { Query } from "react-apollo";
import {gql} from "apollo-boost";

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
      }, limit:100) {
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

      //console.log(data);
      return (
        <ul>
            {console.log(data.nodeQuery.entities)}
        </ul>
      )
    }}
</Query>
);

export default ArticlesView;