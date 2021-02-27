import NewsItem from '../components/NewsItem'
import newsStyles from '../styles/News.module.css'
const News = ({news}) => {
    console.log(news)
    return (
        <div className={newsStyles.grid}>
        {news.news.map((newsItem)=><NewsItem newsItem={newsItem} />)}
        </div>
    )
}
export default News