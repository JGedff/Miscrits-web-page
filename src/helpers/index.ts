export const increment = (num: string): number => {
  return parseInt(num) + 1
}

export const conditional = (v1: any, condition: string, v2?: any): boolean => {
  switch (condition) {
    case '==':
      return (v1 == v2)
    case '===':
      return (v1 === v2)
    case '!=':
      return (v1 != v2)
    case '!==':
      return (v1 !== v2)
    case '>=':
      return (v1 >= v2)
    case '<=':
      return (v1 <= v2)
    case '>':
      return (v1 > v2)
    case '<':
      return (v1 < v2)
    case '&&':
      return (v1 && v2)
    case '||':
      return (v1 || v2)
    case '!':
      return (!v1)
    default:
      return (!v1)
  }
}
