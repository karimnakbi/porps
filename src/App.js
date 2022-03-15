import './App.css';
import Props_File from './Profile/Props_File';
import Image from './Profile/Image';

function App() {
  const fullName = "karim nakbi"
  const bio = "I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript; dabbling with Python and Ruby; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well"
  const profession = "Full stack Web Developer"

      function getName(){
        alert(fullName)
      }
  return (
    <div className="App">
      <Props_File fullName={fullName} bio={bio} profession={profession} getName={getName}/> 
    
    
      <Image><img className='developer' src='./imaage.webp' alt='kkk'/></Image>
    </div>
  );
}

export default App;
