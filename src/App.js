import './App.css';
import TopUsers from './components/TopUsers';
import Userlist from './components/Userlist';
import { useState } from 'react';

function App() {
	const [top_user, setTopUser] = useState(null);
	return (
		<div className="App">
			<section className="main-content">
				<div class="container">

					<h1>Leaders</h1>
					<TopUsers topuser = {top_user}/>
					<Userlist setTopUser= {setTopUser}/>
				</div>
			</section>
		</div>
	);
}



export default App;
