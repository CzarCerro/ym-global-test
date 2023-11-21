package com.ym.webapp.service;

import com.ym.webapp.entities.User;
import com.ym.webapp.model.LoginModel;
import com.ym.webapp.model.UserModel;
import com.ym.webapp.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public ResponseEntity<?> registerUser(User user) {
        // Check for duplicates based on email
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("User with email " + user.getEmail() + " already exists");
        }

        userRepository.save(user);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @Override
    public ResponseEntity<?> login(LoginModel loginModel) {
        // Find user by email
        User user = userRepository.findByEmail(loginModel.getEmail());

        // Check if user exists
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("User with email " + loginModel.getEmail() + " not found");
        }

        // Check if the password matches
        if (!loginModel.getPassword().equals(user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body("Incorrect password for user with email " + loginModel.getEmail());
        }

        // Login successful
        return ResponseEntity.status(HttpStatus.OK).build();
    }


    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    private UserModel getUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            return new UserModel(user.getUsername(), user.getName(), user.getEmail(), user.getRole());
        } else {
            return null;
        }
    }
}
