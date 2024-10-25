import './App.css';

const skills = [
  {id:1,
    skill:"React",
    emoji:"🥳"
  },
  {
    id:2,
    skill:"Machine Learning",
    emoji:"🪙"
  },
  {
    id:3,
    skill:"Web development",
    emoji:"💸"
  },
  {
    id:4,
    skill:"Deep Learning",
    emoji:"✌️"
  },
  {
    id:5,
    skill:"AI",
    emoji:"🦾"
  }
];

function App() {
  return (
    <div className ="container">
      <div>
        <img src="image.jpg" alt="img"/>
      </div>
      <div className="info">
        <p>
          <b>bhuvanesh_kp</b>
        <br/>
        Hello I am react developer I am going to expore more in react,
        I know Machine learning and deep learning and AI 
        by fields of interest are NLP and computer vision I am facinated by its growth and potential</p>
        
        <div className="skill-list">{skills.map(value=>(<Dispaly value={value} key={value.id}></Dispaly>))}</div>

      </div>
    </div>
  );
}

function Dispaly({value}){
  return(
    <div className="data">
        {value.skill}
        {value.emoji}
    </div>
  );
}

export default App;
