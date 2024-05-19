package fr.efrei.userservice.api;

import fr.efrei.userservice.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public String ping() {
        return "Hello on User Service" ;
    }

    @GetMapping("/all")
    public List<UserResponse> getAllUser() {
        return userService.getUsers().stream().map(UserResponse::new).toList();
    }

    @GetMapping("/new/{email}/{password}")
    public String createUser(@PathVariable String email, @PathVariable String password) {
        userService.createUser(email, password);
        return "Go to http://localhost:8080/all to see your new record" ;
    }
}
