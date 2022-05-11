import React from 'react'
import CollectionCard from "./CollectionCard.js"
import "./Punklist.css"



const Punklist = ({ punkListData, setSelectedPunk }) => {

	return (

		<div className="punkList">
			{punkListData.map(punk => (

				<div onClick = {() => setSelectedPunk(punkListData.length - 1 - punk.token_id) } >
					<CollectionCard 
						key={ punk.token_id }
						id={ punk.token_id }
						name={ punk.name }
						traits={ punk.traits }
						image={ punk.image_original_url }
					/>
				</div>

			))}
		</div>
		
	);

}

export default Punklist