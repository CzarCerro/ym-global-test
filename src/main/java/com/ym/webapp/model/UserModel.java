package com.ym.webapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserModel {
    private String username;
    private String name;
    private String email;
    private String role;
}
