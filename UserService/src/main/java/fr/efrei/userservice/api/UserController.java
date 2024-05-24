package fr.efrei.userservice.api;

import fr.efrei.userservice.api.contract.CreateUserRequest;
import fr.efrei.userservice.api.contract.LoginRequest;
import fr.efrei.userservice.api.contract.UserResponse;
import fr.efrei.userservice.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserResponse> getAllUser() {
        return userService.getUsers().stream().map(UserResponse::new).toList();
    }

    @GetMapping("/{userId}/{token}")
    public boolean checkToken(@PathVariable String userId, @PathVariable String token) {
        return userService.checkToken(userId, token);
    }

    @GetMapping("/logout/{userId}")
    public void logout(@PathVariable String userId) {
        userService.signOff(userId);
    }

    @PutMapping("/auth")
    public UserResponse login(@RequestBody LoginRequest loginRequest) {
        var user = userService.login(loginRequest.email(), loginRequest.password());
        return user != null
                ? new UserResponse(user)
                : new UserResponse("-1", null, null, null, null, false);
    }

    @PutMapping
    public UserResponse createUser(@RequestBody CreateUserRequest createUserRequest) {
        var user = userService.createUser(
                createUserRequest.email(),
                createUserRequest.password(),
                createUserRequest.firstName(),
                createUserRequest.lastName(),
                createUserRequest.isLessor()
        );
        return user != null
                ? new UserResponse(user)
                : new UserResponse("-1", null, null, null, null, false);
    }
}
