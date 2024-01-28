import React from 'react'
import { StyledSearchBr } from '../../styledComponent/home/StyledHome'
import { FcSearch } from "react-icons/fc";
export default function SearchBar() {
  return (
    <>
    <form action="">
    <StyledSearchBr>
      <input type="text" name="service"  className='input-border' placeholder='Service' />
      <div> 
      <select id="ice-cream-flavors" className='input-border'>
        <option value="x  ">category</option>
        <option value="Coconut">Coconut</option>
        <option value="Mint">Mint</option>
        <option value="Strawberry">Strawberry</option>
        <option value="Vanilla">Vanilla</option>
      </select>
      </div>
     <div>
      <select id="ice-cream-flavors">
        <option value="">city</option>
        <option value="Coconut">Chocolate</option>
      
      </select>
      </div>
      <div className='search'>
        <button type='submit'>
         <FcSearch style={{fontSize:"25px"}}/>
        </button>
      </div>
    </StyledSearchBr>


    </form>
     </>
  )
}
