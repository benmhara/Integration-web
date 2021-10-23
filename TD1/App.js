import logo from './logo.svg';
import './App.css';
import Commentaire from './Composants/Commentaire';
import Pictogramme from './Composants/Pictogramme';

function App() {
  const t = "Bonne découverte des composants React Components!!!";

  return (
    <div className="col-6 offset-3">
      <div className="card">
        <div className="card-block">
          <div className="row">
            <div className="col-2">
              <img src="https://thomas-bart.com/wp-content/uploads/2017/03/developper-1680x1201.jpg"  className="rounded float-left" className="img-thumbnail" width="80" height="70" />
            </div>
            <div className="col-10 profile-row">
              <div className="row">
                <a href="#"><h1> Débuter avec React </h1></a>
              </div>
            </div>
          </div>
          <p>{t}</p>
      
          <div>
            <Pictogramme text={t} />
          </div>
        </div>
  
        <div className="card-footer text-muted">
         <Commentaire />
        </div>
  
      </div>
    </div>
      );
}

export default App;
