export interface IAccount {
  name: string
  password: string
}
export interface IAccountData {
  id: number
  name: string
  token: string
}
export interface RootObject<T = any> {
  code: number
  data: T
}
export interface IUserInfoRes {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: Date
  updateAt: Date
  role: Role
  department: Department
}

export interface Department {
  id: number
  name: string
  parentId: null
  createAt: Date
  updateAt: Date
  leader: string
}

export interface Role {
  id: number
  name: string
  intro: string
  createAt: Date
  updateAt: Date
}

export interface IUserRoleRes {
  id: number
  name: string
  type: number
  url: string
  icon?: string
  sort: number
  children: Child[]
}

export interface Child {
  id: number
  url: null | string
  name: string
  sort: number | null
  type: number
  children?: Child[] | null
  parentId: number
  permission?: string
}
