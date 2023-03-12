

export const statusMap = {
  init: {
    id: 'start',
    status: 'default'
  },
  processing: {
    id: 'process',
    status: 'warning'
  },
  completed: {
    id: 'completed',
    status: 'success'
  }
}

// type IStatus = "init" | "processing" | "completed"
type IStatus = keyof typeof statusMap

export interface IInfo {
  name: string;
  age: string;
  status: IStatus
}