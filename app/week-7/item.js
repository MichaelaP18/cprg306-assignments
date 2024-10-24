

const Item = ({ name, quantity, category }) => {
    return (
      <li>
        <div className="bg-blue-200 m-4 rounded">
          <h3>{name}</h3>
          <p className="text-sm italic">{quantity}, in {category}</p>
        </div>
        
      </li>
    );
  };
  
  export default Item;