function Slice({num,title,icon,weeklySummery,monthlySummery}) {
  return (
    <div className="slice">
      <div className="box-top">
        <div className="box-content">
          <p>{num}</p>
          <p>{title}</p>
        </div>
        <i className={icon}></i>
      </div>
      <div className="box-down">
        <p>{weeklySummery}</p>
        <p>{monthlySummery}</p>
      </div>
    </div>
  );
}

export default Slice;
