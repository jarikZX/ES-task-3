import { useState } from 'react';
import { 
  CreateCardbutton,
  SaveCardbutton
}  from './components/manageButton/managebutton.jsx';
import {
  CompetenceButton,
  CompetenceButtonMore,
  CompetenceButtonLess,
} from "./components/button/button.jsx";
import CompyCard from './components/card/сompetencyCard';
import СompData from './competenciesData';
import './App.css'

const defaultStateForm = {index: '', title: '', description: '', level: '' };

function App() {
  const [showComp, setShowComp] = useState('all');
  const [formData, setFormData] = useState(defaultStateForm);
  const [savedData, setSavedData] = useState(СompData)


  const toggleComp = () => {
    if(showComp === false) {
      setShowComp('all');
    }else{
      setShowComp(!showComp);
    }
    };
  const showOver = () => {
    if(showComp === false) {
      setShowComp('max');
    }else{
      setShowComp(!showComp);
    }
  }
  const showMin = () => {
    if(showComp === false) {
      setShowComp('min');
    }else{
      setShowComp(!showComp);
    }
  }

  const showCreateFrom = () => {
    if(showComp === false) {
      setShowComp('form');
    }else{
      setShowComp(!showComp);
    }
  }


  const inputChange = (e) => {
    const {name, value} = e.target;
    setFormData(st => ({ ...st, [name]: value}));
  }

  const handleSave = (e) => {
    setSavedData([...savedData, formData]);
    setFormData(defaultStateForm);
    e.preventDefault();
  }

  const handleDelete = (index) => {
    const newData = savedData.filter((e) => e.index !== index)
    setSavedData(newData);
    console.log(savedData)
    console.log(index)
  }
  
  return (
    <>
    <div>
        {
          (showComp === 'form') && 
            (
          <form>
            Заголовок: <input type="text" name="title" value={formData.title} onChange={inputChange}/>
            Описание: <input type="text" name="description" value={formData.description} onChange={inputChange}/>
            Уровень: <input type="text" name="level" value={formData.level} onChange={inputChange}/>
            <SaveCardbutton  onClick={handleSave}/>
          </form>
        )
      }
    </div>
    <CreateCardbutton onClick={showCreateFrom} showComp={showComp === 'form'}/>
    <div>
      <CompetenceButtonLess onClick={showMin} showComp={showComp === 'min'} />
      <CompetenceButton onClick={toggleComp} showComp={showComp === 'all'} />
      <CompetenceButtonMore onClick={showOver} showComp={showComp === 'max'} />
    </div>
        <div>
        {
          savedData.map((element, index) => {
            const show = (((showComp === 'max') && element.level > 50) || ((showComp === 'min') && element.level <= 50) || (showComp === 'all') );
            if (show) {
            return (
              <CompyCard
              key={element.index}
              title={element.title}
              description={element.description}
              level={element.level}
              onDelete={() => handleDelete(element.index)}
            />
            );
          }
        })}
        </div>
    </>
  )
}

export default App
