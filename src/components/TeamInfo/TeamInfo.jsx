import data from "./data.json";

const TeamInfo = () => {
  return (
    <div>
      <h1>TeamInfo</h1>
      <ul>
        {data.map(({ photo, name, position, about }) => (
          <li>
            <img width={"300px"} src={photo} alt={name} />
            <h2>{name}</h2>
            <span>{position}</span>
            <p>{about}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TeamInfo;
