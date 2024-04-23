function CompetencyCard({ title, description, level, onDelete }) {
  return (
    <div className="competency-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="progress-bar" style={{ width: `${level}%` }}>
        <span>{`${level}%`}</span>
      </div>
      <button onClick={onDelete}>удалить</button>
    </div>
  );
}

export default CompetencyCard;