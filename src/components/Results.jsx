import React from 'react'
import '/Users/USER/movie-db/src/components/styles/Results.css';

import Result from './Result'

function Results ({ results, openPopup }) {
	return (
		<section className="results">
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}

export default Results