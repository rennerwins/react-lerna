import React from 'react'
import './ExploreContainer.css'
import { HelloWorld } from '@module/components'

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
	return (
		<div className='container'>
			<strong>Ready to create an app?</strong>
			<HelloWorld />
			<p>
				Start with Ionic{' '}
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://ionicframework.com/docs/components'
				>
					UI Components
				</a>
			</p>
		</div>
	)
}

export default ExploreContainer
