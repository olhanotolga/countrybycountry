import {useState, useRef, useEffect} from 'react';

const useShown = (initialShown) => {
	const [isShown, setIsShown] = useState(initialShown);
	const ref = useRef(null);

	const handleClickOutside = e => {
		if (ref.current && !ref.current.contains(e.target)) {
			setIsShown(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		}
	}, []);

	return { ref, isShown, setIsShown };
}

export default useShown;