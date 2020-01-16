import React from 'react';
import axios from 'axios';
 

class News extends React.Component {
  state = {
    datas: [],
    isLoading: true,
    errors: null
  };
 
  Databerita() {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=id&apiKey=fd53606b10894acfa3aa8e940e77fa5f'
      )
      .then(response =>
        response.data.articles.map(
          newsdata => ({
            name: `${newsdata.source.name}`,
            title: `${newsdata.title}`,
            description: `${newsdata.description}`,
            content: `${newsdata.content}`,
            image: `${newsdata.urlToImage}`,
            create: `${newsdata.publishedAt}`,
            url: `${newsdata.url}`
          })
         
        )
      )
 
      .then(datas => {
        this.setState(
          {
            datas,
            isLoading: false
          },
          console.log(datas)
        );
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
 
 
 
  componentDidMount() {
    this.Databerita();
  }
 
  render() {
    const { isLoading, datas } = this.state;
    return (
      <React.Fragment>
        
          <div className="container judulber">
            <div className="row">
                <div className="col-lg-12">
                    <div className="alert alert-primary" role="alert">
                       <h2 className="text-center">News</h2> 
                    </div>
                </div>
                
            </div>
          </div>
 
          
            {!isLoading ? (
              datas.map(data => {
                const {
                  name,
                  title,
                  description,
                  image,
                  content,
                  create,
                  url
                } = data;
 
                return (
                  <div key={data.title} className='container testi'>
                    <a href={url}>
                        <div className="col-lg-12 kiri item-news">
                          
                            <img className='img-fluid img-news' src={image} alt='images' />
                            <div className='content-detail'>
                            <h4 className='title'>{title}</h4>
                            <span className="date-create">{create}</span>
                            <p className='desc'>{description.substring(0,100)}..</p>
                            <p className='content'>
                              <div class='content-name'>{name} &nbsp;</div>
                              {content.substring(0, 150)}- <a>readmore..</a>
                            </p>
                            </div>
                            
                        </div>
                        </a>
                  </div>
                );
              })
            ) : (
            
            <div className="container">
                 <p className="text-center">Loading...</p>
            </div>
             
            )}
         
        
      </React.Fragment>
    );
  }
}
 
export default News;