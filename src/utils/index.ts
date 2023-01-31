

export const sum = (a: number, b: number) => {
  return a + b
}


export const statusMap = (status: string) => {
  switch(status) {
    case 'success':
      return 'Successfully'
    case 'fail':
      return 'failed'
    case 'warn':
      return 'warning'
    case 'danger':
      return 'dangerous'
    case 'info':
      return 'information'
    case 'text':
      return 'texts'
    default:
      return status
  }
}


export const fetchList = () => {
  return fetch(`/api/user/list/messages`)
}