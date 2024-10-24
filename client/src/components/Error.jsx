import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <h2 className="header" style={{ color:"white", textAlign:"center"}}>404</h2>
          <h4 style={{ color:"white", textAlign:"center"}}>Sorry! Page not found</h4>
          <p style={{ color:"white", textAlign:"center"}}>
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
        </div>
      </section>
    </>
  );
};