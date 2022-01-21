import './App.css';
import TopUsers from './components/TopUsers';
import Userlist from './components/Userlist';
function App() {
	return (
		<div className="App">
			<section className="main-content">
				<div class="container">

					<h1>Leaders</h1>
					<TopUsers />
					<Userlist />
				</div>
			</section>
		</div>
	);
}



export default App;
