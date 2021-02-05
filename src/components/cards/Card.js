export const Card = ({ id, img, title, price }) => {
  var url = "/products/" + id;
  return (
    <div className="col-lg-2 col-md-3 col-sm-6">
      <a href={url} className="btn">
        <div className="card zoom">
          <img src={img} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h1 className="dispaly-3">{price}</h1>
          </div>
        </div>
      </a>
    </div>
  );
};
