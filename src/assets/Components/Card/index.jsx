import "./card.css";

function Card(props) {
  const { data } = props;
  return (
    <div className="olll">
          <div className="wrapper">
            <img src={data.image} alt="" />
            <p className="id">Id:{data.id}</p>
            <div className="name">
              Name:
              <h2>{data.firstName}</h2>
              <h2>{data.lastName}</h2>
            </div>
            <h3>Tel: {data.phone}</h3>
            <h3 className="email">Emali:{data.email}</h3>
            <p className="cars">Cars:{data.cars}</p>
            <div className="adres">
              <p>{data.address.region}</p>
              <p>{data.address.zip}</p>
            </div>
          </div>
    </div>
  );
}

export default Card;
