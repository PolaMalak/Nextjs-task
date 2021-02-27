import newsStyles from '../styles/News.module.css'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NewsItem = ({newsItem}) => {
    const DATE_OPTIONS = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    var cts = newsItem.created_at,
      cdate = (new Date(cts)).toLocaleDateString('en-US', DATE_OPTIONS).toUpperCase(),
      ctime = (new Date(cts)).toLocaleTimeString('en-US', { hour12: false,hour: '2-digit', minute: '2-digit' }),
      fulltime = cdate + ' AT ' + ctime
    return (
        <div>
            <div className={newsStyles.card}>
                <div className={newsStyles.header}>
                <img className={newsStyles.images} src={newsItem.source.url} alt="image"/>
                <h3 className={newsStyles.sourceTitle}>{newsItem.source.title}</h3>
                <div className={newsStyles.icon}><FontAwesomeIcon icon={faRss} color="green"  size="2x"></FontAwesomeIcon></div>
                </div>
                <h4 className={newsStyles.title}>{newsItem.title}</h4>
                <h4 style={{color:"teal",font:"1em arial"}}>{fulltime}</h4>
                <div className={newsStyles.keywordList}>{newsItem.keywords.map((keyword)=>(<div className={newsStyles.keyword}>{keyword.name}</div>))}</div>
            </div>
        </div>
    )
}
export default NewsItem