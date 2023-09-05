import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let {title, description,imageurl,newsUrl,author,date,source}= this.props;
    return (
      <div className='my-3'>
       <div classname="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"80",zIndex:"1"}}>{source}</span>
  <img classname="card-img-top img-fluid" style={{ maxWidth: '350px', height: 'auto' }} src={!imageurl?"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/11787/production/_124395517_bbcbreakingnewsgraphic.jpg":imageurl} alt="Card image cap"/>
  <div classname="card-body">
    <h5 classname="card-title">{title}..</h5>
    <p classname="card-text">{description}..</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
    {/* target="_blank" helps us to open the article in new tab */}
    <a href={newsUrl} target='_blank' class="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitems
