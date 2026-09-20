import espressoImg from "../assets/images/cafes/freddo-espresso.png";
import cappuccinoImg from "../assets/images/cafes/freddo-cappuccino.png";
import juiceImg from "../assets/images/cafes/orange-juice.png";
import smoothieImg from "../assets/images/cafes/acai-smoothie.png";
import matchaImg from "../assets/images/cafes/matcha.png";
import croissantImg from "../assets/images/cafes/croissant.png";
import toastImg from "../assets/images/cafes/toast.png";
import bowlImg from "../assets/images/cafes/acai-bowl.png";
import tortillaImg from "../assets/images/cafes/tortilla.png";

const menuItems = [
    {
        id: 1,
        name: "Freddo Espresso",
        category: "Coffee",
        price: 3.20,
        image: espressoImg
    },
    {
        id: 2,
        name: "Freddo Cappuccino",
        category: "Coffee",
        price: 3.50,
        image: cappuccinoImg
    },
    {
        id: 3,
        name: "Fresh Orange Juice",
        category: "Drinks",
        price: 3.00,
        image: juiceImg
    },
    {
        id: 4,
        name: "Acai Smoothie",
        category: "Drinks",
        price: 3.80,
        image: smoothieImg
    },
    {
        id: 5,
        name: "Matcha",
        category: "Drinks",
        price: 3.80,
        image: matchaImg
    },
    {
        id: 6,
        name: "Turkey & Cheese Toast",
        category: "Snacks",
        price: 2.80,
        image: toastImg
    },
    {
        id: 7,
        name: "Butter Croissant",
        category: "Snacks",
        price: 2.20,
        image: croissantImg
    },
    {
        id: 8,
        name: "Acai Bowl",
        category: "Snacks",
        price: 4.50,
        image: bowlImg
    },
    {
        id: 9,
        name: "Chicken Tortilla",
        category: "Snacks",
        price: 3.70,
        image: tortillaImg
    }
];

export default menuItems;