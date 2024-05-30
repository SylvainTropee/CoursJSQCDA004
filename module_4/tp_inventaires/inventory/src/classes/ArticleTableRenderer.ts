import {Article} from "./Article.ts";
import {Popup} from "./Popup.ts";

export class ArticleTableRenderer {

    private _articles: Article[] // Array<Article>

    constructor() {
        this._articles = []
    }

    public addArticle(article: Article) {
        this._articles.push(article)
    }

    get articles(): Article[] {
        return this._articles;
    }

    set articles(value: Article[]) {
        this._articles = value;
    }

    public generateRandomArticles(numArticle: number) {
        for (let i : number = 0; i < numArticle; i++) {
            const article: Article = new Article(
                `Article ${i}`,
                `description ${i}`,
                Math.floor(Math.random() * 100)
            )
            this.addArticle(article)
        }
    }

    public createTable(headers: string[]): HTMLTableElement {
        const table : HTMLTableElement = document.createElement('table')
        const thr : HTMLTableRowElement = table.createTHead().insertRow(0)

        headers.forEach(function (val : string) {
            const th : HTMLTableCellElement = document.createElement('th')
            th.innerText = val
            thr.append(th)
        })
        //table.createTBody()
        return table
    }

    public addRowEvent(row: HTMLTableRowElement, article: Article) {
        row.addEventListener('click', function () {
            const articleContent : string =
                `<h2>${article.name}</h2>
                <p><b>Description</b> : ${article.description}</p>
                <p><strong>Price</strong> : ${article.price} €</p>`

            Popup.show(articleContent)
        })
    }

    public render() {
        const articleListDiv: HTMLElement | null = document.getElementById('app')

        if (articleListDiv) {
            const table: HTMLTableElement = this.createTable(["Name", "Description", "Price"])
            const tbody: HTMLTableSectionElement = table.createTBody()
            //const tbody = table.getElementsByTagName('tbody')[0]
            this.articles.forEach((article) => {
                const row: HTMLTableRowElement = tbody.insertRow()
                this.addRowEvent(row, article)
                row.innerHTML = [article.name, article.description, article.price]
                    .map((cellData: string | number): string => `<td>${cellData}</td>`).join('')
            })
            articleListDiv.append(table)
        }
    }
}