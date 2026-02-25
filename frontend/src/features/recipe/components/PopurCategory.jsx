import React from 'react'
import Category from './Category'
import homeImgTwo from "../../../../public/assets/home-img-2.jpg";
import homeImgThree from "../../../../public/assets/home-img-3.jpg";
import dinnerRecipe from "../../../../public/assets/dinner-recipe.jpg";
import snackRecipe from "../../../../public/assets/snack-recipe.jpg";
import dessertRecipe from "../../../../public/assets/dessert-recipe.jpg";
import appetizerRecipe from "../../../../public/assets/appetizer-recipe.jpg";



const PopurCategory = () => {

  
  const categoryData = [
    {
      name:"Breakfast",
      img: homeImgTwo
    },
    {
      name:"Lunch",
      img:homeImgThree,

    },
    {
      name:"Dinner",
      img:dinnerRecipe,
    },
    {
      name:"Snack",
      img:snackRecipe
    },
    {
      name:"Dessert",
      img:dessertRecipe,

    },

    {
      name:"Appetizer",
      img:appetizerRecipe
    }


  ]


  return (
    <div className='mt-15'>
      <h2 className='custom-font text-3xl font-semibold'>Popular Categories</h2>
      <div className='flex justify-between items-center mt-10 flex-wrap'>
            {
              categoryData.map((item,index)=>
                <Category key={index} item={item}/>
              )
            }
             
      </div>
    </div>
  )
}

export default PopurCategory