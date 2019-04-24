import React from 'react';
import { render } from "react-dom";
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import {gql} from "apollo-boost";
import ArticlesView from './components/ArticlesView';

const client = new ApolloClient({
  uri: "http://d86.dd:8083/graphql"
});

// client
//   .query({
//     query: gql`
//       {
//         nodeQuery {
//           entities {
//             ... on NodeArticle {
//               nid
//               title
//               body {
//                 value
//               }
//             }
//           }
//         }
//       }
//     `
//   })
//   .then(({data}) => console.log({ data }));

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App-body">
          <ArticlesView />
        </div>
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;
