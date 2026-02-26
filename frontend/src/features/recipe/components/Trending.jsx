import React from 'react'
import TrendingProduct from './TrendingProduct'
import trending1  from "../../../../public/assets/trending-img-1.jpg";
import trending2  from "../../../../public/assets/trending-img-2.jpg";
import trending3  from "../../../../public/assets/trending-img-3.jpg";
import  trending4  from "../../../../public/assets/trending-img-4.jpg";




const Trending = () => {

const recipes = [
  {
    image: trending1,
    category: "Dessert",
    name: "Chocolate Lava Cake",
    description:
      "A rich and gooey chocolate lava cake with a molten center, perfect for quick indulgence.",
    authorImg: "https://i.pinimg.com/736x/f1/d0/27/f1d02703d045dfb4fdfd9136c7da9507.jpg",
    authorName: "Ananya Sharma",
  },
  {
    image: trending2,
    category: "Breakfast",
    name: "Classic Avocado Toast",
    description:
      "Crispy toasted bread topped with creamy avocado, chili flakes, and a hint of lemon.",
    authorImg: "https://i.pinimg.com/736x/f1/d0/27/f1d02703d045dfb4fdfd9136c7da9507.jpg",
    authorName: "Rohit Verma",
  },
  {
    image: trending3,
    category: "Lunch",
    name: "Grilled Chicken Salad",
    description:
      "Healthy grilled chicken served over fresh greens with a light vinaigrette dressing.",
    authorImg: "https://i.pinimg.com/736x/f1/d0/27/f1d02703d045dfb4fdfd9136c7da9507.jpg",
    authorName: "Priya Mehta",
  },
  {
    image: trending4,
    category: "Dinner",
    name: "Paneer Butter Masala",
    description:
      "Soft paneer cubes cooked in a creamy, mildly spiced tomato-based gravy.",
    authorImg:"https://i.pinimg.com/736x/f1/d0/27/f1d02703d045dfb4fdfd9136c7da9507.jpg",
    authorName: "Sourav Das",
  },
];


  return (
    <div className='mt-15'>
           <h2 className='custom-font text-3xl font-semibold'>Trending Now</h2>
           <div className='flex justify-between items-center mt-10 flex-wrap'>
             {recipes.map((item,index)=><TrendingProduct key={index} item={item} />)}
           </div>
    </div>
  )
}

export default Trending