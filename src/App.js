import './App.css';
// import TopUsers from './components/TopUsers';
import Userlist from './components/Userlist';
// import { useState, useEffect } from 'react';

function App() {
	// const [top_user, setTopUser] = useEffect(null);
	return (
		<div className="App">
			<section className="main-content">
				<div class="container">

					<h1>Leaders</h1>
					{/* <TopUsers topuser = {top_user}/> */}
					<Userlist />
				</div>
			</section>
		</div>
	);
}



export default App;
