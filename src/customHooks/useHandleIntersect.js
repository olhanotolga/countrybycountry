import {useState} from 'react';

const useHandleIntersect = (countriesInfo, displayedCountries, displayStart) => {
	const [newCountriesBatch, setNewCountriesBatch] = useState(displayedCountries);
	const [newStartIndex, setNewStartIndex] = useState(displayStart);

	const handleIntersect = entries => {

		const loadMore = () => {
			// change the start index of the next chunk — IF the new index is smaller than length
			const totalCountries = countriesInfo.length;
			const startIndex = displayStart + 20;
			
			if (startIndex < totalCountries) {
				setNewStartIndex(startIndex);
				
				//check whether the next chunk fits within the standart 20-piece chunk. if not, it's the rest of the countries array
				const endIndex = Math.min(startIndex + 20, totalCountries);
				const newChunk = countriesInfo.slice(0, endIndex);
	
				setNewCountriesBatch(newChunk);
			}
		};
	
		if (entries[0].isIntersecting) {
			loadMore()
		};
	};

	return {handleIntersect, newCountriesBatch, newStartIndex};
}

export default useHandleIntersect;