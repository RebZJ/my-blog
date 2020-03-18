import React from "react";
import Layout from "./components/layout";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PostPage from "./components/PostPage";
import BlogEditor from "./components/BlogEditor";
import SliderImage from "./components/SliderImage";
import postslocal from "./posts/postslocal.json";

const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
 
      try {
        var arrayposts = [];

        for(var i=0;i<postslocal[0].length;i++){
          if(postslocal[0][i].published === "true"){
            arrayposts.push(postslocal[0][i]);
          }
        }
        const posts =  arrayposts.reverse();
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

                <NavBar />

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
                    path={"/posts/" + post.slug}
                    render={props => <PostPage post={post}></PostPage>}
                  />
                ))}
                <Route path={"/blog-editor"}
                render={props =><BlogEditor></BlogEditor>}></Route>

            </React.Fragment>
          )}
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}
export default App;
