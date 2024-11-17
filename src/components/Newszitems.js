import React from "react";
import './Newszitems.css'




function Newszitems(props){
    let date = new Date(props.date);
    let realdate = date.toGMTString();
    
    
    return (
      <div>
        <div
          className={`card m-5 position-relative card shadow-lg ${props.cardblack}`}
          style={{ width: "18rem", height: "420px" }}
        >
          <img
            style={{ height: "180px", width:'100%' }}
            src={props.imageUrl}
            className="card-img-top"
            alt="Not found"
          />
          <span
            className="badge bg-danger"
            style={{ position: "absolute", top: "-10px", right: "-10px" }}
          >
           {props.source}
          </span>
          <div className="card-body position-relative">
            <h5 className="card-title" style={{ height: "96px" }}>
              {props.title}...
            </h5>
            <div
              className="container"
              style={{ position: "absolute", bottom: "70px", left: "5px" }}
            >
              <h7>
                By <i>{props.writer ? props.writer : "Unknown"}</i> at{" "}
                <i style={{ color: "red" }}>{realdate}</i>
              </h7>
            </div>

            <a
              href={props.url1}
              target="_blank"
              className="btn btn-primary"
              style={{ position: "absolute", bottom: "15px" }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}
export default Newszitems;