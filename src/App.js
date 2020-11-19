import React from "react";
import Layout from "./components/layout";
import { Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import PostPage from "./components/PostPage";

//import SliderImage from "./components/SliderImage";
//import postslocal from "./posts/postslocal.json";
import moment from "moment";
import AllBlogPostsPage from "./components/AllPostsPage";
import Footer from "./components/footer";
import AboutPage from "./components/AboutPage";
//import { useLocation } from "react-router-dom";
//import mainbg from "./assets/mainbg.gif";
import styles from "./App.module.css";
import { MyContext, MyProvider } from "./myContext";
import NotFoundPage from './components/NotFoundPage';
//state management 

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
              {(context) => (
                <React.Fragment>
                  <NavBar greeting={context.state.greeting}></NavBar>

                  <StyledDiv>
                    <Switch>
                      <Route
                        exact
                        path="/"
                        render={(props) => (
                          <Layout posts={context.state.posts}></Layout>
                        )}
                      />

                      {/*This creates all the routes for all of the pages that I have*/}
                      {context.state.posts.map((post) => (
                        <Route
                          key={post.date}
                          exact
                          path={
     
                            "/" +
                            post.slug
                          }
                          render={(props) => <PostPage post={post}></PostPage>}
                        />
                      ))}
                      <Route
                        exact
                        path={"/posts"}
                        render={(props) => (
                          <AllBlogPostsPage
                            posts={context.state.posts}
                          ></AllBlogPostsPage>
                        )}
                      />
                      <Route
                        exact
                        path={"/about"}
                        render={(props) => (
                          <AboutPage posts={context.state.posts} />
                        )}
                      />
                {/* <Route path="*" component={NotFoundPage} />*/}
                    </Switch>
                  </StyledDiv>
                  <Footer />
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
