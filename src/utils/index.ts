

export const sum = (a: number, b: number) => {
  return a + b
}


export const statusMap = (status: string) => {
  switch(status) {
    case 'success':
      return 'Successfully'
    case 'fail':
      return 'fail'
    default:
      return status
  }
}
