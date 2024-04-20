import React, { useState } from 'react';
import './List.css';
import Item from '../Item/Item';
import MyButton from "../MyButton/MyButton"



export const List = () => {


  const [data, setTexts] = useState([
    {id: 0, title: "JavaScript", description: "хорошая база", level: 66},
    {id: 1, title: "React", description: "могу сделать простой фронт для веб приложения", level: 42},
    {id: 2, title: "Node js", description: "могу сделать простой бэк для веб приложения", level: 52},
    {id: 3, title: "Базы данных", description: "Есть опыт проектирования баз данных", level: 35},
    // 'JavaScript: хорошая база',
    // 'React: могу сделать простой фронт для веб приложения',
    // 'Node js: могу сделать простой бэк для веб приложения',
    // 'Есть опыт проектирования баз данных',
  ]);

  const [filteredCompetents, setFilteredCompetents] = useState(data);

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newLevel, setNewLevel] = useState('');

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
      level: newLevel,
    };
    setTexts([...data, newItem]);
    setFilteredCompetents([...filteredCompetents, newItem]);
    setNewTitle('');
    setNewDescription('');
    setNewLevel('')
  };

  const handleShowMore = () => {
    const filteredCompetents = data.filter(competent => competent.level > 50);
    setFilteredCompetents(filteredCompetents);
  };
  
  const handleShowLess = () => {
    const filteredCompetents = data.filter(competent => competent.level <= 50);
    setFilteredCompetents(filteredCompetents);
  };
  
  const handleShowAll = () => {
    setFilteredCompetents(data);
  };

  const handleDeleteItem = id => {
    const updatedData = data.filter(item => item.id !== id);
    setTexts(updatedData);
    setFilteredCompetents(updatedData);
  };


  return (
    <div>
      <div className="competents-buttons">
        <MyButton onClick={handleShowMore}>Больше 50%</MyButton>
        <MyButton onClick={handleShowLess}>Меньше 50%</MyButton>
        <MyButton onClick={handleShowAll}>Показать все</MyButton>
      </div>

      <div className="add-item">
      <input
        type="text"
        placeholder="Название"
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Описание"
        value={newDescription}
        onChange={e => setNewDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Уровень владения"
        value={newLevel}
        onChange={e => setNewLevel(e.target.value)}
      />
      <MyButton onClick={handleAddItem}>Добавить</MyButton>
    </div>

       {filteredCompetents.map(item => (
          <Item
            key={item.id}
            title={item.title}
            description={item.description}
            level={item.level}
            id={item.id}
            onDelete={handleDeleteItem}
          />
        ))}
    </div>
    
    
    
  );
};

export default List;