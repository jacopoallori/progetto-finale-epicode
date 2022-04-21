import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Categories() {
  const Params = useParams();
  const { id } = Params;

  const call = async () => {
    const response = await fetch(
      `http://wordpress.test/wp-json/wp/v2/posts?categories=${id}`
    );
    const response2 = await response.json();
    setStato(response2);
  };

  const [stato, setStato] = useState([]);

  useEffect(() => {
    call();
  }, [Params]);

  return (
    <div className="container d-flex flex-wrap justify-content-around  text-center">
      {stato.map((el) => {
        return (
          <div className="card col-3 my-3" key={el.id}>
            <div className="card-body">
              <h5
                className="card-title"
                dangerouslySetInnerHTML={{
                  __html: el.title.rendered,
                }}
              ></h5>
              <p
                className="card-text"
                dangerouslySetInnerHTML={{
                  __html: el.excerpt.rendered.slice(0, 100) + "..",
                }}
              ></p>
              <a href="#" className="btn btn-primary">
                Continua a leggere..
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
