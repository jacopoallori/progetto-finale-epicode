function Footer() {
  return (
    <footer className="bg-light my-5 p-5 d-flex flex-wrap justify-content-around text-center">
      <div className="col-3">
        <h5>Chi siamo</h5>
        <p>
          Epicode School nasce con l'obbiettivo di rivoluzionare la formazione
          in ambito tech.
        </p>
      </div>
      <div className="col-3">
        <h5>Ti piace ciò che vedi? Condividilo con i tuoi amici!</h5>
        <i className="fa fa-facebook p-2" aria-hidden="true"></i>
        <i className="fa fa-linkedin p-2" aria-hidden="true"></i>
        <i className="fa fa-twitter p-2" aria-hidden="true"></i>
        <p>
          <small>&copy;2021 Epicode Web Developer school</small>{" "}
        </p>
      </div>
      <div className="col-3">
        <h5>Iscriviti alla nostra newsletter</h5>
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="input-group-3"
              name="input-group-3"
            />
            <div className="input-group-append ps-2">
              <button className="btn btn-primary" type="button" id="button-3">
                Iscriviti!
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
