import './style.css'

function Article ({title, text, date}) {
    return (
        <article> 
                <div class="info-blog">
                    <span>{date}</span>
                    <img src="src/assets/heart.png"></img>

                </div>
                <div className="content-blog">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
        </article>
    )
}

export default Article;