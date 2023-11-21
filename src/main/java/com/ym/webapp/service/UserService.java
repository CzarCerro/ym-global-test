package com.ym.webapp.service;

import com.ym.webapp.entities.User;
import com.ym.webapp.model.LoginModel;
import com.ym.webapp.model.UserModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    ResponseEntity<?> registerUser(User newUser);
    ResponseEntity<?> login(LoginModel loginModel);
    List<User> getUsers();
}
