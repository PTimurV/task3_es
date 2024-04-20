import "./Item.css"
import MyButton from "../MyButton/MyButton"

const Item = ({title,description, level, onDelete, id})=>{
   return <div className="item">
        <h3>{title}</h3>
        <div>{description}</div>
        <div>Уровень освоения = {level}%</div>
        <MyButton onClick={() => onDelete(id)}>Удалить</MyButton>
    </div>
}
export default Item