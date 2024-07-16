import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero magni
          dolores nostrum quas quo adipisci obcaecati neque? Aut, voluptatibus
          eum eaque recusandae modi distinctio eligendi. Non tempora illum
          deleniti ipsam reiciendis ea sint commodi excepturi nesciunt velit
          esse, quos inventore quisquam perferendis consequatur animi
          repellendus dicta possimus hic quo? Accusamus?
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid
          reprehenderit sequi ab perspiciatis earum alias illo veniam itaque in,
          animi quisquam tempora dolorum voluptatibus nobis adipisci, rem odit
          commodi nisi quis illum! Animi, reiciendis.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, nemo?</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
