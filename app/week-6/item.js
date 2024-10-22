

const Item = ({ name, quantity, category }) => {
    return (
      <li>
        <div>
          <h3>{name}</h3>
          <p >{category}</p>
          <span >{quantity}</span>
        </div>
        
      </li>
    );
  };
  
  export default Item;