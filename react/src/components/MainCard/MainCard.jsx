import avatar from '../../assets/avatar.jpg'
import './MainCard.css';
export const MainCard =()=>{
    return (
      <div>
          <div className='avatar'> <img src={avatar} className="avatar" /> </div>
          <div>  
            <p className="fio">
              ФИО: Поликарпов Тимур Валерьевич
            </p>
           </div>
      </div>
    )
  }


export default MainCard