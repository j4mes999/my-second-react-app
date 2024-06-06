import { getImageUrl } from "./utils.js";

export default function Profile({name, imageId, profession, awards, discovered}) {
    return (
      <>
       <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId)}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b> 
            {awards.join(', ')}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </>
    );
}