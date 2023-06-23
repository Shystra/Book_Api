import { Books } from "../models"

interface ICreateBook{
				name: string
				author: string
				company: string
				read: boolean
				dateRead: Date | null
				description: string
				rate: number
				user_id: string
}
interface IBookPaginate{
				user_id: string,
				page: number,
				size: number
}
class BooksRepository {
	async create({
				name,
				author,
				company,
				read,
				dateRead,
				description,
				rate,
				user_id,

	}:ICreateBook){
		// Books
		const result = await Books.create({
				name,
				author,
				company,
				read,
				dateRead,
				description,
				rate,
				user_id
		})
		return result

	}

	async	findByUserId(user_id: string){
		const result = await Books.find({ user_id })
		return result
	}

	async findPaginateByUserId({user_id, page, size}: IBookPaginate){
		const result = Books.find({ user_id })
		.skip((page - 1)*size)
		.limit(size).exec()
		return result
	}







}


export { BooksRepository }
