

const Item = ({ name, quantity, category }) => {
    return (
      <li>
        <div>
          <h3>{name}</h3>
          <p >{category}</p>
        </div>
        <span >{quantity}</span>
      </li>
    );
  };
  
  export default Item;