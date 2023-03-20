export const statusMap = {
	init: {
		id: "start",
		status: "default",
	},
	processing: {
		id: "process",
		status: "warning",
	},
	completed: {
		id: "completed",
		status: "success",
	},
}

// type IStatus = "init" | "processing" | "completed"
type IStatus = keyof typeof statusMap;

export interface IInfo {
  name: string;
  age: string;
  status: IStatus;
}

export function transformI18KeyMap(map, parentKey = "", record = {}) {
	for (const [key, value] of Object.entries(map)) {
		const targetKey = parentKey ? `${parentKey}.${key}` : key
		if (typeof value === "object") {
			transformI18KeyMap(value, parentKey, record)
			continue
		}
		record[targetKey] = value
	}
	return record
}
