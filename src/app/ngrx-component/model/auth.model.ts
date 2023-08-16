export  class AuthRequest {
  userName: string;
  password: string;
  constructor(username: string, password: string) {
    this.userName = username;
    this.password = password;
  }
}

export class AuthResponse {
  id: number;
  name: string;
  type: string;
  constructor(id: number, name: string, type: string) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}
