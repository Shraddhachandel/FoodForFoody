const About = () => {
    return (
        <div className="flex flex-col items-center ">
            <img 
            src="about.jpg"
            alt="About image"  />
            <div className=" ">
            <h1 className="bg-pink-300 text-2xl text-center">Welcome to foody </h1>
            <p> Foody is a food ordering web application built with React.js. Our goal
            is to provide a seamless and delightful experience for users to
            explore, order, and enjoy their favorite meals.</p>
            <p>Whether you're craving a delicious pizza, a healthy salad, or a
            satisfying dessert, Foody has you covered. Explore our menu and place
            your order with just a few clicks.</p>
        </div>
        </div>
    )
}
export default About;