import { TeamComponent } from ".";

const ContainerComponent = ({ title, data, type }) => {
  const filterData = data.filter((data) => data["type"] == type);
  return (
    <div className="container-core">
      <div className="row">
        <div className="section-title">
          <h2>{title}</h2>
        </div>
      </div>

      <div className={`team row-core ${filterData.length > 4 ? "" : "gap"}`}>
        {filterData.map((dataMember, index) => (
          <TeamComponent key={index} {...dataMember} />
        ))}
      </div>
    </div>
  );
};

export default ContainerComponent;
