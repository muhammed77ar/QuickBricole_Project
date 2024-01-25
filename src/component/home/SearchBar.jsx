import React from 'react'
import { StyledSearchBr } from '../../styledComponent/StyledHome'
import { FcSearch } from "react-icons/fc";
export default function SearchBar() {
  return (
    <>
    <form action="">
    <StyledSearchBr>
      <input type="text" name="service"  className='input-border' placeholder='Service' />
      <div> 
       <input list="ice-cream-flavors" type='text' name="ice-cream-choice"  placeholder='category' className='input-border'/>
      <datalist id="ice-cream-flavors">
        <option value="settat"></option>
        <option value="Coconut"></option>
        <option value="Mint"></option>
        <option value="Strawberry"></option>
        <option value="Vanilla"></option>
      </datalist>
      </div>
     <div>
       <input list="ice-cream-flavors" type='text'  name="ice-cream-choice" placeholder='city or location' />
      <datalist id="ice-cream-flavors">
        <option value="Chocolate"></option>
        <option value="Coconut"></option>
        <option value="Mint"></option>
        <option value="Strawberry"></option>
        <option value="Vanilla"></option>
      </datalist>
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
