import logo from './logo.svg';
import './App.css';
import Mobile from './components/Mobiles/Mobile';
import Todo from './components/Todos/Todo';

function App() {
  return (
    <div className="App">
      <div className='page-container'>
        <Blog name="Home" author="Home"></Blog>
        <Blog name="Blog" author="Blog"></Blog>
        <Blog name="About" author="About"></Blog>
      </div>
      <article className='blog-container'>
        <h2>Welcome My article.</h2>
        <p style={{color:'white', padding:'10px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, quo.</p>
      </article>
      <div>
        <Mobile></Mobile>
      </div>
      <div>
       <Todo></Todo>
      </div> 
    </div>
  );
}
function Blog (props){
  return (
    <div className='my-page'>
      <h4>Name: {props.name}</h4>
      <a href="/home"> {props.author}</a>
    </div>
  )
}
export default App;
