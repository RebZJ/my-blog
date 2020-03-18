import React from "react";
import Layout from "./components/layout";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostPage from "./components/PostPage";
import SliderImage from "./components/SliderImage";
import ApolloClient, { gql } from "apollo-boost";
import { AnimatedRoute } from "react-router-transition";
import { useQuery } from "@apollo/react-hooks";
import Strapi from "strapi-sdk-javascript/build/main";

// //strapi to call the blog posts
// const strapi = new Strapi("http://localhost:1337");

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql"
});

const MyContext = React.createContext();

const QUERY = gql`
  {
    articles {
      title
      date_published
      slug
      content
    }
  }
`;

// Then create a provider Component
class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    var data = await client.query({
      query: QUERY
    });

    console.log(data.data.articles);

      try {
        
        // const posts = await strapi.getEntries("articles");
        const posts =  data.data.articles;
        this.setState({ posts });
      } catch (err) {
        alert(err);
      }
    }
  
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <MyProvider>
        <MyContext.Consumer>
          {context => (
            <React.Fragment>
              <div>
                <NavBar />

                <Route
                  exact
                  path="/"
                  render={props => (
                    <Layout posts={context.state.posts}></Layout>
                  )}
                />

                {/* {context.state.posts.map(post => (
                    <Route
                      path={"/posts/" + post.slug}
                      render={props => <PostPage post={post}></PostPage>}
                    />
                  ))} */}

                {context.state.posts.map(post => (
                  <Route
                    path={"/posts/" + post.slug}
                    render={props => <PostPage post={post}></PostPage>}
                  />
                ))}
              </div>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}
export default App;
