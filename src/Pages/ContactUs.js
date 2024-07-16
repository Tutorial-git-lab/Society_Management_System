const Contact = () => {
  return (
    <>
      <div className="container d-flex-col my-0">
        <div className="d-flex align-item-center justify-content-center w-100 vh-40 bg-silver ">
          <div className="form_container p-5 rounded bg-white text-dark w-100 my-1">
            <form>
              <div className="form-group mb-2 my-3">
                <label htmlFor="name" className="form-label col-4 text-end">
                  <strong>Name:</strong>
                </label>
                <input
                  type="email"
                  className="col-8"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group mb-2 my-3">
                <label htmlFor="email" className="form-label col-4 text-end">
                  <strong>Email:</strong>
                </label>
                <input
                  type="email"
                  className="col-8"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group  mb-2 my-3">
                <label htmlFor="password" className="form-label col-4 text-end">
                  <strong> Password:</strong>
                </label>
                <input
                  type="password"
                  className="col-8"
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group mb-2 my-3">
                <label htmlFor="mobile" className="form-label col-4 text-end">
                  <strong>Mobile:</strong>
                </label>
                <input
                  type="text"
                  className="col-8"
                  placeholder="Enter your Mobile"
                />
              </div>
              <div className="form-group my-3 ms-5">
                <input type="checkbox" />
                <label htmlFor="check">Remember me</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
