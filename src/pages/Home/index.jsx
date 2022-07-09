import Article from '../../components/Article';
import './style.css'

function Home() {
    return( 
        <>
            <header>
                <div className="container">
                    <div className='title-header'>
                        <span>Codelândia</span>
                        <span>Blog</span>
                    </div>
                        <form className='search-content'>
                            <input type="text"placeholder="Pesquisar no Blog"/>	
                        </form> 
                </div> 
            </header>
            <main>
                <div className="container">
                <Article
                    title={'O valor do dólar sobe pela quinta vez esse ano'}
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras faucibus orci leo, venenatis aliquet purus molestie et. 
                    Nulla pulvinar fermentum posuere.`}
                    date={'08 de jul, 2022'}
                />
                  <Article
                    title={'Tim Berners-Lee vai leiloar código-fonte da web'}
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras faucibus orci leo, venenatis aliquet purus molestie et. 
                    Nulla pulvinar fermentum posuere.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras faucibus orci leo, venenatis aliquet purus molestie et. 
                    Nulla pulvinar fermentum posuere.`}
                    date={'03 de jul, 2022'}
                />
                  <Article
                    title={'Tem Firefox novo no pedaço e você vai querer migrar'}
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras faucibus orci leo, venenatis aliquet purus molestie et. 
                    Nulla pulvinar fermentum posuere.`}
                    date={'02 de jul, 2022'}
                />
                  <Article
                    title={'John McAfee, criador do antivírus McAfee, morre'}
                    text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Cras faucibus orci leo, venenatis aliquet purus molestie et.`}
                    date={'01 de jul, 2022'}
                />
                </div>
                
            </main>

            <footer>
                <p>By: Hudson</p>
            </footer>
    </>
            

    )
}

export default Home;