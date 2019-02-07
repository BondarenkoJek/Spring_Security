package ua.bondarenkojek.service;

import ua.bondarenkojek.dto.UserDto;
import ua.bondarenkojek.dto.UserRegistrationInput;

public interface UserService {
    UserDto add(UserRegistrationInput user);

    UserDto get(Long id);

    void update(UserDto user);

    void delete(Long id);

    UserDto geUserByLogin(String login);
}
