import { GPSLocation } from '@interfaces/open-weather-api/location'
import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	limit,
	query,
	setDoc,
	where,
} from 'firebase/firestore'
import { toast } from 'react-toastify'
import { firestore } from '../firebase/clientApp'

export const getFavourites = async () => {
	const querySnapshot = await getDocs(collection(firestore, 'favourites'))
	const favourites: GPSLocation[] = []

	querySnapshot.forEach((doc) => {
		favourites.push({
			id: doc.id,
			...doc.data(),
		} as GPSLocation)
	})

	return favourites
}

export const getFavouriteByCoords = async (lat: number, lon: number) => {
	const q = query(
		collection(firestore, 'favourites'),
		where('lat', '==', lat),
		where('lon', '==', lon),
		limit(1)
	)

	const querySnapshot = await getDocs(q)
	let id = ''
	querySnapshot.forEach((doc) => {
		id = doc.id
	})

	return id
}

export const addFavourite = async (location: GPSLocation) => {
	// get the current timestamp
	const timestamp: string = Date.now().toString()
	// create a pointer to our document
	const _favourites = doc(firestore, `favourites/${timestamp}`)

	try {
		//add the document
		await setDoc(_favourites, location)
	} catch (error) {
		toast.error('An error occurred while adding favourite')
	}
}

export const deleteFavourite = async (id: string) => {
	try {
		await deleteDoc(doc(firestore, 'favourites', id))
	} catch (error) {
		toast.error('An error occurred while deleting favourite')
	}
}
