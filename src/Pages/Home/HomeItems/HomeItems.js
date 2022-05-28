import React from 'react';
import { MdInventory } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import useAllItems from '../../../Hooks/useAllItems';
import Item from '../../Inventory/Item/Item';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import './HomeItems.css';

const HomeItems = () => {
  const navigate = useNavigate();
  const [items] = useAllItems();

  if(items.length === 0){
    return <LoadingSpinner />;
  }
  return (
    <div>
      <h2 className='mt-5 text-center fs-2 fw-bold mb-5' style={{color:'tomato'}}>INVENTORY</h2>
      <div className='container row  g-3 mt-5'>
        {
          items.slice(0, 6).map(item => <Item key={item._id} item={item} />)
        }
      </div>
    <div className=''>
      <button onClick={() => navigate('/manageInventory')} style={{backgroundColor: 'goldenrod', color:'white'}} className='btn rounded border d-block mx-auto mt-4 py-3 w-50'>Manage Inventories <MdInventory /> </button>
    </div>
    </div>
  );
};

export default HomeItems;