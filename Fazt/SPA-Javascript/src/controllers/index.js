import Home from "./home.controller" 
import Posts from "./posts.controller"
import notFound from "./404.controller"
import Characters from "./characters.controller"

const pages = {
    home: Home,
    posts: Posts,
    characters: Characters,
    notFound: notFound
}

export {pages}