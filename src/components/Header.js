import React from "react";
const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar mb-3 pt-3 pb-3 py-0  text-sm-center text-md-left">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>

        <select name="dropdown" class= "commodityA ">
                 <option value="Commodity 1" selected hidden>Commodity 1</option>
                 <option value="Option 1">Option 1</option>
                 <option value="Option 2">Option 2</option>
                 <option value="Option 3">Option 3</option>
                 <option value="Option 4">Option 4</option>
                 <option value="Option 5">Option 5</option>
                 <option value="Option 6">Option 6</option>
              </select>
              <select name="dropdown" class= "commodityB">
                 <option value="Commodity 2" selected hidden>Commodity 2</option>
                 <option value="Option 1">Option 1</option>
                 <option value="Option 2">Option 2</option>
                 <option value="Option 3">Option 3</option>
                 <option value="Option 4">Option 4</option>
                 <option value="Option 5">Option 5</option>
                 <option value="Option 6">Option 6</option>
              </select>
      </div>
    </nav>
  );
};
Header.defaultProps = {
  branding: "Real-Time cryptocurrency graph"
};
export default Header;