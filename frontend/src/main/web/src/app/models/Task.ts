export class Task {
	id: string;
	description: string;
	createDate: string;
	done: boolean;

	constructor() {}

	getId() {
		return this.id;
	}

	getDescription() {
		return this.description;
	}

		getCreateDate() {
		return this.createDate;
	}

	getDone() {
		return this.done;
	}

	setId(id: string) {
		this.id = id;
	}

	setDescription(description: string) {
		this.description = description;
	}

	setDone(done: boolean) {
		this.done = done;
	}

		setCreateDate(createDate: string) {
		this.createDate = createDate;
	}
}