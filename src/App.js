import React, { useEffect } from "react";
import Layout from "./components/layout";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostPage from "./components/PostPage";
import BlogEditor from "./components/BlogEditor";
import SliderImage from "./components/SliderImage";
import postslocal from "./posts/postslocal.json";
import moment from "moment";
import AllBlogPostsPage from "./components/AllPostsPage";
import Footer from "./components/footer";
import AboutPage from "./components/AboutPage";
import { useLocation } from "react-router-dom";
import mainbg from "./assets/mainbg.gif";
import styles from "./App.module.css";

//state management thingo
const MyContext = React.createContext();

var url_request =
  "https://public-api.wordpress.com/rest/v1.1/sites/rebdoesathink.art.blog/posts/";

// Then create a provider Component
class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      anotherthing: 0
    };
  }

  async componentDidMount() {
    fetch(url_request)
      .then(res => res.json())
      .then(
        result => {
          var posts = result.posts;
          this.setState({ posts });
        },

        error => {
          alert(
            error +
              ". SORRY! Can't load this right now, please come back in a minute? (This probably means there are a lot a lot of people here right now). Love -Reb"
          );
        }
      );
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

class StyledDiv extends React.Component {
  render() {
    return (
      <div
        style={{ minHeight: "100vh", maxWidth: "100vw", padding: "60px 0 0 0" }}
        className={styles.mainbgcss}
      >
        {this.props.children}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <MyProvider>
            <MyContext.Consumer>
              {context => (
                <React.Fragment>
                  <NavBar></NavBar>

                  <StyledDiv>
                    
                    <Route
                      exact
                      path="/"
                      render={props => (
                        <Layout posts={context.state.posts}></Layout>
                      )}
                    />

                    {/*This creates all the routes for all of the pages that I have*/}
                    {context.state.posts.map(post => (
                      <Route
                        key={post.date}
                        exact
                        path={
                          "/posts/" +
                          moment(post.date).format("YYYY-MM-DD") +
                          "/" +
                          post.slug
                        }
                        render={props => <PostPage post={post}></PostPage>}
                      />
                    ))}
                    <Route
                      exact
                      path={"/posts"}
                      render={props => (
                        <AllBlogPostsPage
                          posts={context.state.posts}
                        ></AllBlogPostsPage>
                      )}
                    />
                    <Route
                      exact
                      path={"/about"}
                      render={props => (
                        <AboutPage posts={context.state.posts} />
                      )}
                    />
                    
                  </StyledDiv>
                  <Footer></Footer>
                </React.Fragment>
              )}
            </MyContext.Consumer>
          </MyProvider>
        </div>
      </div>
    );
  }
}
export default App;
