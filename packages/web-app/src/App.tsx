import React from 'react'
import logo from './logo.svg'
import './App.css'
import { HelloWorld } from '@module/components'

function App() {
	const [count, setCount] = React.useState(0)

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.tsx</code> and save to {count}.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<HelloWorld />
			</header>
		</div>
	)
}

export default App
