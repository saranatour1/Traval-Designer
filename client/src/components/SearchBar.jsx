// eslint-disable-next-line no-unused-vars
import React from "react";
import SeacrhIcon from "./Search Bar Components/SeacrhIcon";
import SearchLabel from "./Search Bar Components/SearchLabel";
import InputSearch from "./Search Bar Components/InputSearch";
import { useState } from "react";
import SearchButton from "./Search Bar Components/SearchButton";

function SearchBar() {
  const [search , setSearch] =useState('');
    console.log(search);

    const handleSearch =() => {

    }


  return (
  <div className="constainer flex justify-center  h-full w-full mx-auto mt-12">
  <form className="w-96">   
      <SearchLabel labelText='Search'/>
    <div className="relative">
        <SeacrhIcon />
        <InputSearch id='default-search' type={'search'} placeholder={'search for a place here'} onChangeProp={(txt)=>setSearch(txt)}/>
        <SearchButton btnTxt={'Search'} onSubmitProp={handleSearch()} />
    </div>
      </form> 
  </div>


  )
}

export default SearchBar;