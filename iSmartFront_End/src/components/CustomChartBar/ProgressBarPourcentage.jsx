const ProgressBarPourcentage = ({ bgcolor, progress, height }) => {
  const parentDivStyle = {
    height: height,
    width: '95%',
    backgroundColor: 'whitesmoke',
    borderRadius: 40,
    margin: 30
  };

  const childDivStyle = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 20,
    textAlign: 'right',
    transition: 'width 2s ease-in-out' // Ajout de la transition
    
  };

  const progressTextStyle = {
    padding: 10,
    color: 'black',
    fontWeight: 900
  };

  return (
    <div style={parentDivStyle}>
      <div style={childDivStyle}>
        <span style={progressTextStyle}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBarPourcentage;
