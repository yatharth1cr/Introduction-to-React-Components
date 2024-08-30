import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Articles from "./components/articles";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;

// function Header() {
//   return (
//     <div>
//       <header className="flex">
//         <h1>Logo</h1>
//         <ul className="flex">
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </header>
//     </div>
//   );
// }

// function Hero() {
//   return (
//     <img
//       className="hero-img"
//       src="https://plus.unsplash.com/premium_photo-1713290941442-04b4c16e12a0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
//       alt="hero-img"
//     />
//   );
// }

// function Article() {
//   return (
//     <div className="article-card">
//       <img
//         src="https://plus.unsplash.com/premium_photo-1712000450456-e8f8c68bab76?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
//         alt="article-img"
//       />
//       <h2>Article title</h2>
//     </div>
//   );
// }

// function Articles() {
//   return (
//     <section className="articles-parent">
//       <h1>Articles</h1>
//       <div className="flex">
//         <Article />
//         <Article />
//         <Article />
//         <Article />
//         <Article />
//         <Article />
//       </div>
//     </section>
//   );
// }

// function Footer() {
//   return (
//     <footer className="flex">
//       <h2>2020 All Rights Reserved</h2>
//       <ul className="flex">
//         <li>Facebook</li>
//         <li>Twitter</li>
//         <li>Instagram</li>
//       </ul>
//     </footer>
//   );
// }
