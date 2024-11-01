export interface Todo {
	id: string;
	title: string;
	completed: boolean;
}

export interface CreateTodo {
	title: string;
}

export interface UpdateTodo {
	title?: string;
	completed?: boolean;
}

export const PREFIX = "v1:todo:";

export const getTodos = async (KV: KVNamespace): Promise<Todo[]> => {
	const list = await KV.list({ prefix: PREFIX });
	const todos: Todo[] = [];

	for (const key of list.keys) {
		const value = await KV.get<Todo>(key.name, "json");
		if (value) {
			todos.push(value);
		}
	}

	return todos;
};