import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Loader from './Loader';
import PropTypes from 'prop-types'
//import React, { Component } from 'react'
export class News extends Component {
  // in class base we use constructor
  static defaultProps = {
    country: 'in',
    pageSize:8,
    category:'general',
  }
  static propTypes =
  {
    countey:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  captialfirstletter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props)
  {
    super(props);
    //this how we use state in class base component
    this.state={
    article:[],
    loading: false,
    page:1
    }
    document.title=`${this.captialfirstletter(this.props.category)} - BuzzBulletin`;
  }
  async updateNews()
  {
    const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92347caeb7d445aea3a1938b0b9cc53c&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parseddata=await data.json()
    this.setState({article:parseddata.articles,
      totalResults:parseddata.totalResults,
    loading:false
    })
  }
  async componentDidMount()
  {
    // const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92347caeb7d445aea3a1938b0b9cc53c&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parseddata=await data.json()
    // this.setState({article:parseddata.articles,
    //   totalResults:parseddata.totalResults,
    // loading:false
    // })
    this.updateNews();
  }
 handlePrevoiusClick = async ()=>
  {
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92347caeb7d445aea3a1938b0b9cc53c&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parseddata=await data.json()
    // this.setState({
    //   page:this.state.page-1,
    //   article:parseddata.articles,
    //   loading:false
    //  })
    this.setState({page:this.state.page-1})
    this.updateNews();
  } 
  handleNextClick = async ()=>
  {
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)))
    // {
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92347caeb7d445aea3a1938b0b9cc53c&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parseddata=await data.json()
    // this.setState({loading:true});
    // this.setState({
    //   page:this.state.page+1,
    //   article:parseddata.articles,
    //   loading:false
    //  })
    // }
    this.setState({page:this.state.page-1})
    this.updateNews();
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center "style={{margin:`30px 0px`}}>
          Buzz-Bulletin Top {this.captialfirstletter(this.props.category)} Headlines</h1>
        {this.state.loading&&<Loader/>}
        <div className="row">
          {Array.isArray(this.state.article) && !this.state.loading &&this.state.article.map((element)=>
          {
            return <div className="col md-4" key={element.url}>
        <Newsitems title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>  
          })}
        </div>
        <div className="container d-flex justify-content-between ">
        <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevoiusClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)}type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}

export default News

