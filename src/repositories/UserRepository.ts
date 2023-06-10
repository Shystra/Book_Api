import { User } from "../modules";
interface ICreate {
	name: string;
	email: string;
	password: string;
}


class UserRepository {
	async findByEmail(email: string){
		const result = await User.findOne({ email })
		return result
	}
	async create({ name, password, email }: ICreate){
		const result = await User.create({
			name,
			password,
			email,
		})
		return result
	}
}

export { UserRepository }
