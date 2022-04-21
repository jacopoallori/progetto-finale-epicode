import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pages() {
  const Params = useParams();
  const { a } = Params;

  const call = async () => {
    const response = await fetch(
      `http://wordpress.test/wp-json/wp/v2/pages/?slug=${a}`
    );
    const response2 = await response.json();
    setStato(response2);
  };

  const [stato, setStato] = useState([]);
  console.log(stato);

  useEffect(() => {
    call();
  }, [Params]);

  return (
    <>
      {stato.map((el) => {
        return (
          <div className="text-center m-5 " key={el.id}>
            <h1>{el.title.rendered}</h1>
            <p
              dangerouslySetInnerHTML={{
                __html: el.excerpt.rendered,
              }}
            ></p>
          </div>
        );
      })}
    </>
  );
}

export default Pages;
