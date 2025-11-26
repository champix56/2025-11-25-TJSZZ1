import React from "react";
import { Link } from "react-router";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div>Bonjour et bienvenue voic les action possible sur ce site :</div>
      <ul>
        <li>
          <Link to={"/edit"}>Nouveau</Link>
        </li>
         <li>
          <Link to={"/thumbnail"}>thumbnail</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
