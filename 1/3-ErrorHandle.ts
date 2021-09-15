class TimeoutError extends Error {}
class OfflineError extends Error {}

// type NetworkErrorState = {
//   result: "fail";
//   reason: "offline" | "down" | "timeout";
// };
// type SuccessState = {
//   result: "sucess";
// };
// type ResultState = SuccessState | NetworkErrorState;

// class NetworkClient {
//   tryConnect(): ResultState {
//     throw new Error("no network");
//   }
// }

class NetworkClient {
  tryConnect(): void {
    throw new Error("no network");
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
    // login...
  }
}

class App {
  constructor(private userService: UserService) {}
  run() {
    this.userService.login();
  }
}
