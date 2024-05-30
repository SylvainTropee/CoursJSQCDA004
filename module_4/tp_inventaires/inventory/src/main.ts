import {ArticleTableRenderer} from "./classes/ArticleTableRenderer.ts";
import './style.css'


let articleListRenderer = new ArticleTableRenderer()
articleListRenderer.generateRandomArticles(500)
articleListRenderer.render()
